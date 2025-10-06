import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        const TO = "webtoroonto24@gmail.com";

        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                email: "no-reply@wallpaper-final.pages.dev", // ✅ authorized domain
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

        if (!r.ok) {
            return NextResponse.json({ ok: false, status: r.status, body: txt }, { status: 502 });
        }

        return NextResponse.json({ ok: true, status: r.status, body: txt });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}