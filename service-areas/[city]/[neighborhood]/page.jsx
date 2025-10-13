
  
  
  // =========================================================================
  // app/service-areas/[city]/[neighborhood]/page.jsx — Neighbourhood page (JS)
  // =========================================================================
  import { notFound } from "next/navigation";
  import Link from "next/link";
  import { cities as data } from "@/data/cities";
  
  export const revalidate = 86400;
  
  export function generateStaticParams() {
    return data.flatMap((c) => c.neighborhoods.map((n) => ({ city: c.slug, neighborhood: n.slug })));
  }
  
  export function generateMetadata({ params }) {
    const city = data.find((c) => c.slug === params.city);
    const hood = city?.neighborhoods.find((n) => n.slug === params.neighborhood);
    if (!city || !hood) return {};
    return {
      title: `${hood.name}, ${city.name} Wallpaper Removal | Adhesive Wash, Skim‑Coat, Paint`,
      description: `Wallpaper removal in ${hood.name}, ${city.name}: clean glue removal, repairs, skim‑coat and paint‑ready finish. Free onsite estimates.`,
    };
  }
  
  export default function NeighborhoodPage({ params: { city, neighborhood } }) {
    const c = data.find((x) => x.slug === city);
    const n = c?.neighborhoods.find((x) => x.slug === neighborhood);
    if (!c || !n) return notFound();
  
    return (
      <div className="container-x mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Wallpaper Removal — {n.name}, {c.name}
        </h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Professional wallpaper stripping with full adhesive wash, repairs, skim‑coat as needed, primer and paint — finished smooth and ready to enjoy.
        </p>
  
        <div className="mt-6 flex gap-3">
          <Link href="/services/wallpaper-removal" className="rounded-2xl bg-black text-white px-5 py-3 font-semibold hover:opacity-90">See Process</Link>
          <Link href="/#quote" className="rounded-2xl border px-5 py-3 font-semibold hover:shadow">Get a Free Estimate</Link>
        </div>
  
        <nav className="mt-10 text-sm text-gray-600">
          <Link href={`/service-areas/${c.slug}`} className="underline">← Back to {c.name}</Link>
        </nav>
      </div>
    );
  }
  
