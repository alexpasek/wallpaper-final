export const runtime = "edge";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {
            name = "",
                email = "",
                phone = "",
                details = "",
        } = await req.json();

        // receive in Gmail (works fine)
        const TO = "webtoronto22@gmail.com";

        // MailChannels (built into Cloudflare)
        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                email: "no-reply@wallpaper-final.pages.dev",
                name: "Wallpaper Removal Pro",
            },
            headers: email ? { "Reply-To": email } : undefined,
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

        const txt = await r.text();
        if (!r.ok)
            return NextResponse.json({ ok: false, status: r.status, body: txt }, { status: 502 });
        return NextResponse.json({ ok: true });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}