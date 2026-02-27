import prisma from '../../utils/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    const JWT_SECRET = runtimeConfig.jwtSecret as string

    if (!JWT_SECRET) {
        throw createError({ statusCode: 500, statusMessage: 'JWT_SECRET is missing on the server.' })
    }

    const body = await readBody(event)

    if (!body?.email || !body?.password) {
        throw createError({ statusCode: 400, statusMessage: 'Email e senha são obrigatórios.' })
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } })

    if (!user || !(await bcrypt.compare(body.password, user.password))) {
        throw createError({ statusCode: 401, statusMessage: 'Credenciais inválidas.' })
    }

    // Generate token
    const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '7d' }
    )

    // Set HTTP Only Cookie
    setCookie(event, 'auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/' // ensure cookie is sent for all routes
    })

    return {
        success: true,
        user: { id: user.id, email: user.email, name: user.name }
    }
})
