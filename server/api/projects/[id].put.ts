import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'))
    const body = await readBody(event)

    if (isNaN(id)) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
    }

    return await prisma.project.update({
        where: { id },
        data: {
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl,
        }
    })
})
