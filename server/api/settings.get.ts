import prisma from '../utils/prisma'

export default defineEventHandler(async (event) => {
    const settings = await prisma.setting.findMany()
    // Convert array of {key, value} to an object { [key]: value }
    return settings.reduce((acc, curr) => {
        acc[curr.key] = curr.value
        return acc
    }, {} as Record<string, string>)
})
