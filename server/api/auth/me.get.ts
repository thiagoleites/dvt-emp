import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './login.post';

export default defineEventHandler((event) => {
    const token = getCookie(event, 'auth_token');

    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Não autenticado.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, email: string };
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
