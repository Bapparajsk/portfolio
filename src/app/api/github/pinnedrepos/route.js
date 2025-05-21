import { redis } from "@/lib/redis";
import { getPinnedRepos } from "./utils";

export async function GET() {
    try {
        const cacheKey = 'pinnedRepos';
        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            const repos = JSON.parse(cachedData);
            return new Response(JSON.stringify(repos), { status: 200 });
        }

        const repos = await getPinnedRepos();
        if (!repos) {
            return new Response('Error fetching pinned repos', { status: 500 });
        }
        // Cache the response with a key Cache for 2 day
        // ✅ Use same key for caching
        await redis.set(cacheKey, JSON.stringify(repos), "EX", 60 * 60 * 24 * 2); // Cache for 2 days
        return new Response(JSON.stringify(repos), { status: 200 });
    } catch (error) {
        console.error('Error fetching pinned repos', error);
        return new Response('Error fetching pinned repos', { status: 500 });
    }
}