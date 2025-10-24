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

export async function generateMetadata({ params }) {
  const { city, neighborhood } = await params;
  const c = cities.find((x) => x.slug === city);
  const n = c?.neighborhoods.find((x) => x.slug === neighborhood);
  return c && n
    ? {
        title: `Popcorn Ceiling Removal — ${n.name}, ${c.name} | Level 5 Skim, Prime, Paint`,
        description: `Popcorn removal in ${n.name}, ${c.name}: dust-contained, Level 5 skim-coat, prime & paint. Tidy, condo-friendly workflow.`,
        alternates: {
          canonical: `/service-areas/popcorn/${c.slug}/${n.slug}`,
        },
        openGraph: {
          title: `Popcorn Ceiling Removal — ${n.name}, ${c.name}`,
          description: `Dust-controlled removal or encapsulation in ${n.name}. Level 5 skim, prime & paint.`,
          url: `/service-areas/popcorn/${c.slug}/${n.slug}`,
          type: "article",
        },
      }
    : {};
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default async function NeighborhoodPopcornPage({ params }) {
  const { city, neighborhood } = await params; // keeping your pattern
  const c = cities.find((x) => x.slug === city);
  const n = c?.neighborhoods.find((x) => x.slug === neighborhood);
  if (!c || !n) return notFound();

  const nearby = (c.neighborhoods || [])
    .filter((x) => x.slug !== n.slug)
    .slice(0, 6);

  return (
    <div className="container-x mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Popcorn Ceiling Removal — {n.name}, {c.name}
      </h1>

      <p className="mt-3 text-gray-700 max-w-3xl">
        Dust-contained removal or safe encapsulation with{" "}
        <strong>Level 5 skim-coat</strong>, prime and paint. We protect floors
        and vents, isolate rooms, and keep {n.name} projects tidy from start to
        finish.
      </p>

      <section className="grid md:grid-cols-3 gap-4 mt-8">
        {[
          [
            "Level 5 smooth",
            "Ceilings checked under raking light so waves and seams don’t show.",
          ],
          [
            "Condo-friendly workflow",
            "Elevator bookings, corridor protection, quiet tools where required.",
          ],
          [
            "Pot lights & repairs",
            "Cutouts blended, stains fixed, patches feathered so they disappear.",
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
          <li>Containment, floor covering, vent masking.</li>
          <li>
            Scrape vs. encapsulation chosen after on-site assessment
            (painted/multi-layer texture handled safely).
          </li>
          <li>
            Repairs + Level 5 skim; vacuum-assist sanding; critical-light
            inspection.
          </li>
          <li>
            Prime with stain-blocker; paint options available (Benjamin Moore /
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
                href={`/service-areas/popcorn/${c.slug}/${x.slug}`}
                className="pill"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav className="mt-10 text-sm text-gray-600">
        <Link href={`/service-areas/popcorn/${c.slug}`} className="underline">
          ← Back to {c.name}
        </Link>
      </nav>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Popcorn Ceiling Removal",
              areaServed: `${n.name}, ${c.name}`,
              serviceType: "Popcorn ceiling removal and finishing",
              url: `/service-areas/popcorn/${c.slug}/${n.slug}`,
              potentialAction: {
                "@type": "RequestQuoteAction",
                target: "/quote/",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Service Areas",
                  item: "/service-areas",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Popcorn Ceiling Removal",
                  item: "/service-areas/popcorn",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: c.name,
                  item: `/service-areas/popcorn/${c.slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: n.name,
                  item: `/service-areas/popcorn/${c.slug}/${n.slug}`,
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
