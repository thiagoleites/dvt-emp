import prisma from '../utils/prisma'
import crypto from 'crypto'

export default defineEventHandler(async (event) => {
    const req = event.node.req
    const path = getRequestURL(event).pathname

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

    // Attempt to save visit asynchronously without blocking response
    try {
        prisma.siteVisit.create({
            data: {
                path,
                ipHash,
                userAgent
            }
        }).catch(console.error)
    } catch (err) {
        // Silently handle
    }
})
