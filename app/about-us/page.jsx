import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const metadata = {
  title: "About Us | EPF Pro Services",
  description:
    "EPF Pro Services delivers bathroom renovation, basement renovation, and home renovation projects across GTA locations.",
  alternates: { canonical: "/about-us/" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="container-x py-10">
      <header className="max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          About EPF Pro Services
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We are a renovation-focused team serving GTA homeowners with clear scope, clean site management, and practical renovation sequencing.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Planning Discipline</h2>
          <p className="mt-2 text-slate-700">
            We define deliverables and milestones before work starts so budget and schedule stay controlled.
          </p>
        </article>
        <article className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Clean Job Sites</h2>
          <p className="mt-2 text-slate-700">
            Protection, containment, and daily cleanup are standard for occupied homes.
          </p>
        </article>
        <article className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Reliable Handover</h2>
          <p className="mt-2 text-slate-700">
            We close projects with walkthroughs, deficiency resolution, and clear completion notes.
          </p>
        </article>
      </section>

      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Service Focus</h2>
        <p className="mt-3 text-slate-700">
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
