"use client";

import { useEffect, useState } from "react";

function useStickyBottomOffset(defaultPx) {
  const [offset, setOffset] = useState(defaultPx);

  useEffect(() => {
    function update() {
      const el = document.getElementById("sticky-cta");

      if (el) {
        const rect = el.getBoundingClientRect();
        setOffset((rect ? rect.height : 0) + 16);
      } else {
        setOffset(defaultPx);
      }
    }

    update();

    let observer = null;

    try {
      const el = document.getElementById("sticky-cta");

      if (el && typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(() => update());
        observer.observe(el);
      }
    } catch {}

    window.addEventListener("resize", update);

    return () => {
      if (observer) {
        try {
          observer.disconnect();
        } catch {}
      }

      window.removeEventListener("resize", update);
    };
  }, [defaultPx]);

  return offset;
}

export default function ChatWidgetAgent() {
  const buttonBottom = useStickyBottomOffset(24);

  return (
    <a
      href="/quote/"
      aria-label="Open quote form"
      style={{ bottom: `${buttonBottom}px` }}
      className="fixed right-4 z-[9999] grid h-16 w-16 place-items-center rounded-full border border-[rgba(255,243,210,0.85)] bg-[linear-gradient(180deg,#f6dda0_0%,#d8ab4c_46%,#b97e1e_100%)] text-[#1f170a] shadow-[0_18px_30px_rgba(185,126,30,0.28),0_10px_22px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.42)] transition hover:-translate-y-[1px] hover:brightness-[1.06] hover:saturate-[1.08] md:right-6"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3.5h7.5L19 8v12.5H7z" />
        <path d="M14.5 3.5V8H19" />
        <path d="M10 12h6" />
        <path d="M10 15.5h6" />
        <path d="M10 19h4" />
      </svg>
    </a>
  );
}
