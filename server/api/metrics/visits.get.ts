import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    // Check auth cookie to ensure only admins can fetch metrics
    const token = getCookie(event, 'auth_token')
    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const [totalVisits, uniqueVisits, totalProjects] = await Promise.all([
        prisma.siteVisit.count(),
        prisma.siteVisit.groupBy({
            by: ['ipHash'],
        }).then((res: { ipHash: string | null }[]) => res.length),
        prisma.project.count()
    ])

    // Get last 7 days of visits
    const last7Days = new Date()
    last7Days.setDate(last7Days.getDate() - 7)

    const recentVisitsData = await prisma.siteVisit.groupBy({
        by: ['path'],
        _count: {
            path: true
        },
        orderBy: {
            _count: {
                path: 'desc'
            }
        },
        take: 5
    })

    return {
        totalVisits,
        uniqueVisits,
        totalProjects,
        topPages: recentVisitsData.map((v: { path: string, _count: { path: number } }) => ({ path: v.path, count: v._count.path }))
    }
})
