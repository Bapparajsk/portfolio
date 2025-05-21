import { redis } from '@/lib/redis';
import { fetchContributions, isValidYear } from './utils';
 
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let years = searchParams.get('year');

    if(years) {
        if (!isValidYear(years)) {
            return new Response('Invalid year', { status: 400 });
        }
    } else {
        const date = new Date();
        years = date.getFullYear();
    }

    const key = `contributions-${years}`;

    const cachedData = await redis.get(key);

    if (cachedData) {
      const contributions = JSON.parse(cachedData);
      return new Response(JSON.stringify(contributions), { status: 200 });
    }

    const contributions = await fetchContributions(years);
    if (!contributions) {
      return new Response('Error fetching contributions', { status: 500 });
    }

    // ✅ Use same key for caching
    await redis.set(key, JSON.stringify(contributions), "EX", 60 * 60 * 24); // Cache for 1 day

    return new Response(JSON.stringify(contributions), { status: 200 });
  } catch (error) {
    console.error('Error fetching contributions', error);
    return new Response('Error fetching contributions', { status: 500 });
  }
}
