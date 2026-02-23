import prisma from '../../utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
    // Check if any users exist
    const count = await prisma.user.count()

    if (count > 0) {
        return { success: false, message: 'Setup já foi realizado.' }
    }

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin', 10)

    const user = await prisma.user.create({
        data: {
            email: 'admin@admin.com',
            password: hashedPassword,
            name: 'Administrador'
        }
    })

    return { success: true, message: 'Usuário admin@admin.com com senha "admin" criado com sucesso.' }
})
