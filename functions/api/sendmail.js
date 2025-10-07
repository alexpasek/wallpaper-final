// Cloudflare Pages Function: POST /api/sendmail
export const onRequestPost = async({ request }) => {
    try {
        const data = await request.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        // destination inbox
        const TO = "webtoroonto22@gmail.com";

        // MailChannels payload (works on Cloudflare)
        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                // use a domain Cloudflare will allow; your Pages subdomain is safe
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

        const body = await r.text();
        if (!r.ok) {
            return new Response(JSON.stringify({ ok: false, body }), { status: 502 });
        }
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (e) {
        return new Response(
            JSON.stringify({
                ok: false,
                error: e && e.message ? e.message : "Bad request",
            }), { status: 400 }
        );
    }
};