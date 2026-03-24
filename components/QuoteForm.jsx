"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm({ variant = "default" } = {}) {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const isSimple = variant === "simple";
  const isShowcase = variant === "showcase";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setSending(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.name) {
      const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
      if (fullName) {
        data.name = fullName;
      }
    }
    const detailParts = [
      data.projectType ? `Project Type: ${data.projectType}` : "",
      data.timeline ? `Timeline: ${data.timeline}` : "",
      data.serviceArea ? `Service Area: ${data.serviceArea}` : "",
      data.details || "",
    ].filter(Boolean);
    data.details = detailParts.join("\n\n");

    try {
      const r = await fetch("/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const txt = await r.text();
      if (r.ok) {
        router.push("/thank-you/");
        return;
      }

      setStatus(`Error: ${txt || "Email failed"}`);
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const formClass = isShowcase
    ? "grid grid-cols-1 gap-4"
    : isSimple
    ? "grid grid-cols-1 gap-3"
    : "mt-4 grid grid-cols-1 gap-3 md:grid-cols-2";
  const fieldClass = isShowcase
    ? "field-input !min-h-[64px] !rounded-[8px] !border-[rgba(255,255,255,0.3)] !bg-white !px-5 !py-4 !text-[18px] !text-[#171a1f] placeholder:!text-[#9ca3af]"
    : isSimple
    ? "field-input !rounded-[3px] !border-[#efefef] !bg-[#f3f3f3] !py-3.5 !text-[15px]"
    : "field-input";
  const buttonClass = isShowcase
    ? "btn-cta w-full !min-h-[64px] !rounded-[8px] !text-[16px] !tracking-[0.12em] disabled:opacity-70"
    : isSimple
    ? "btn-cta-new mt-1 w-full !rounded-[4px] !py-3.5 text-[15px] disabled:opacity-70"
    : "btn-cta w-full disabled:opacity-70";

  return (
    <form onSubmit={onSubmit} className={formClass}>
      {isShowcase ? (
        <>
          <input
            className={fieldClass}
            name="firstName"
            placeholder="First Name"
            required
          />
          <input
            className={fieldClass}
            name="lastName"
            placeholder="Last Name"
          />
          <input
            className={fieldClass}
            name="phone"
            placeholder="Phone"
            required
          />
          <input
            className={fieldClass}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input type="hidden" name="projectType" value="Quote Request" />
          <input type="hidden" name="timeline" value="Requested from quote page" />
          <input type="hidden" name="serviceArea" value="Website quote page" />
        </>
      ) : isSimple ? (
        <>
          <input className={fieldClass} name="name" placeholder="Name" required />
          <input className={fieldClass} type="email" name="email" placeholder="Email" />
          <input className={fieldClass} name="phone" placeholder="Phone" required />
          <input className={fieldClass} name="serviceArea" placeholder="Service Area" />
          <textarea
            className={fieldClass}
            rows={5}
            name="details"
            placeholder="What Service Do You Require?"
          />
        </>
      ) : (
        <>
          <select className={fieldClass} name="projectType" defaultValue="">
            <option value="" disabled>
              Project Type
            </option>
            <option>Bathroom Renovation</option>
            <option>Basement Renovation</option>
            <option>Home Renovation</option>
            <option>Other Service</option>
          </select>

          <select className={fieldClass} name="timeline" defaultValue="">
            <option value="" disabled>
              Timeline
            </option>
            <option>As soon as possible</option>
            <option>Within 1 month</option>
            <option>1-3 months</option>
            <option>Planning only</option>
          </select>

          <input className={fieldClass} name="name" placeholder="Your Name" required />
          <input className={fieldClass} name="phone" placeholder="Phone Number" required />
          <input
            className={`${fieldClass} md:col-span-2`}
            type="email"
            name="email"
            placeholder="Email (Optional)"
          />
          <textarea
            className={`${fieldClass} md:col-span-2`}
            rows={5}
            name="details"
            placeholder="Your notes (rooms, rough sizes, preferred start)"
          />
        </>
      )}

      <button
        type="submit"
        disabled={sending}
        className={`${buttonClass} ${isSimple ? "" : "md:col-span-2"}`}
      >
        {sending
          ? "Sending..."
          : isShowcase
            ? "GET MY FREE QUOTE"
            : isSimple
              ? "SEND REQUEST"
              : "GET FREE QUOTE"}
      </button>

      {isShowcase && (
        <p className="pt-2 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-white/80">
          We value and protect your privacy.
        </p>
      )}

      {status && (
        <p className={`text-sm text-red-700 ${isSimple ? "" : "md:col-span-2"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
