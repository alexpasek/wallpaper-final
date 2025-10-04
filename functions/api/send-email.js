export const onRequestPost = async ({ request, env }) => {
  try {
    const { name = "", email = "", phone = "", details = "" } = await request.json();
    const TO = env.TO_EMAIL || "webtoronto24@gmail.com";
    const DOMAIN = env.SENDING_DOMAIN || "example.com";
    const payload = {
      personalizations: [{ to: [{ email: TO }] }],
      from: { email: `no-reply@${DOMAIN}`, name: "Wallpaper Removal Pro" },
      subject: "New Quote Request",
      content: [{ type: "text/plain", value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nDetails:\n${details}` }]
    };
    const r = await fetch("https://api.mailchannels.net/tx/v1/send", { method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify(payload) });
    if(!r.ok) return new Response(await r.text(), { status: 500 });
    return new Response("OK");
  } catch { return new Response("Bad Request", { status: 400 }); }
};
