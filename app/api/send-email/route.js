// Next.js App Router API (runs on Cloudflare Workers via OpenNext)
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        // change to your inbox:
        const TO = "webtoroonto22@gmail.com";

        // MailChannels (built into Cloudflare) — no API key needed
        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                email: "no-reply@wallpaper-final.pages.dev",
                name: "Wallpaper Removal Pro",
            },
            subject: "New Quote Request",
            content: [{
                type: "text/plain",
                value: `New quote request

Name: ${name}
Email: ${email}
Phone: ${phone}

Details:
${details}`,
            }, ],
        };

        const r = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!r.ok) {
            const err = await r.text();
            return NextResponse.json({ ok: false, error: err || "Email failed" }, { status: 502 });
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}