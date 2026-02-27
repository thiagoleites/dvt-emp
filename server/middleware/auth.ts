import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../api/auth/login.post'

export default defineEventHandler(async (event) => {
    const path = getRequestURL(event).pathname

    // Protect /api/projects, /api/settings endpoints for mutation
    // GET requests might be public depending on the site, but let's protect all for admin
    // Wait, public site needs to GET projects and settings!

    const isProtected =
        path.startsWith('/api/projects') ||
        (path.startsWith('/api/settings') && event.method !== 'GET')

    if (isProtected) {
        const token = getCookie(event, 'auth_token')

        if (!token) {
            throw createError({ statusCode: 401, statusMessage: 'Não autorizado.' })
        }

        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            throw createError({ statusCode: 401, statusMessage: 'Token inválido ou expirado.' })
        }
    }
})
