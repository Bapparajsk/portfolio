"use strict";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const { from_name, reply_to, message } = request.body;
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <bapparajsk97@gmail.com>',
            to: ['sbapparaj38@gmail.com'],
            subject: 'Portfolio',
            text: `From: ${from_name} \nEmail: ${reply_to} \nMessage: ${message}`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}