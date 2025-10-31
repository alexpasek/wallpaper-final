// /app/api/agent/route.js
import { NextResponse } from "next/server";
import {
    recordMessage,
    cancelFuture,
    scheduleFollowups,
    setContact,
} from "@/lib/chatStore";
import QuoteForm from "@/components/QuoteForm";
export const runtime = "edge"; // switch to "edge" and "nodejs" back on the computer only when deploying to Cloudflare

// Use one model var only
var MODEL =
    process.env.OPENAI_MODEL ||
    process.env.NEXT_PUBLIC_OPENAI_MODEL ||
    "gpt-5-mini";
var DEBUG = process.env.NEXT_PUBLIC_DEBUG_AGENT === "1";

/** Sales prompt spanning all services */
var SALES_SYSTEM =
    "ROLE & SERVICES:\n" +
    "You are the Wallpaper Removal Pro AI sales agent for POPCORN CEILING REMOVAL, DRYWALL (board + tape/finish), INTERIOR PAINTING (walls/ceilings/trim on request), and WALLPAPER REMOVAL across the GTA.\n\n" +
    "TONE & STYLE:\n" +
    "- Polite, concise, confident, never pushy. Human and warm.\n" +
    "- One short paragraph or a few bullets per message (max ~6 lines).\n" +
    "- Ask ONE question at a time. Acknowledge what the user already said.\n" +
    "- Mirror the user's service and location words so the reply feels local.\n" +
    "- Use emojis sparingly (e.g., 📞 for call, ✅ for confirmation).\n\n" +
    "GUARDRAILS:\n" +
    "- Provide labour-only ballparks (materials & HST extra). NEVER a final quote.\n" +
    "- Do not invent availability; when asked about timing, use the checkAvailability tool's text.\n" +
    "- Ask for consent before emailing details. Only say 'I've sent your details to the team' AFTER the sendLead tool returns success.\n" +
    "- Prefer phone over email when asking for contact (faster scheduling). If they dislike phone, offer the /quote/ form.\n\n" +
    "DISCOVERY (ASK SEQUENTIALLY | QUALIFY FAST):\n" +
    "1) Service? (popcorn / drywall / painting / wallpaper)\n" +
    "2) City / neighbourhood?\n" +
    "3) Rooms/areas and approx FLOOR sqft (or rough sizes)?\n" +
    "4) Timeline window (e.g., 'next 1–2 weeks', 'this month')?\n" +
    "5) Service-specific details:\n" +
    "   - Popcorn: painted or not? ceiling height? any cracks, stains, pot-light holes?\n" +
    "   - Drywall: board + tape/finish to paint-ready? ceiling heights? complexity/bulkheads?\n" +
    "   - Painting: walls only or walls+ceilings/trim? #coats? colour changes? condition/repairs?\n" +
    "   - Wallpaper: old paper type (vinyl/foil/fabric)? how many walls? any skim-coat needed?\n\n" +
    "BALLPARK PRICING (LABOUR-ONLY; NOT A QUOTE):\n" +
    "- POPCORN: minimum-300s/fothervise cost per job typical 10by 10 room approx $1400-2200  unpainted ~$5.5–$7.5/sqft;minimum-300s/f othervise cost per job typical 10by 10 room approx $1800-2400, more than 300s/f cost by s/f if smaller cost per job  painted/heavy/tall ~$7.5–$9.5+/sqft.  Many main floors finish in 2–4 days.\n" +
    "- DRYWALL (board + tape/finish to paint-ready): ~ $3.5–$5.5/sqft depending complexity/height.\n" +
    "- INTERIOR PAINTING (typical walls): ~ $1.2–$2.2 per FLOOR sqft (rooms, condition, #coats affect).\n" +
    "- WALLPAPER REMOVAL (+ skim/prime): proxy wall area ≈ 2.7 × floor sqft; ~ $0.9–$1.6 per WALL sqft (glue/vinyl/condition affect).\n" +
    "Always repeat: 'These are labour-only ballparks. Materials & HST are extra.'\n\n" +
    "AVAILABILITY & CREDIBILITY:\n" +
    "- When asked about timing, call the checkAvailability tool and include its text.\n" +
    "- Mention homeowner-friendly workflow: protection/containment, HEPA-assist sanding, Level 5 skim for ceilings, tidy daily wrap-ups.\n" +
    "- Note: WSIB + liability insured; written workmanship warranty.\n\n" +
    "NEXT STEPS (ALWAYS OFFER TWO):\n" +
    "- 📞 Call (647) 923-6784 for a quick schedule check, or\n" +
    '- Use this exact HTML (no Markdown, no code fences) for the quote link: <a href=\\"/quote/\\" class=\\"underline underline-offset-2\\">Fast Quote →</a>\n' +
    "When user consents to share details, use sendLead. Confirm ONLY after success.\n\n" +
    +"QUESTION→ANSWER PLAYBOOK (USE WHEN RELEVANT):\n" +
    "Q: Can you handle painted popcorn / pot-light holes / hairline cracks?\n" +
    "A: Yes. We test a small area first; if scraping risks damage we safely encapsulate, then Level 5 skim. We blend pot-light rings, cracks and patches before stain-block primer so the finish reads uniform.\n\n" +
    "Q: Will the house be dusty?\n" +
    "A: We seal rooms, protect floors/stairs, mask HVAC vents, and use HEPA-connected sanding. Daily tidy wrap-ups keep key spaces usable.\n\n" +
    "Q: How long does it take?\n" +
    "A: Many main floors are 2–4 days depending on size/condition. I can tighten that after I know sqft, ceilings and repairs.\n\n" +
    "Q: Can you also paint after removal?\n" +
    "A: Yes—either paint-ready handoff or we can complete finish coats on request. Painting labour typically ~ $1.2–$2.2 per floor sqft (materials & HST extra).\n\n" +
    "Q: What affects price the most?\n" +
    "A: Size (sqft), height, whether popcorn is painted, repairs/bulkheads, and number of rooms/hallways. I'll tailor the ballpark once I have those.\n\n" +
    "Q: Do you work in my area?\n" +
    "A: Yes, we cover the GTA. If you share the exact city/neighbourhood, I'll be specific and link local resources when useful.\n\n" +
    "Q: Can you start soon?\n" +
    "A: I'll check openings (small jobs next week; larger main floors the following week is common). If timing is tight, a quick call helps lock a slot.\n\n" +
    "OBJECTION HANDLING (BE HELPFUL, NOT PUSHY):\n" +
    "- Price high? Offer lighter-scope options (e.g., staged rooms, paint-ready handoff). Reconfirm benefits: Level 5 skim, clean workflow, warranty.\n" +
    "- Need to think? Summarize details + ballpark in 2 bullets; offer to send a href=/quote/ link with fields prefilled. Ask permission first.\n" +
    "- Shopping around? Encourage apples-to-apples: painted vs unpainted rates, Level 5 skim, primer type, protection, timeline, warranty.\n\n" +
    "FORMAT & CADENCE:\n" +
    "- Acknowledge → One clarifying question → Short, tailored ballpark or next step.\n" +
    "- Keep replies brief; break lists into bullets; avoid jargon.\n" +
    "- End with the two CTAs: phone and /quote/.\n\n" +
    "OUTPUT RULES:\n" +
    "- Confirm user details back to them.\n" +
    "- Use createQuoteLink to prefill /quote/ when you have name/phone/city/details.\n" +
    "- Before sendLead, explicitly ask: 'Want me to send this to the crew so they can call/text you with openings?' Only after tool success, say it was sent.\n" +
    "- If details are missing, ask the highest-impact question next (service, city/neighbourhood, floor sqft, timeline).\n";


function toolsSpec() {
    return [{
            type: "function",
            function: {
                name: "getPricingEstimate",
                description: "Labour-only ballpark for a service. service: 'popcorn' | 'drywall' | 'painting' | 'wallpaper'. Input sqft is FLOOR sqft; function handles wall area proxies internally for painting/wallpaper.",
                parameters: {
                    type: "object",
                    properties: {
                        service: {
                            type: "string",
                            enum: ["popcorn", "drywall", "painting", "wallpaper"],
                        },
                        sqft: { type: "number" },
                        painted: { type: "boolean", description: "Only for popcorn." },
                        repairs: {
                            type: "string",
                            enum: ["none", "light", "moderate", "heavy"],
                            default: "none",
                        },
                        ceilingHeightFt: { type: "number", default: 8 },
                        rooms: { type: "number", default: 1 },
                        city: { type: "string", default: "" },
                    },
                    required: ["service", "sqft"],
                },
            },
        },
        {
            type: "function",
            function: {
                name: "createQuoteLink",
                description: "Return a /quote/ link prefilled with qs params + current path/utm if provided.",
                parameters: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        phone: { type: "string" },
                        email: { type: "string" },
                        city: { type: "string" },
                        details: { type: "string" },
                        sourcePath: { type: "string" },
                        utm: { type: "string" },
                    },
                },
            },
        },
        {
            type: "function",
            function: {
                name: "sendLead",
                description: "Email lead to team via internal /api/sendmail/. Use ONLY with user consent.",
                parameters: {
                    type: "object",
                    properties: {
                        sessionId: { type: "string" },
                        name: { type: "string" },
                        phone: { type: "string" },
                        email: { type: "string" },
                        city: { type: "string" },
                        details: { type: "string" },
                        sourcePath: { type: "string" },
                        utm: { type: "string" },
                    },
                    required: ["sessionId", "details"],
                },
            },
        },
        {
            type: "function",
            function: {
                name: "checkAvailability",
                description: "Return availability blurb for next 2–3 weeks (static).",
                parameters: { type: "object", properties: {} },
            },
        },
    ];
}

/** Old-school helpers (no optional chaining) */
function pick(obj, key, def) {
    if (!obj) return def;
    return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : def;
}

/** Ballpark per service (LABOUR ONLY) */
function estimateByService(input) {
    var service = pick(input, "service", "popcorn");
    var sqft = Number(pick(input, "sqft", 0));
    var painted = !!pick(input, "painted", false);
    var repairs = pick(input, "repairs", "none");
    var ceilingHeightFt = Number(pick(input, "ceilingHeightFt", 8));

    if (sqft <= 0) return { ok: false, error: "sqft must be > 0" };

    var result = {
        labourLow: 0,
        labourHigh: 0,
        rateLow: 0,
        rateHigh: 0,
        days: 2,
        note: "Labour-only ballpark. Materials & HST extra.",
    };

    if (service === "popcorn") {
        var low = painted ? 7.5 : 5.5;
        var high = painted ? 9.5 : 7.5;
        var bumpMap = { none: 0, light: 0.5, moderate: 1.0, heavy: 2.0 };
        var bump = pick(bumpMap, repairs, 0);
        low += bump;
        high += bump;
        if (ceilingHeightFt >= 9 && ceilingHeightFt < 11) {
            low += 0.5;
            high += 0.75;
        } else if (ceilingHeightFt >= 11) {
            low += 1.0;
            high += 1.5;
        }
        result.rateLow = low;
        result.rateHigh = high;
        result.labourLow = Math.round(low * sqft);
        result.labourHigh = Math.round(high * sqft);
        result.days = sqft > 1100 ? 4 : sqft > 700 ? 3 : 2;
        return { ok: true, result: result };
    }

    if (service === "drywall") {
        var dLow = 3.5,
            dHigh = 5.5;
        if (ceilingHeightFt >= 9 && ceilingHeightFt < 11) {
            dLow += 0.3;
            dHigh += 0.5;
        } else if (ceilingHeightFt >= 11) {
            dLow += 0.6;
            dHigh += 0.9;
        }
        var dBumpMap = { none: 0, light: 0.2, moderate: 0.5, heavy: 1.0 };
        var dBump = pick(dBumpMap, repairs, 0);
        dLow += dBump;
        dHigh += dBump;
        result.rateLow = dLow;
        result.rateHigh = dHigh;
        result.labourLow = Math.round(dLow * sqft);
        result.labourHigh = Math.round(dHigh * sqft);
        result.days = sqft > 1200 ? 5 : sqft > 800 ? 4 : 3;
        return { ok: true, result: result };
    }

    if (service === "painting") {
        var pLowRate = 1.2,
            pHighRate = 2.2;
        var pBumpMap = { none: 0, light: 0.2, moderate: 0.5, heavy: 0.9 };
        var pBump = pick(pBumpMap, repairs, 0);
        pLowRate += pBump;
        pHighRate += pBump;
        result.rateLow = pLowRate;
        result.rateHigh = pHighRate;
        result.labourLow = Math.round(pLowRate * sqft);
        result.labourHigh = Math.round(pHighRate * sqft);
        result.days = sqft > 1400 ? 4 : sqft > 800 ? 3 : 2;
        return { ok: true, result: result };
    }

    if (service === "wallpaper") {
        var wallSqft = Math.round(sqft * 2.7);
        var wLowPerWall = 0.9,
            wHighPerWall = 1.6;
        var wBumpMap = { none: 0, light: 0.1, moderate: 0.3, heavy: 0.6 };
        var wBump = pick(wBumpMap, repairs, 0);
        wLowPerWall += wBump;
        wHighPerWall += wBump;
        result.rateLow = wLowPerWall;
        result.rateHigh = wHighPerWall;
        result.labourLow = Math.round(wLowPerWall * wallSqft);
        result.labourHigh = Math.round(wHighPerWall * wallSqft);
        result.days = wallSqft > 3000 ? 4 : wallSqft > 1800 ? 3 : 2;
        result.note += " Uses wall-area proxy ≈ 2.7× floor sqft.";
        return { ok: true, result: result };
    }

    return { ok: false, error: "Unknown service" };
}

/** Execute tool calls (no optional chaining) */
async function toolRunner(name, args) {
    if (name === "getPricingEstimate") return estimateByService(args || {});
    if (name === "createQuoteLink") {
        var qs = new URLSearchParams();
        if (args && args.name) qs.set("name", args.name);
        if (args && args.phone) qs.set("phone", args.phone);
        if (args && args.email) qs.set("email", args.email);
        if (args && args.city) qs.set("city", args.city);
        if (args && args.details) qs.set("details", args.details);
        if (args && args.sourcePath) qs.set("source", args.sourcePath);
        if (args && args.utm) qs.set("utm", args.utm);
        return { ok: true, result: "/quote/?" + qs.toString() };
    }
    if (name === "sendLead") {
        try {
            if (args && args.sessionId && (args.email || args.phone)) {
                setContact(args.sessionId, {
                    email: args.email || "",
                    phone: args.phone || "",
                    consent: { email: args.email ? true : false },
                });
            }
            var base = process.env.NEXT_PUBLIC_BASE_URL || "";
            var html =
                "<h3>Website Chat Lead</h3>" +
                "<p><b>Name:</b> " +
                (args && args.name ? args.name : "") +
                "</p>" +
                "<p><b>Phone:</b> " +
                (args && args.phone ? args.phone : "") +
                "</p>" +
                "<p><b>Email:</b> " +
                (args && args.email ? args.email : "") +
                "</p>" +
                "<p><b>City:</b> " +
                (args && args.city ? args.city : "") +
                "</p>" +
                "<p><b>Source:</b> " +
                (args && args.sourcePath ? args.sourcePath : "") +
                (args && args.utm ? " (" + args.utm + ")" : "") +
                "</p>" +
                '<pre style="white-space:pre-wrap;">' +
                (args && args.details ? args.details : "") +
                "</pre>";

            await fetch(base + "/api/sendmail/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subject: "New Website Chat Lead", html: html }),
            });
            return { ok: true, result: "Lead emailed" };
        } catch (e) {
            return { ok: false, error: "Email failed" };
        }
    }
    if (name === "checkAvailability") {
        return {
            ok: true,
            result: "Openings: small jobs next week; larger main floors the following week. Evenings for estimates available.",
        };
    }
    return { ok: false, error: "Unknown tool" };
}

/** OpenAI call with tools (no optional chaining) */
async function callOpenAI(messages, ctx) {
    var key = process.env.OPENAI_API_KEY;
    if (!key) return null;

    var body1 = {
        model: MODEL,
        temperature: 0.3,
        messages: [
            { role: "system", content: SALES_SYSTEM },
            {
                role: "system",
                content: "Context: path=" +
                    (ctx && ctx.source ? ctx.source : "") +
                    " utm=" +
                    (ctx && ctx.utm ? ctx.utm : "") +
                    " session=" +
                    (ctx && ctx.sessionId ? ctx.sessionId : ""),
            },
        ].concat(messages),
        tools: toolsSpec(),
        tool_choice: "auto",
    };

    var r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + key,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body1),
    });
    var data = await r.json();
    if (!r.ok)
        throw new Error("LLM error " + r.status + ": " + JSON.stringify(data));

    var choices = data && data.choices ? data.choices : [];
    var assistant = choices.length > 0 ? choices[0].message : null;

    var call = null;
    if (assistant && assistant.tool_calls && assistant.tool_calls.length > 0) {
        call = assistant.tool_calls[0];
    }

    if (call) {
        var args = {};
        try {
            args = JSON.parse(
                call.function && call.function.arguments ?
                call.function.arguments :
                "{}"
            );
        } catch (e) {
            args = {};
        }
        if (
            call.function &&
            call.function.name === "sendLead" &&
            ctx &&
            ctx.sessionId
        ) {
            args.sessionId = ctx.sessionId;
        }

        var toolRes = await toolRunner(
            call.function ? call.function.name : "",
            args
        );

        var body2 = {
            model: MODEL,
            temperature: 0.2,
            messages: [
                    { role: "system", content: SALES_SYSTEM },
                    {
                        role: "system",
                        content: "Context: path=" +
                            (ctx && ctx.source ? ctx.source : "") +
                            " utm=" +
                            (ctx && ctx.utm ? ctx.utm : "") +
                            " session=" +
                            (ctx && ctx.sessionId ? ctx.sessionId : ""),
                    },
                ]
                .concat(messages)
                .concat([
                    assistant,
                    {
                        role: "tool",
                        tool_call_id: call.id,
                        name: call.function ? call.function.name : "unknown",
                        content: JSON.stringify(toolRes),
                    },
                ]),
        };

        var r2 = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + key,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body2),
        });
        var data2 = await r2.json();
        if (!r2.ok)
            throw new Error(
                "LLM step2 error " + r2.status + ": " + JSON.stringify(data2)
            );

        var choices2 = data2 && data2.choices ? data2.choices : [];
        var finalMsg = choices2.length > 0 ? choices2[0].message : null;
        return finalMsg && finalMsg.content ? finalMsg.content : null;
    }

    return assistant && assistant.content ? assistant.content : null;
}

/** Detect service from last user text for fallback copy */
function detectServiceFromText(text) {
    var s = (text || "").toLowerCase();
    if (s.indexOf("drywall") >= 0) return "drywall";
    if (s.indexOf("paint") >= 0) return "painting";
    if (s.indexOf("wallpaper") >= 0) return "wallpaper";
    return "popcorn";
}

export async function POST(req) {
    try {
        var body = await req.json();
        var messages = body && body.messages ? body.messages : [];
        var sessionId = body && body.sessionId ? body.sessionId : "";
        var source = body && body.source ? body.source : "";
        var utm = body && body.utm ? body.utm : "";

        if (!sessionId) {
            return NextResponse.json({ reply: "missing sessionId", usedFallback: true }, { status: 400 });
        }

        var last = messages.length > 0 ? messages[messages.length - 1] : null;
        if (last && last.role === "user")
            recordMessage(sessionId, "user", last.content);

        var reply = null;
        var usedFallback = false;
        var diag = null;

        try {
            reply = await callOpenAI(messages, {
                sessionId: sessionId,
                source: source,
                utm: utm,
            });
        } catch (e) {
            if (DEBUG) {
                diag = {
                    error: String(e && e.message ? e.message : e),
                    hasKey: !!process.env.OPENAI_API_KEY,
                    model: MODEL,
                };
            }
        }

        if (!reply) {
            usedFallback = true;
            var lastText = last && last.content ? last.content : "";
            var svc = detectServiceFromText(lastText);
            var priceLine = "";
            if (svc === "drywall")
                priceLine =
                "Drywall (board + tape/finish) often lands ~ $3.5–$5.5/sqft labour depending height/complexity. ";
            else if (svc === "painting")
                priceLine =
                "Interior painting commonly ~ $1.2–$2.2 per floor sqft labour (condition/coats affect). ";
            else if (svc === "wallpaper")
                priceLine =
                "Wallpaper removal (+ skim/prime) uses wall proxy ≈ 2.7× floor sqft: ~ $0.9–$1.6 per wall sqft labour (glue/vinyl/condition affect). ";
            else
                priceLine =
                "Unpainted popcorn often ~ $5.5–$7.5/sqft labour; painted/heavier repairs ~$7.5–$9.5+/sqft. ";

            reply =
                priceLine +
                "Materials & HST extra.\n\n" +
                "Could you share the city/neighbourhood, rooms/areas, approx. sqft, and timing? I’ll tighten the range.\n\n" +
                "Next steps: call 📞 (647) 923-6784 or fast quote at /quote/.";
        }

        recordMessage(sessionId, "assistant", reply);
        cancelFuture(sessionId);
        scheduleFollowups(sessionId, { email: true });

        var payload = { reply: reply, usedFallback: usedFallback };
        if (DEBUG)
            payload.diag = diag || {
                ok: true,
                hasKey: !!process.env.OPENAI_API_KEY,
                model: MODEL,
            };
        return NextResponse.json(payload);
    } catch (e) {
        var payload = {
            reply: "Server error. Please call (647) 923-6784 or use /quote/.",
            usedFallback: true,
        };
        if (DEBUG) payload.diag = { error: String(e && e.message ? e.message : e) };
        return NextResponse.json(payload, { status: 500 });
    }
}