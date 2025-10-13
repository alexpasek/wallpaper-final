
  
  // =============================================================
  // app/service-areas/[city]/page.jsx — City page (JavaScript)
  // =============================================================
  import Link from "next/link";
  import { notFound } from "next/navigation";
  import { cities as allCities } from "@/data/cities";
  
  export const revalidate = 86400;
  
  export function generateStaticParams() {
    return allCities.map((c) => ({ city: c.slug }));
  }
  
  export function generateMetadata({ params }) {
    const c = allCities.find((x) => x.slug === params.city);
    if (!c) return {};
    return {
      title: `${c.name} Wallpaper Removal | Neighbourhoods & Free Estimates`,
      description: `Professional wallpaper removal in ${c.name}. View neighbourhoods we serve and request a free onsite quote.`,
    };
  }
  
  export default function CityPage({ params: { city } }) {
    const c = allCities.find((x) => x.slug === city);
    if (!c) return notFound();
  
    return (
      <div className="container-x mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{c.name}</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Wallpaper removal, adhesive wash, repairs and paint-ready finishing across {c.name}.
        </p>
  
        <h2 className="mt-8 text-2xl font-semibold">Neighbourhoods</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.neighborhoods?.length ? (
            c.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${c.slug}/${n.slug}`}
                className="text-sm rounded-full border px-3 py-1 hover:bg-gray-50"
              >
                {n.name}
              </Link>
            ))
          ) : (
            <span className="text-sm text-gray-500">Neighbourhood list coming soon.</span>
          )}
        </div>
  
        <nav className="mt-10 text-sm text-gray-600">
          <span className="mr-2">Popular pages:</span>
          <Link href="/services/wallpaper-removal" className="underline mr-3">Wallpaper Removal</Link>
          <Link href="/services/popcorn-ceiling-removal" className="underline mr-3">Popcorn Ceiling Removal</Link>
          <Link href="/services/interior-painting" className="underline">Interior Painting</Link>
        </nav>
      </div>
    );
  }
  
  