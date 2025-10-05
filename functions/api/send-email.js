// functions/api/send-email.js
export const onRequestPost = async(context) => {
    try {
        const data = await context.request.json();
        const { name = "", email = "", phone = "", details = "" } = data;

        // Your destination email (change to your own)
        const TO = "webtoroonto22@gmail.com";

        // Prepare payload for MailChannels (built into Cloudflare Pages)
        const payload = {
            personalizations: [{ to: [{ email: TO }] }],
            from: {
                email: "no-reply@wallpaper-final.pages.dev",
                name: "Wallpaper Removal Pro",
            },
            subject: "New Quote Request",
            content: [{
                type: "text/plain",
                value: `New quote request:\n\n` +
                    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDetails:\n${details}`,
            }, ],
        };

        const r = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!r.ok) {
            const err = await r.text();
            return new Response(`Error sending email: ${err}`, { status: 500 });
        }

        return new Response("OK", { status: 200 });
    } catch (err) {
        return new Response(`Bad Request: ${err.message}`, { status: 400 });
    }
};