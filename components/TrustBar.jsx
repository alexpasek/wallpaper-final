const trustHighlights = [
  {
    stat: "17000+",
    title: "Happy Homeowners",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"
          fill="currentColor"
        />
        <circle cx="9" cy="10" r="1.2" fill="#111317" />
        <circle cx="15" cy="10" r="1.2" fill="#111317" />
        <path
          d="M8 14.2c1.1 1.2 2.4 1.8 4 1.8s2.9-.6 4-1.8"
          fill="none"
          stroke="#111317"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    stat: "37 Years",
    title: "Family Owned",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 10.5L12 4l8 6.5V20h-5.5v-5h-5v5H4v-9.5z"
          fill="currentColor"
        />
        <path
          d="M9.1 11.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zm5.8 0a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zM7.2 16.2c.7-1.6 1.9-2.4 3.6-2.4s2.9.8 3.6 2.4"
          fill="#111317"
          stroke="#111317"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    stat: "1100+",
    title: "Positive Reviews",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M9 21H6.5a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5H9V21zm2-11 2.8-5c.3-.6.9-1 1.6-1H16a2 2 0 0 1 2 2v2.1l-1.1 2.3H19a2 2 0 0 1 2 2l-1.1 5.4A2 2 0 0 1 17.9 20H11V10z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function TrustBar({ className = "" }) {
  return (
    <div
      className={["mx-auto max-w-[980px]", className].filter(Boolean).join(" ")}
    >
      <div className="rounded-[22px] border border-[rgba(221,212,192,0.92)] bg-[linear-gradient(180deg,rgba(255,255,255,0.997),rgba(247,243,235,0.992))] px-4 py-4 text-[var(--reno-ink)] shadow-[0_20px_48px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] card-gloss md:px-6 md:py-5">
        <div className="grid gap-2.5 md:grid-cols-3">
          {trustHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] border border-[rgba(17,19,23,0.1)] bg-white/92 px-4 py-3.5 shine-overlay hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(95,130,120,0.16)] text-[var(--reno-accent-dark)]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[22px] font-black uppercase leading-none text-[var(--reno-ink)] md:text-[26px]">
                    {item.stat}
                  </p>
                  <h2 className="mt-1 text-[16px] font-black uppercase leading-[0.94] text-[var(--reno-ink)] display-title md:text-[18px]">
                    {item.title}
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 border-t border-[rgba(17,19,23,0.1)] pt-3">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Award-Winning Renovation Services
            </p>
            <div className="flex flex-wrap gap-2">
              {["Bathroom", "Basement", "Home Reno"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[rgba(95,130,120,0.24)] bg-[rgba(95,130,120,0.12)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--reno-accent-dark)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
