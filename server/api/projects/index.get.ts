import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    return await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    })
})
