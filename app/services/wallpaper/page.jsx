import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import { ServiceCopy } from "@/components/LocalSEOCopy";

// Keep metadata simple to avoid missing-constant errors
export const metadata = {
  title: "Wallpaper Removal — Wallpaper Removal Pro",
  description:
    "Professional wallpaper removal across the GTA. Clean, dust-controlled prep, adhesive wash, repairs, skim coat, primer and paint-ready finish.",
};

const PAGE_URL = "https://wallpaper-final.pages.dev/services/wallpaper/"; // update when you add a custom domain

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/wallpaper/${i + 1}.webp`
  );

  return (
    <div className="container-x py-10">
      {/* Hero */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Wallpaper Removal in the GTA
      </h1>
      <p className="mt-3 text-gray-700">
        Clean removal, adhesive wash, repairs, skim-coat, primer and paint—finished smooth.
        <br />Most projects completed in 1–2 days. <strong>3-year warranty.</strong>
      </p>
      <div className="mt-6 flex gap-3 flex-wrap">
        <a className="btn-cta" href={CONTACT.phoneHref}>📞 (647) 923-6784</a>
        <a className="btn-cta" href="/quote/">Get my quote</a>
      </div>

      {/* Proof images */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Wallpaper removal project"
            className="w-full h-56 object-cover rounded-2xl border shadow"
            loading="lazy"
          />
        ))}
      </div>

      {/* Benefits (SEO + conversions) */}
      <section className="grid md:grid-cols-3 gap-4 mt-10">
        {[
          ["Dust-controlled", "Zip-walls, HEPA, tidy work every day."],
          ["Paint-ready finish", "Adhesive removal, skim, sand, spot-prime."],
          ["Guaranteed", "3-year workmanship warranty."],
        ].map(([h, t]) => (
          <div key={h} className="card p-5 bg-white">
            <div className="text-lg font-semibold">{h}</div>
            <p className="text-gray-700">{t}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="prose max-w-none mt-10">
        <h2>Our Process</h2>
        <ol>
          <li>Score/test, then soften with steamer or remover.</li>
          <li>Lift facing, remove backing and adhesive, clean substrate.</li>
          <li>Repair, skim coat, sand, and spot-prime for smooth walls.</li>
          <li>Final clean and paint-ready handoff (or we paint it for you).</li>
        </ol>
      </section>

      {/* Areas we serve: internal links with keyword anchors */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Areas We Serve</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {cities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="pill">
              Wallpaper removal in {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Wallpaper Removal FAQs</h2>
        <details className="card p-4 bg-white mt-3">
          <summary className="font-medium">How long does removal take?</summary>
          <p>Most rooms are done within a day; whole-home projects take 1–2 days.</p>
        </details>
        <details className="card p-4 bg-white mt-3">
          <summary className="font-medium">Will the walls be paint-ready?</summary>
          <p>Yes. We remove adhesive, repair, skim, sand, and spot-prime.</p>
        </details>
        <details className="card p-4 bg-white mt-3">
          <summary className="font-medium">Do you repair damage behind wallpaper?</summary>
          <p>We fix torn paper, nail pops, dents, and small drywall issues before finishing.</p>
        </details>
      </section>

      {/* Existing local SEO copy block you already use */}
      <ServiceCopy service="Wallpaper Removal" />

      {/* Strong closer */}
      <section className="card p-6 bg-white mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Ready for dust-controlled removal?</h3>
          <p className="text-gray-600">Get a firm quote and schedule today.</p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={CONTACT.phoneHref}>📞 (647) 923-6784</a>
          <a className="btn-cta" href="/quote/">Get my quote</a>
        </div>
      </section>

      {/* JSON-LD (no external imports needed) */}
      <script
        type="application/ld+json"
        // Keep this in sync with on-page content
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wallpaper Removal Pro",
              "url": PAGE_URL.replace("/services/wallpaper/", "/"),
              "telephone": "(647) 923-6784",
              "areaServed": "Greater Toronto Area, Canada"
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wallpaper removal",
              "serviceType": "Wallpaper removal",
              "category": "Home Improvement",
              "provider": { "@type": "LocalBusiness", "name": "Wallpaper Removal Pro" },
              "areaServed": "Greater Toronto Area, Canada",
              "url": PAGE_URL
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": PAGE_URL.replace("/services/wallpaper/", "/") },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": PAGE_URL.replace("/wallpaper/", "") },
                { "@type": "ListItem", "position": 3, "name": "Wallpaper Removal", "item": PAGE_URL }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does removal take?", "acceptedAnswer": { "@type": "Answer", "text": "Most rooms are done within a day; whole-home projects take 1–2 days." } },
                { "@type": "Question", "name": "Will the walls be paint-ready?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We remove adhesive, repair, skim, sand, and spot-prime." } },
                { "@type": "Question", "name": "Do you repair damage behind wallpaper?", "acceptedAnswer": { "@type": "Answer", "text": "We fix torn paper, nail pops, dents, and small drywall issues before finishing." } }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
