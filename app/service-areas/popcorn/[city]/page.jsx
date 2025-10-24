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

export function generateMetadata({ params }) {
  const c = cities.find((x) => x.slug === params.city);
  return c
    ? {
        title: `Popcorn Ceiling Removal in ${c.name} | Level 5 Skim, Prime & Paint`,
        description: `Popcorn removal in ${c.name}: dust-contained, Level 5 skim-coat, prime & paint. Fast quotes, clear scope, written warranty.`,
        alternates: {
          canonical: `/service-areas/popcorn/${c.slug}`,
        },
        openGraph: {
          title: `Popcorn Ceiling Removal in ${c.name}`,
          description: `Dust-controlled removal or encapsulation in ${c.name}. Level 5 skim, prime & paint.`,
          url: `/service-areas/popcorn/${c.slug}`,
          type: "article",
        },
      }
    : {};
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function CityPopcornPage({ params: { city } }) {
  const c = cities.find((x) => x.slug === city);
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

      {/* Gallery (reuses service images) */}
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

      {/* Neighbourhoods */}
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

      {/* Process (service-specific depth) */}
      <section className="prose max-w-none mt-10">
        <h2>Our 5-Step Process</h2>
        <ol>
          <li>
            Protect floors/furniture, mask vents, full plastic containment.
          </li>
          <li>
            Assess: scrape vs safe encapsulation for painted/multi-layer
            texture.
          </li>
          <li>
            Repairs + <strong>Level 5 skim-coat</strong>; vacuum-assist sanding.
          </li>
          <li>
            Raking/critical light inspection; re-skim touch-ups if needed.
          </li>
          <li>
            Prime (stain-blocker) and leave a paint-ready ceiling—or we paint.
          </li>
        </ol>
      </section>

      {/* Local signals (reuse your component/data) */}
      <LocalSignals signals={c.signals} />

      {/* CTAs */}
      <div className="mt-10 flex gap-3">
        <a className="btn-cta" href={phoneHref}>
          📞 (647) 923-6784
        </a>
        <a className="btn-cta" href="/quote/">
          Get my quote
        </a>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Popcorn Ceiling Removal",
              areaServed: c.name,
              serviceType: "Popcorn ceiling removal and finishing",
              url: `/service-areas/popcorn/${c.slug}`,
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
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
