import prisma from '../utils/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // body should be an object of key-value pairs
    const updates = Object.entries(body).map(async ([key, value]) => {
        return prisma.setting.upsert({
            where: { key },
            update: { value: String(value) },
            create: { key, value: String(value) },
        })
    })

    await Promise.all(updates)

    return { success: true }
})
