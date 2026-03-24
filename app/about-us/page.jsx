import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "About Us | EPF Reno",
  description:
    "EPF Reno delivers bathroom renovation, basement renovation, and home renovation projects across GTA locations.",
  alternates: { canonical: "/about-us/" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="container-x py-8 md:py-10">
      <header className="dark-card px-6 py-8 md:px-8 md:py-10">
        <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
          About Us
        </p>
        <h1 className="mt-3 max-w-[12ch] text-[42px] font-black uppercase leading-[0.92] text-white display-title md:text-[64px]">
          About EPF Reno
        </h1>
        <p className="mt-5 max-w-[52rem] text-[17px] leading-8 text-white/78">
          We are a renovation-focused team serving GTA homeowners with clear scope,
          clean site management, and practical renovation sequencing.
        </p>
      </header>

      <div className="relative z-10 -mt-4 md:-mt-5">
        <TrustBar />
      </div>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="card p-6">
          <h2 className="text-xl font-semibold text-[var(--reno-ink)]">Planning Discipline</h2>
          <p className="mt-2 text-[var(--reno-ink-soft)]">
            We define deliverables and milestones before work starts so budget and schedule stay controlled.
          </p>
        </article>
        <article className="card p-6">
          <h2 className="text-xl font-semibold text-[var(--reno-ink)]">Clean Job Sites</h2>
          <p className="mt-2 text-[var(--reno-ink-soft)]">
            Protection, containment, and daily cleanup are standard for occupied homes.
          </p>
        </article>
        <article className="card p-6">
          <h2 className="text-xl font-semibold text-[var(--reno-ink)]">Reliable Handover</h2>
          <p className="mt-2 text-[var(--reno-ink-soft)]">
            We close projects with walkthroughs, deficiency resolution, and clear completion notes.
          </p>
        </article>
      </section>

      <section className="mt-8 card p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[var(--reno-ink)]">Service Focus</h2>
        <p className="mt-3 text-[var(--reno-ink-soft)]">
          Core services include bathroom renovation, basement renovation, and full home renovation. Supporting services include wallpaper removal, popcorn ceiling removal, drywall installation, and interior painting.
        </p>
        <p className="mt-4">
          <a href={PHONE_HREF} className="btn-cta">
            Call {PHONE_NUMBER}
          </a>
        </p>
      </section>
    </div>
  );
}
