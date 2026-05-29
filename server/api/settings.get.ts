import prisma from '../utils/prisma'

let cachedSettings: { value: Record<string, string>; expiresAt: number } | null = null

export default defineEventHandler(async (event) => {
    setHeader(event, 'Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=600')

    const now = Date.now()
    if (cachedSettings && cachedSettings.expiresAt > now) {
        return cachedSettings.value
    }

    const settings = await prisma.setting.findMany()
    // Convert array of {key, value} to an object { [key]: value }
    const value = settings.reduce((acc, curr) => {
        acc[curr.key] = curr.value
        return acc
    }, {} as Record<string, string>)

    cachedSettings = { value, expiresAt: now + 300_000 }
    return value
})
