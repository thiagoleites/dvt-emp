import prisma from '../utils/prisma'

const ALLOWED_KEYS = ['home_title', 'home_description', 'footer_text']

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Filter incoming payload against allowed keys to prevent database injection
    const safeUpdates = Object.entries(body).filter(([key]) => ALLOWED_KEYS.includes(key))

    const updates = safeUpdates.map(async ([key, value]) => {
        return prisma.setting.upsert({
            where: { key },
            update: { value: String(value) },
            create: { key, value: String(value) },
        })
    })

    await Promise.all(updates)

    return { success: true }
})
