import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return await prisma.project.create({
        data: {
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl,
        }
    })
})
