export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('auth_token')

    // If going to an admin route (except login) and no token exists
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
        if (!token.value) {
            return navigateTo('/admin/login')
        }
    }

    // If going to login and already authenticated
    if (to.path === '/admin/login' && token.value) {
        return navigateTo('/admin')
    }
})
