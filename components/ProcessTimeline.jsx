"use client";

export default function ProcessTimeline({ process }) {
  if (!process || process.length === 0) return null;

  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div
        className="relative hidden gap-0 py-8 md:grid"
        style={{ gridTemplateColumns: `repeat(${process.length}, minmax(0, 1fr))` }}
      >
        {/* Connector Line - Enhanced with shadow and glow */}
        <div className="absolute top-[70px] left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-[var(--reno-accent)] via-[var(--reno-accent-soft)] to-[var(--reno-accent)] pointer-events-none z-0 shadow-[0_0_20px_rgba(95,130,120,0.45)]" />

        {process.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center relative z-10 group"
          >
            {/* Step Badge */}
            <div className="relative w-28 h-28 mb-8">
              {/* Outer glow ring - stronger */}
              <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-[var(--reno-accent)] to-[var(--reno-accent-dark)] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />

              {/* Background ring */}
              <div className="absolute inset-0 rounded-[10px] border-2 border-[var(--reno-accent)]/30 group-hover:border-[var(--reno-accent)]/60 transition-all duration-300" />

              {/* Main badge */}
              <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-[var(--reno-accent-soft)] to-[var(--reno-accent)] flex items-center justify-center border-2 border-[var(--reno-accent)] shadow-[0_0_30px_rgba(95,130,120,0.35)] group-hover:shadow-[0_0_50px_rgba(95,130,120,0.45)] group-hover:scale-110 transition-all duration-500">
                <span className="text-3xl font-black text-[#16191f]">
                  {idx + 1}
                </span>
              </div>
            </div>

            {/* Step Text */}
            <div className="text-center px-2">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--reno-accent)] mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Step {idx + 1}
              </p>
              <p className="text-[14px] leading-7 text-white/80 max-w-[130px] group-hover:text-white transition-colors duration-300 font-medium">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {process.map((step, idx) => (
          <div key={idx} className="flex gap-5 group">
            {/* Connector line (left side) */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-[10px] bg-gradient-to-br from-[var(--reno-accent-soft)] to-[var(--reno-accent)] flex items-center justify-center border-2 border-[var(--reno-accent)] shadow-[0_0_25px_rgba(95,130,120,0.35)] group-hover:shadow-[0_0_40px_rgba(95,130,120,0.45)] group-hover:scale-105 transition-all duration-500">
                <span className="text-2xl font-black text-[#16191f]">
                  {idx + 1}
                </span>
              </div>
              {idx < process.length - 1 && (
                <div className="w-1.5 h-12 bg-gradient-to-b from-[var(--reno-accent)] to-transparent mt-3 mb-3 shadow-[0_0_15px_rgba(95,130,120,0.35)]" />
              )}
            </div>

            {/* Step content */}
            <div className="pt-2 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--reno-accent)] mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Step {idx + 1}
              </p>
              <p className="text-[15px] leading-7 text-white/80 group-hover:text-white transition-colors duration-300 font-medium">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
