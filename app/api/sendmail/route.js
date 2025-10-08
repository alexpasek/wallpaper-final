// Next.js App Router, runs on Cloudflare Edge
import { NextResponse } from "next/server";
export const runtime = "edge"; // <-- required for Pages

export async function POST(req) {
    try {
        const {
            name = "",
                email = "",
                phone = "",
                details = "",
        } = await req.json();

        const RESEND_API_KEY = process.env.RESEND_API_KEY; // CF Pages -> Secrets
        const TO = process.env.QUOTE_TO_EMAIL || "webtoronto22@gmail.com"; // CF Pages -> Variable
        // For first tests use Resend’s sandbox sender; later switch to your verified domain sender
        const FROM =
            process.env.RESEND_FROM ||
            "Wallpaper Removal Pro <onboarding@resend.dev>";

        const r = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: FROM,
                to: [TO],
                subject: "New Quote Request",
                text: `New quote request

Name: ${name}
Email: ${email}
Phone: ${phone}

Details:
${details}
`,
                reply_to: email || undefined,
            }),
        });

        const txt = await r.text();
        if (!r.ok) {
            return NextResponse.json({ ok: false, status: r.status, body: txt }, { status: 502 });
        }
        return NextResponse.json({ ok: true, body: txt });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}