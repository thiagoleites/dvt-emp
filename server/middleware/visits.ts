import prisma from '../utils/prisma'
import crypto from 'crypto'

const recentVisits = new Map<string, number>()
const recentVisitTtlMs = 10 * 60 * 1000

export default defineEventHandler(async (event) => {
    const req = event.node.req
    const path = getRequestURL(event).pathname
    if (req.method && req.method !== 'GET') {
        return
    }

    // Only track visits to standard public pages, ignoring API, admin, and assets
    if (
        path.startsWith('/api') ||
        path.startsWith('/admin') ||
        path.startsWith('/_nuxt') ||
        path.includes('.')
    ) {
        return
    }

    // Basic fingerprinting (IP address hash)
    const forwardedFor = getRequestHeader(event, 'x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : req.socket.remoteAddress || 'unknown'
    const ipHash = crypto.createHash('sha256').update(ip ?? 'unknown').digest('hex').substring(0, 16)

    const userAgent = getRequestHeader(event, 'user-agent') || 'unknown'

    const key = `${ipHash}:${path}`
    const now = Date.now()
    const last = recentVisits.get(key)
    if (last && now - last < recentVisitTtlMs) {
        return
    }
    recentVisits.set(key, now)
    if (recentVisits.size > 5000) {
        for (const [k, v] of recentVisits) {
            if (now - v > recentVisitTtlMs) {
                recentVisits.delete(k)
            }
            if (recentVisits.size <= 4000) {
                break
            }
        }
    }

    // Attempt to save visit asynchronously without blocking response
    try {
        const isDev = process.env.NODE_ENV !== 'production'
        prisma.siteVisit.create({
            data: {
                path,
                ipHash,
                userAgent
            }
        }).catch((err) => {
            if (isDev) {
                console.error(err)
            }
        })
    } catch (err) {
        // Silently handle
    }
})
