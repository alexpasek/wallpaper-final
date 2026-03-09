import Link from "next/link";

export const metadata = {
  title: "Other Services | EPF Pro Services",
  description:
    "Wallpaper removal, popcorn ceiling removal, drywall installation, and interior painting under our renovation service stack.",
  alternates: { canonical: "/other-services/" },
  robots: { index: true, follow: true },
};

const services = [
  {
    href: "/other-services/wallpaper-removal/",
    title: "Wallpaper Removal",
    text: "Clean stripping, adhesive removal, substrate prep, and paint-ready finishing.",
  },
  {
    href: "/other-services/popcorn-ceiling-removal/",
    title: "Popcorn Ceiling Removal",
    text: "Containment workflow, smoothing, and finish-ready ceilings.",
  },
  {
    href: "/other-services/drywall-installation/",
    title: "Drywall Installation",
    text: "Drywall hanging, repairs, taping, and smooth finishing.",
  },
  {
    href: "/other-services/interior-painting/",
    title: "Interior Painting",
    text: "Surface prep, premium coatings, and clean interior paint execution.",
  },
];

export default function Page() {
  return (
    <div className="container-x py-10">
      <header className="max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Other Services
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Supporting services that integrate with bathroom, basement, and home renovation projects.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <article key={s.href} className="card p-6 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-slate-700">{s.text}</p>
            <p className="mt-4">
              <Link href={s.href} className="btn-cta">
                View service
              </Link>
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
