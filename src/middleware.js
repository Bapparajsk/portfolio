// middleware.ts
import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '20 s'), // 5 requests per 10s
})

export async function middleware(req) {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'

    // * use for production
    // const { success } = await ratelimit.limit(ip)

    // if (!success) {
    //     return new Response('Too many requests', { status: 429 })
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ['/api/:path*'], // only apply rate limiting to API routes
}
