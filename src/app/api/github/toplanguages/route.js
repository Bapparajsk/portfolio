import { redis } from '@/lib/redis';
import { getLanguageColor } from '@/lib/utils';

async function getRepoLanguages(username) {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await reposRes.json();

    const langStats = {};

    for (const repo of repos) {
        const langRes = await fetch(repo.languages_url);
        const langData = await langRes.json();

        for (const [lang, bytes] of Object.entries(langData)) {
            langStats[lang] = (langStats[lang] || 0) + bytes;
        }
    }

    const totalBytes = Object.values(langStats).reduce((sum, val) => sum + val, 0);

    const percentageStats = Object.entries(langStats)
        .map(([lang, bytes]) => ({
            language: lang,
            percent: ((bytes / totalBytes) * 100).toFixed(2)
        }))
        .sort((a, b) => b.percent - a.percent);

    const topLanguages = percentageStats.slice(0, 5).map(({ language, percent }) => ({
        language,
        percent: percent,
        color: getLanguageColor(language)
    }));
    return topLanguages;
}

function parseFloat(value) {
    return Number.isNaN(value) ? 0 : parseFloat(value);
}

export async function GET() {
    try {

        const key = "github-top-languages";
        const cache = await redis.get(key);
        if (cache) {
            return new Response(cache, {
                headers: { 'Content-Type': 'application/json' }
            });
        }
        // Fetch languages from GitHub API
        const languages = await getRepoLanguages("Bapparajsk");
        // Store in Redis cache for 1 hour

        const stringifyData = JSON.stringify(languages);

        await redis.set(key, stringifyData, "EX", 60 * 60 * 24); // Cache for 24 hours

        // Return the languages as JSON response
        return new Response(stringifyData, {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error fetching GitHub languages:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch languages' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}