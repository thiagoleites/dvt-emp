export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig();

    if (!runtimeConfig.powSecret) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Proof of Work secret is not configured on the server.',
        });
    }

    // Generate a cryptographically signed challenge
    const powData = generateChallenge(runtimeConfig.powSecret);

    return {
        success: true,
        data: powData
    };
});
