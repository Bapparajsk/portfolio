"use strict";
import { createTransport } from 'nodemailer';

export async function POST(request) {
    const { from_name, reply_to, massage } = await request.json();

    if (!from_name || !reply_to || !massage) {
        return Response.json({ error: 'Please provide all fields' }, { status: 400 });
    }

    try {

        const NODEMAILER_USER = process.env.NODEMAILER_USER;
        const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
        const MY_EMAIL = process.env.MY_EMAIL;

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
            text: `Name: ${from_name} \nEmail: ${reply_to} \nMessage: ${massage}`,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
        
        return Response.json({ error }, { status: 500 });
    }
}