import crypto from 'node:crypto';

const DIFFICULTY = 4; // Number of leading zeros required in the hash (e.g., "0000a1b2...")
const CHALLENGE_EXPIRATION_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Generates a signed cryptographic challenge for Proof-of-Work.
 * The challenge contains a timestamp to prevent replay attacks and is signed with HMAC.
 */
export function generateChallenge(secret: string): { challenge: string, difficulty: number } {
    const timestamp = Date.now().toString();
    // We use random bytes to ensure each challenge is truly unique even within the same millisecond
    const randomSalt = crypto.randomBytes(8).toString('hex');
    const payload = `${timestamp}:${randomSalt}`;

    // Sign the payload so clients cannot invent their own challenges
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const signature = hmac.digest('hex');

    const challenge = `${payload}:${signature}`;

    return { challenge, difficulty: DIFFICULTY };
}

/**
 * Verifies if a submitted challenge is valid, authentic, and not expired.
 */
export function verifyChallenge(challenge: string, secret: string): boolean {
    if (!challenge || typeof challenge !== 'string') return false;

    const parts = challenge.split(':');
    if (parts.length !== 3) return false;

    const [timestampStr, randomSalt, signature] = parts;
    if (!timestampStr || !randomSalt || !signature) return false;

    // Check expiration
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) return false;

    const now = Date.now();
    if (now - timestamp > CHALLENGE_EXPIRATION_MS) {
        return false; // Challenge expired
    }

    // Verify signature to ensure it was created by us
    const payload = `${timestampStr}:${randomSalt}`;
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const expectedSignature = hmac.digest('hex');

    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

/**
 * Verifies if the Proof-of-Work (the mined nonce) correctly solves the challenge.
 */
export function verifyProofOfWork(challenge: string, nonce: number | string): boolean {
    if (nonce === undefined || nonce === null) return false;

    const input = `${challenge}:${nonce}`;

    // Hash the challenge + nonce
    const hashHex = crypto.createHash('sha256').update(input).digest('hex');

    // The hash MUST start with exactly "DIFFICULTY" number of '0' characters
    const targetPrefix = '0'.repeat(DIFFICULTY);

    return hashHex.startsWith(targetPrefix);
}
