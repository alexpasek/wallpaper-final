// Cloudflare Pages Function: /api/sendmail
export const onRequestPost = async({ request, env }) => {
    try {
        const data = await request.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        const RESEND_API_KEY = env.RESEND_API_KEY;
        const TO = "webtoronto22@gmail.com"; // your inbox
        const FROM = "no-reply@epfproservices.com"; // your domain sender

        if (!RESEND_API_KEY) {
            return new Response(
                JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), { status: 500 }
            );
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
                subject: "New Quote Request from Wallpaper Removal PRO",
                text: `New quote request
  
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  
  Details:
  ${details}`,
            }),
        });

        const text = await r.text();

        if (!r.ok) {
            return new Response(
                JSON.stringify({ ok: false, status: r.status, error: text }), { status: 502 }
            );
        }

        return new Response(
            JSON.stringify({ ok: true, message: "Email sent successfully!" }), { status: 200 }
        );
    } catch (e) {
        return new Response(
            JSON.stringify({ ok: false, error: e.message || "Bad request" }), { status: 400 }
        );
    }
};