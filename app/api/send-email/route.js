import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        // Change this to your inbox:
        const TO = "webtoroonto22@gmail.com";

        // MailChannels (built into Cloudflare)
        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                email: "no-reply@notify.cloudflare.com", // safe sender for Pages
                name: "Wallpaper Removal Pro",
            },
            reply_to: email ? [{ email }] : undefined,
            subject: "New Quote Request",
            content: [{
                type: "text/plain",
                value: `New quote request:

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

        const result = await r.text();
        if (!r.ok) {
            return NextResponse.json({ ok: false, error: result || "MailChannels error" }, { status: 502 });
        }

        return NextResponse.json({ ok: true, result });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}