import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'))

    if (isNaN(id)) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
    }

    await prisma.project.delete({
        where: { id }
    })

    return { success: true }
})
