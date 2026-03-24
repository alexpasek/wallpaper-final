"use client";

import { useEffect, useState } from "react";

const summaryItems = [
  "EPF Reno is praised for organized bathroom renovations, cleaner worksites, and clear communication from quote to handover.",
  "Homeowners across Mississauga, Oakville, and Burlington highlight strong finish quality, practical layout guidance, and dependable scheduling.",
  "Clients often recommend EPF Reno for ensuite upgrades, shower renovations, powder rooms, and full bathroom remodeling projects in the GTA.",
];

function GoogleStars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-[#f4b400]"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSummaryCard() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <article className="overflow-hidden rounded-[24px] border border-[rgba(95,130,120,0.16)] bg-[linear-gradient(180deg,#ffffff_0%,#f3efe8_100%)] px-5 py-5 shadow-[0_18px_36px_rgba(0,0,0,0.08)] md:px-6 md:py-6">
      <div className="flex items-start gap-3.5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#5f8278_0%,#40645b_100%)] text-white shadow-[0_12px_24px_rgba(64,100,91,0.24)]">
          <svg
            viewBox="0 0 64 64"
            className="h-8 w-8 fill-current"
            aria-hidden="true"
          >
            <path d="M32 7l4.5 11.5L48 23l-11.5 4.5L32 39l-4.5-11.5L16 23l11.5-4.5z" />
            <path d="M48 35l2.8 7.2L58 45l-7.2 2.8L48 55l-2.8-7.2L38 45l7.2-2.8z" />
            <path d="M16 37l2.2 5.8L24 45l-5.8 2.2L16 53l-2.2-5.8L8 45l5.8-2.2z" />
          </svg>
        </div>

        <div>
          <p className="bg-[linear-gradient(180deg,#5f8278_0%,#40645b_100%)] bg-clip-text text-[clamp(1.35rem,2.4vw,1.95rem)] font-extrabold leading-none text-transparent">
            AI-Generated Summary
          </p>
          <p className="mt-1.5 text-[clamp(0.95rem,1.5vw,1.15rem)] leading-none text-[#87827a]">
            Based on recent EPF Reno homeowner feedback
          </p>
        </div>
      </div>

      <div className="mt-5">
        <GoogleStars />
      </div>

      {!ready ? (
        <div className="mt-5 rounded-[18px] border border-[rgba(95,130,120,0.14)] bg-[rgba(95,130,120,0.06)] px-5 py-5">
          <div className="flex items-center gap-3 text-[15px] font-semibold text-[#1d2228]">
            <span className="inline-flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--reno-accent)] [animation-delay:-0.2s]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--reno-accent)] [animation-delay:-0.1s]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--reno-accent)]" />
            </span>
            Generating summary from homeowner feedback...
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[rgba(95,130,120,0.12)]">
            <div className="review-summary-progress h-full w-full origin-left animate-[reviewSummaryLoad_1.1s_ease-out_forwards] rounded-full bg-[linear-gradient(90deg,#5f8278_0%,#d8ab4c_100%)]" />
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-5">
          {summaryItems.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-3 opacity-0 animate-[reviewSummaryFade_0.45s_ease-out_forwards]"
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 shrink-0 text-[#17191d]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13.5 9.2 17.5 19 7.5" />
              </svg>
              <p className="text-[clamp(1rem,1.8vw,1.45rem)] leading-[1.48] tracking-[-0.025em] text-[#1a1d22]">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
