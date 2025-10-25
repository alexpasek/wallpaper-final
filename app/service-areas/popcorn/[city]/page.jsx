import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { CONTACT } from "@/app/config";
import LocalSignals from "@/components/LocalSignals";
import { buildPopcornCopy } from "@/lib/seoCopy";

export const revalidate = 86400;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const p = await params; // ← await params
  const c = cities.find((x) => x.slug === p.city);
  if (!c) return {};
  return {
    title: `Popcorn Ceiling Removal in ${c.name} | Level 5 Skim, Prime & Paint`,
    description: `Popcorn removal in ${c.name}: dust-contained, Level 5 skim-coat, prime & paint. Fast quotes, clear scope, written warranty.`,
    alternates: { canonical: `/service-areas/popcorn/${c.slug}` },
  };
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default async function CityPopcornPage({ params }) {
  const p = await params; // ← await params
  const c = cities.find((x) => x.slug === p.city);
  if (!c) return notFound();

  const copy = buildPopcornCopy(c.slug);
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Popcorn Ceiling Removal in {c.name}
      </h1>

      <p className="mt-3 text-gray-700 max-w-3xl">{copy.opening}</p>
      <p className="mt-2 text-gray-700 max-w-3xl">{copy.housing}</p>
      <p className="mt-2 text-gray-700 max-w-3xl">{copy.trust}</p>

      <section className="grid md:grid-cols-3 gap-4 mt-8">
        {copy.usp.map((item, idx) => (
          <div key={idx} className="card p-5 bg-white">
            <div className="text-lg font-semibold">{item[0]}</div>
            <p className="text-gray-700">{item[1]}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((s, i) => (
          <img
            key={i}
            src={s}
            alt={`Popcorn Ceiling Removal project ${i + 1} in ${c.name}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Neighbourhoods We Serve</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {(c.neighborhoods || []).map((n) => (
            <Link
              key={n.slug}
              href={`/service-areas/popcorn/${c.slug}/${n.slug}`}
              className="pill"
            >
              {n.name}
            </Link>
          ))}
        </div>
      </section>

      <LocalSignals signals={c.signals} />

      <div className="mt-10 flex gap-3">
        <a className="btn-cta" href={phoneHref}>
          📞 (647) 923-6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get my quote
        </a>
      </div>
    </div>
  );
}
