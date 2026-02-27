export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.startsWith('/admin')) {
        // useFetch automatically forwards headers/cookies in SSR, calling the backend for real JWT validation
        const { data, error } = await useFetch('/api/auth/me')
        const isAuthenticated = !error.value && data.value

        if (to.path !== '/admin/login' && !isAuthenticated) {
            return navigateTo('/admin/login')
        }

        if (to.path === '/admin/login' && isAuthenticated) {
            return navigateTo('/admin')
        }
    }
})
