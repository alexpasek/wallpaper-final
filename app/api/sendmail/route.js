// app/api/sendmail/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const TO = "webtoronto22@gmail.com";
        const FROM = "no-reply@epfproservices.com";

        if (!RESEND_API_KEY) {
            return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
        }

        const r = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: FROM,
                to: [TO],
                reply_to: email || undefined,
                subject: "New Quote Request",
                text: `New quote request:

Name: ${name}
Email: ${email}
Phone: ${phone}

Details:
${details}`,
            }),
        });

        const text = await r.text();
        if (!r.ok) {
            return NextResponse.json({ ok: false, status: r.status, error: text }, { status: 502 });
        }

        return NextResponse.json({ ok: true, message: "Email sent successfully!" });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e.message || "Bad request" }, { status: 400 });
    }
}