import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import {
  TRUST_ITEMS,
  SERVICE_LIBRARY,
  FRAMEWORK_PILLARS,
  detectServiceFamily,
} from "@/data/remodelFramework";

function JsonLd({ title, description, canonicalPath, faqItems }) {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      areaServed: "Greater Toronto Area",
      url: canonicalPath,
      potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function heroCopy(title) {
  var t = title.toLowerCase();
  if (t.indexOf("bathroom") > -1) {
    return {
      line1: "Transform Your Bathroom",
      line2: "with Stunning Renovations",
      lead: "Get the bathroom of your dreams with expert renovation service from concept to completion.",
    };
  }
  if (t.indexOf("basement") > -1) {
    return {
      line1: "Transform Your Basement",
      line2: "into Beautiful Living Space",
      lead: "From planning to final finishes, we build clean and practical basement upgrades with clear scope.",
    };
  }
  return {
    line1: "Transform Your Home",
    line2: "with Stunning Renovations",
    lead: "Practical planning and elegant finishes delivered with clean execution and predictable timelines.",
  };
}

export default function RenoLandingPage({
  title,
  description,
  canonicalPath,
  kicker,
  highlights,
  process,
  localCopy,
  faqItems,
  gallery = [],
  keywordLinks = [],
}) {
  const family = detectServiceFamily(title, canonicalPath);
  const serviceCards = SERVICE_LIBRARY[family] || SERVICE_LIBRARY.general;
  const hero = heroCopy(title);
  const servicesHeading = title.toLowerCase().includes("services")
    ? `Our ${title}`
    : `Our ${title} Services`;
  const heroImage = gallery[0]?.src || serviceCards[0]?.image || "/home/1.webp";
  const beforeImage = gallery[0]?.src || serviceCards[0]?.image || "/home/1.webp";
  const afterImage = gallery[1]?.src || serviceCards[1]?.image || "/home/2.webp";
  const remainingGallery = gallery.slice(2);

  return (
    <div className="pb-12 md:pb-16">
      <JsonLd
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        faqItems={faqItems}
      />

      <section className="pt-4">
        <div className="container-x">
          <div
            className="reno-hero-photo rounded-[0px] md:rounded-[2px] overflow-hidden border border-[#b8cdca]"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="reno-hero-overlay" />
            <div className="relative z-10 max-w-[660px] px-6 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
              <p className="text-white/80 font-bold uppercase tracking-[0.12em] text-[12px] md:text-[13px]">
                {kicker}
              </p>
              <h1 className="reno-hero-title mt-3">
                <span className="block">{hero.line1}</span>
                <span className="block">{hero.line2}</span>
              </h1>
              <p className="mt-4 max-w-[560px] text-white/95 text-[20px] md:text-[22px] leading-[1.35]">
                {description || hero.lead}
              </p>
              <div className="mt-7">
                <a href="/quote/" className="btn-cta">
                  GET A FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-x">
          <div className="card rounded-none md:rounded-[2px] border-x border-b border-t-0 bg-white px-6 py-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              {TRUST_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    "flex items-start gap-3",
                    index < TRUST_ITEMS.length - 1 ? "md:border-r md:border-[#d8e3e0] md:pr-4" : "",
                  ].join(" ")}
                >
                  <div className="mt-1 text-[22px] leading-none text-[var(--reno-ink-soft)]">{item.icon}</div>
                    <div>
                    <h2 className="text-[20px] md:text-[22px] font-extrabold uppercase tracking-tight text-[var(--reno-ink)] leading-[1.08]">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-[15px] md:text-[16px] leading-[1.35] text-[#4f6c65]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-7">
          <div>
            <h2 className="text-[40px] md:text-[47px] font-black uppercase tracking-tight text-[var(--reno-ink)] leading-[1.05]">
              {servicesHeading}
            </h2>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {serviceCards.map((card) => (
                <article key={card.title} className="card overflow-hidden rounded-2xl border-[#cad9d6] bg-white">
                  <figure className="relative">
                    <img
                      src={card.image}
                      alt={`${card.title} - ${title}`}
                      className="w-full h-[246px] object-cover"
                      data-lightbox="true"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-[#2f665f]/88 px-4 py-2 text-white text-[21px] md:text-[23px] font-extrabold tracking-tight leading-none">
                      {card.title}
                    </figcaption>
                  </figure>
                  <div className="px-4 pt-3 pb-4">
                    <p className="text-[16px] md:text-[17px] leading-[1.35] text-[#4e6963]">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <section className="card mt-6 overflow-hidden rounded-[26px] border-[#cad9d6] bg-[#f7f9f8]">
              <div className="px-7 py-6 md:px-8 md:py-7">
                <h3 className="text-[33px] md:text-[40px] font-black uppercase tracking-tight leading-[1.04] text-[var(--reno-ink)] text-center">
                  Our Renovation Services
                </h3>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {FRAMEWORK_PILLARS.map((item) => (
                    <article key={item.title} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8ec5bb] text-white text-sm">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-[24px] md:text-[27px] leading-[1.05] font-extrabold text-[var(--reno-ink)]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[16px] md:text-[17px] leading-[1.35] text-[#4d6962]">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="card rounded-[28px] border-[#c5dbd5] bg-[#e9f4f0] overflow-hidden">
              <div className="px-6 pt-7 pb-6 md:px-7">
                <h3 className="text-[33px] md:text-[40px] leading-[1.04] font-black uppercase tracking-tight text-[var(--reno-ink)]">
                  Request A Free Quote
                </h3>
                <p className="mt-3 text-[16px] md:text-[17px] leading-[1.35] text-[#4c6962]">
                  Get a fast, free estimate for your project.
                </p>
                <QuoteForm />
                <ul className="mt-4 space-y-2 text-[17px] md:text-[18px] font-extrabold leading-none text-[#2f5f55]">
                  <li>✓ No Obligation</li>
                  <li>✓ Free & Fast</li>
                  <li>✓ Top Rated Service</li>
                </ul>
              </div>
            </div>

            <div className="card rounded-[20px] overflow-hidden border-[#c6d7d4]">
              <div className="grid grid-cols-2 gap-[2px] bg-[#c3d4d1]">
                <figure className="relative">
                  <img src={beforeImage} alt={`Before ${title}`} className="w-full h-[238px] object-cover" data-lightbox="true" />
                  <figcaption className="absolute left-3 bottom-2 text-white font-black text-[16px] md:text-[18px] tracking-tight">
                    BEFORE
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img src={afterImage} alt={`After ${title}`} className="w-full h-[238px] object-cover" data-lightbox="true" />
                  <figcaption className="absolute left-3 bottom-2 text-white font-black text-[16px] md:text-[18px] tracking-tight">
                    AFTER
                  </figcaption>
                </figure>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {keywordLinks.length > 0 && (
        <section className="container-x mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keywordLinks.map((k) => (
              <Link key={k.href} href={k.href} className="pill text-center">
                {k.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section id="proof" className="container-x mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <article key={h.title} className="card p-6 bg-white">
              <h2 className="text-[27px] md:text-[31px] leading-[1.05] font-extrabold text-[var(--reno-ink)] tracking-tight uppercase">
                {h.title}
              </h2>
              <p className="mt-2 text-[16px] md:text-[17px] leading-[1.45] text-[#4c6a62]">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {remainingGallery.length > 0 && (
        <section className="container-x mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {remainingGallery.map((img) => (
            <img
              key={img.src + img.alt}
              src={img.src}
              alt={img.alt}
              className="w-full h-56 object-cover rounded-xl border border-[#c9d7d2] shadow"
              data-lightbox="true"
            />
          ))}
        </section>
      )}

      <section id="process" className="container-x mt-10 card p-6 bg-white">
        <h2 className="text-[36px] md:text-[42px] leading-[1.05] font-extrabold text-[var(--reno-ink)] uppercase tracking-tight">
          Our Renovation Process
        </h2>
        <ol className="mt-4 list-decimal pl-6 space-y-2 text-[16px] md:text-[17px] text-[#4a6a62] leading-[1.45]">
          {process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section id="local" className="container-x mt-10 card p-6 bg-white">
        <h2 className="text-[36px] md:text-[42px] leading-[1.05] font-extrabold text-[var(--reno-ink)] uppercase tracking-tight">
          Local Project Notes
        </h2>
        <p className="mt-3 text-[16px] md:text-[17px] leading-[1.5] text-[#4a6a62]">{localCopy}</p>
      </section>

      <section id="faq" className="container-x mt-10">
        <h2 className="text-[36px] md:text-[42px] leading-[1.05] font-extrabold text-[var(--reno-ink)] uppercase tracking-tight">
          FAQ
        </h2>
        {faqItems.map((f) => (
          <details key={f.q} className="card p-6 bg-white mt-4">
            <summary className="font-semibold text-[#234f46] text-[19px] md:text-[20px]">{f.q}</summary>
            <p className="mt-2 text-[#4a6a62] text-[16px] md:text-[17px] leading-[1.5]">{f.a}</p>
          </details>
        ))}
      </section>

      <section className="container-x mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-[31px] md:text-[35px] font-extrabold text-[var(--reno-ink)] uppercase tracking-tight leading-[1.08]">
            Ready to Start?
          </h3>
          <p className="text-[#4a6a62] text-[16px] md:text-[17px] leading-[1.45]">
            Clear scope, clean work, and predictable delivery.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={PHONE_HREF} className="btn-cta">
            Call {PHONE_NUMBER}
          </a>
          <a href="/quote/" className="btn-cta">
            Get Quote
          </a>
        </div>
      </section>
    </div>
  );
}
