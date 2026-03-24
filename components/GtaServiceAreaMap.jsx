const mapLabels = [
  { name: "Milton", x: "29%", y: "24%" },
  { name: "Mississauga", x: "39%", y: "39%" },
  { name: "Etobicoke", x: "51%", y: "30%" },
  { name: "Toronto", x: "62%", y: "25%" },
  { name: "North York", x: "70%", y: "15%" },
  { name: "Oakville", x: "29%", y: "48%" },
  { name: "Burlington", x: "20%", y: "57%" },
  { name: "Hamilton", x: "15%", y: "66%" },
  { name: "Caledonia", x: "24%", y: "78%" },
  { name: "Brantford", x: "10%", y: "79%" },
  { name: "Grimsby", x: "36%", y: "69%" },
];

export default function GtaServiceAreaMap() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_42px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-[linear-gradient(180deg,rgba(15,17,22,0.68),rgba(15,17,22,0.12))] px-4 py-3">
        <span className="rounded-full border border-white/20 bg-[rgba(16,18,23,0.62)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
          GTA Service Area
        </span>
        <span className="rounded-full border border-[rgba(95,130,120,0.35)] bg-[rgba(241,247,245,0.95)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[var(--reno-accent-dark)]">
          Solid Coverage Boundary
        </span>
      </div>

      <div className="relative h-[420px] md:h-[520px]">
        <iframe
          title="Google map showing EPF Reno GTA service area"
          src="https://www.google.com/maps?q=Hamilton,+Ontario,+Canada&z=9&output=embed"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute inset-0 z-10">
          <svg
            viewBox="0 0 1000 720"
            className="h-full w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="boundary-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <polygon
              points="176,122 318,88 526,78 722,98 846,164 892,266 878,384 786,500 594,560 368,598 204,582 98,510 76,386 104,270"
              fill="rgba(95,130,120,0.08)"
              stroke="rgba(255,255,255,0.96)"
              strokeWidth="16"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#boundary-glow)"
            />
            <polygon
              points="176,122 318,88 526,78 722,98 846,164 892,266 878,384 786,500 594,560 368,598 204,582 98,510 76,386 104,270"
              fill="rgba(95,130,120,0.08)"
              stroke="#40645b"
              strokeWidth="10"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {mapLabels.map((label) => (
            <div
              key={label.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: label.x, top: label.y }}
            >
              <div className="rounded-full border border-[rgba(95,130,120,0.35)] bg-[rgba(241,247,245,0.95)] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--reno-accent-dark)] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                {label.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
