// app/service-areas/[city]/[neighborhood]/page.jsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import { CONTACT } from "@/app/config";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export async function generateStaticParams() {
  return cities.flatMap((c) =>
    (c.neighborhoods || []).map((n) => ({ city: c.slug, neighborhood: n.slug }))
  );
}

// Next requires awaiting params in dynamic routes
export async function generateMetadata({ params }) {
  const { city, neighborhood } = await params;
  const c = cities.find((x) => x.slug === city);
  const n = c?.neighborhoods.find((x) => x.slug === neighborhood);
  return c && n
    ? {
        title: `${n.name}, ${c.name} Wallpaper Removal | Adhesive Wash, Skim-Coat, Paint`,
        description: `Wallpaper removal in ${n.name}, ${c.name}: clean glue removal, drywall repairs, skim-coat, primer and paint-ready finish.`,
        alternates: { canonical: `/service-areas/${c.slug}/${n.slug}` },
      }
    : {};
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default async function NeighborhoodPage({ params }) {
  const { city, neighborhood } = await params; // 👈 await params
  const c = cities.find((x) => x.slug === city);
  const n = c?.neighborhoods.find((x) => x.slug === neighborhood);
  if (!c || !n) return notFound();

  const nearby = (c.neighborhoods || [])
    .filter((x) => x.slug !== n.slug)
    .slice(0, 6);

  return (
    <div className="container-x mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Wallpaper Removal — {n.name}, {c.name}
      </h1>

      <p className="mt-3 text-gray-700 max-w-3xl">
        Tidy, dust-controlled stripping with full adhesive wash, drywall repairs
        & skim-coat where needed, then primer and a smooth, paint-ready finish.
        We protect floors and furniture and tidy up daily.
      </p>

      <section className="grid md:grid-cols-3 gap-4 mt-8">
        {[
          ["Adhesive fully removed", "Prevents flashing and paint failures."],
          ["Seam & gouge repairs", "Feathered patches that disappear."],
          [
            "Condo-friendly workflow",
            "Book elevators, protect hallways, follow rules.",
          ],
        ].map(([h, t]) => (
          <div key={h} className="card p-5 bg-white">
            <div className="text-lg font-semibold">{h}</div>
            <p className="text-gray-700">{t}</p>
          </div>
        ))}
      </section>

      <section className="prose max-w-none mt-10">
        <h2>What to Expect</h2>
        <ul>
          <li>Method testing first (steam vs enzyme) for safe removal.</li>
          <li>
            Glue washed until water stops foaming — critical for primer
            adhesion.
          </li>
          <li>
            Level 4/5 skim-coat where needed, sanded and checked under raking
            light.
          </li>
          <li>
            Primer & paint options available (Benjamin Moore /
            Sherwin-Williams).
          </li>
        </ul>
      </section>

      {/* Local signals inherit from city */}
      <LocalSignals signals={c.signals} />

      <div className="mt-8 flex gap-3">
        <a className="btn-cta" href={phoneHref}>
          📞 (647) 923-6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get my quote
        </a>
      </div>

      {nearby.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nearby Areas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((x) => (
              <Link
                key={x.slug}
                href={`/service-areas/${c.slug}/${x.slug}`}
                className="pill"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav className="mt-10 text-sm text-gray-600">
        <Link href={`/service-areas/${c.slug}`} className="underline">
          ← Back to {c.name}
        </Link>
      </nav>
    </div>
  );
}
