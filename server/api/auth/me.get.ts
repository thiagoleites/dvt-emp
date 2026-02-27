import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
    const token = getCookie(event, 'auth_token');
    const runtimeConfig = useRuntimeConfig();

    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Não autenticado.' });
    }

    try {
        const decoded = jwt.verify(token, runtimeConfig.jwtSecret as string) as { userId: string, email: string };
        return {
            success: true,
            user: {
                id: decoded.userId,
                email: decoded.email
            }
        };
    } catch (err) {
        throw createError({ statusCode: 401, statusMessage: 'Token inválido ou expirado.' });
    }
});
