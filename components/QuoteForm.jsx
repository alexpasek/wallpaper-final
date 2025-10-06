"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("Sending...");
    try {
      const r = await fetch("/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(
        r.ok ? "Thanks! We received your request." : `Error: ${await r.text()}`
      );
    } catch {
      setStatus("Network error.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        className="border rounded-2xl p-3"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="border rounded-2xl p-3"
        name="phone"
        placeholder="Phone"
      />
      <input
        className="border rounded-2xl p-3 md:col-span-2"
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-3 md:col-span-2"
        rows={5}
        name="details"
        placeholder="Project details"
      />
      <button className="btn-cta md:col-span-2" type="submit">
        Send
      </button>
      {status && (
        <p className="text-sm md:col-span-2">
          Error: {status.startsWith("Error") ? status : ""}
          {!status.startsWith("Error") && status}
        </p>
      )}
    </form>
  );
}
