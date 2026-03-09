"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setSending(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

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

  return (
    <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <select className="field-input" name="projectType" defaultValue="">
        <option value="" disabled>
          Project Type
        </option>
        <option>Bathroom Renovation</option>
        <option>Basement Renovation</option>
        <option>Home Renovation</option>
        <option>Other Service</option>
      </select>

      <select className="field-input" name="timeline" defaultValue="">
        <option value="" disabled>
          Timeline
        </option>
        <option>As soon as possible</option>
        <option>Within 1 month</option>
        <option>1-3 months</option>
        <option>Planning only</option>
      </select>

      <input className="field-input" name="name" placeholder="Your Name" required />
      <input className="field-input" name="phone" placeholder="Phone Number" required />
      <input
        className="field-input md:col-span-2"
        type="email"
        name="email"
        placeholder="Email (Optional)"
      />
      <textarea
        className="field-input md:col-span-2"
        rows={5}
        name="details"
        placeholder="Your notes (rooms, rough sizes, preferred start)"
      />

      <button type="submit" disabled={sending} className="btn-cta md:col-span-2 w-full disabled:opacity-70">
        {sending ? "Sending..." : "GET FREE QUOTE"}
      </button>

      {status && <p className="text-sm md:col-span-2 text-red-700">{status}</p>}
    </form>
  );
}
