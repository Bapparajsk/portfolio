"use strict";
import { createTransport } from 'nodemailer';

const rateLimit = new Map(); // Store request counts per IP

const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 1 day
const MAX_REQUESTS_PER_WINDOW = 5; // Max requests allowed per window
const CLEANUP_INTERVAL_MS = 60 * 60 * 1000; // Cleanup old entries every 1 hour

setInterval(() => {
    const now = Date.now();
    for (const [key, { lastRequest }] of rateLimit.entries()) {
        if (now - lastRequest > RATE_LIMIT_WINDOW_MS) {
            rateLimit.delete(key);
        }
    }
}, CLEANUP_INTERVAL_MS);

export async function POST(request) {

    const clientIp = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    
    // Rate limiting logic
    const clientData = rateLimit.get(clientIp) || { count: 0, lastRequest: 0 };
    if (now - clientData.lastRequest > RATE_LIMIT_WINDOW_MS) {
        clientData.count = 0; // Reset count if outside the window
    }
    clientData.count++;
    clientData.lastRequest = now;
    rateLimit.set(clientIp, clientData);

    if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
        return new Response(
            JSON.stringify({ error: "Too many requests. Please try again later."}),
            { status: 429, headers: { "Content-Type": "application/json" } }
        );
    }

    const { from_name, reply_to, message } = await request.json();
    if (!from_name || !reply_to || !message) {
        return Response.json({ error: 'Please provide all fields' }, { status: 400 });
    }

    try {
        const NODEMAILER_USER = process.env.NODEMAILER_USER || "sbapparaj38@gmail.com";
        const NODEMAILER_PASS = process.env.NODEMAILER_PASS || "xnal fjba pqpq pggp";
        const MY_EMAIL = process.env.MY_EMAIL || "bapparajsk97@gmail.com";

        if (!NODEMAILER_USER || !NODEMAILER_PASS || !MY_EMAIL) {
            throw new Error('Please provide NODEMAILER_USER and NODEMAILER_PASS');
        }

        const transporter = createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: NODEMAILER_USER,
                pass: NODEMAILER_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio" <bapparaj@code.com>`, // sender address
            to: MY_EMAIL,
            subject: 'New message from portfolio',
            text: `Name: ${from_name} \nEmail: ${reply_to} \nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'Email sent successfully' });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
