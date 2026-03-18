import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import {
  buildBathroomGallery,
  hasPlaceholderHomeGallery,
} from "@/data/bathroomGallery";
import {
  TRUST_ITEMS,
  SERVICE_LIBRARY,
  FRAMEWORK_PILLARS,
  detectServiceFamily,
} from "@/data/remodelFramework";

import ProcessTimeline from "./ProcessTimeline";

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
  const lowered = title.toLowerCase();

  if (
    lowered.includes("bathroom, basement") ||
    lowered.includes("bathroom & home") ||
    lowered.includes("bathroom, basement & home")
  ) {
    return {
      line1: "Beautiful Bathroom",
      line2: "Renovations, Done Properly",
      lead: "We transform GTA bathrooms with clean execution, organized worksites, and clear communication from estimate to final walkthrough.",
    };
  }

  if (lowered.includes("bathroom")) {
    return {
      line1: "Bathroom Renovations",
      line2: "That Look Built-In",
      lead: "Sharper layouts, cleaner detailing, and a smoother build process from estimate to final walkthrough.",
    };
  }

  if (lowered.includes("basement")) {
    return {
      line1: "Basement Renovations",
      line2: "Designed To Feel Finished",
      lead: "Practical planning, protected worksites, and a polished lower level that looks like part of the home.",
    };
  }

  return {
    line1: "Home Renovations",
    line2: "With Stronger Execution",
    lead: "A darker, cleaner, more premium renovation experience with clear scope and disciplined finishing.",
  };
}

const promiseItems = [
  "Free estimate and fast callback",
  "Clean, contained renovation workflow",
  "Straightforward scope before work begins",
];

const expectationItems = [
  "Professional planning",
  "Protected worksite",
  "Clear communication",
  "Reliable finishing",
];

export default function RenoLandingPage({
  title,
  description,
  canonicalPath,
  kicker,
  highlights,
  process,
  processSection,
  localCopy,
  faqItems,
  gallery = [],
  keywordLinks = [],
  heroImagePosition = "center center",
  localSection,
  serviceAreaSection,
  postServiceAreaSection,
  finalSection,
}) {
  const isHomepage = canonicalPath === "/";
  const family = detectServiceFamily(title, canonicalPath);
  const serviceCards = SERVICE_LIBRARY[family] || SERVICE_LIBRARY.general;
  const effectiveGallery =
    family === "bathroom" &&
    (gallery.length === 0 || hasPlaceholderHomeGallery(gallery))
      ? buildBathroomGallery(title)
      : gallery;
  const hero = heroCopy(title);
  const heroImage =
    effectiveGallery[0]?.src || serviceCards[0]?.image || "/home/1.webp";
  const featureLeft = effectiveGallery[1] || effectiveGallery[0];
  const featureRight =
    effectiveGallery[2] || effectiveGallery[1] || effectiveGallery[0];
  const remainingGallery = effectiveGallery.slice(3);
  const servicesHeading = title.toLowerCase().includes("services")
    ? `Our ${title}`
    : `${title} Services`;

  return (
    <div className="pb-14 md:pb-20">
      <JsonLd
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        faqItems={faqItems}
      />

      <section className="pt-3 md:pt-4">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
          {isHomepage ? (
            <div className="relative h-[660px] overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,#0d1117_0%,#1b2230_100%)] shadow-[0_34px_86px_rgba(0,0,0,0.4)] md:h-[760px] lg:h-[820px]">
              <div className="absolute inset-0">
                <img
                  src={heroImage}
                  alt={`${title} featured bathroom`}
                  className="reno-image-pop h-full w-full object-cover contrast-[1.06] brightness-[1.16] saturate-[1.08] scale-[1.03]"
                  style={{ objectPosition: heroImagePosition }}
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(90deg,rgba(8,10,14,0.9)_0%,rgba(8,10,14,0.72)_34%,rgba(8,10,14,0.3)_64%,rgba(8,10,14,0.24)_100%),linear-gradient(180deg,rgba(8,10,14,0.16)_0%,rgba(8,10,14,0.34)_100%)]" />
              <div className="relative z-10 flex h-full items-end px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
                <div className="grid w-full gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                  <div className="max-w-[1040px] animate-fade-up">
                    <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[var(--reno-accent-soft)] md:text-[13px]">
                      {kicker} • GTA Renovation Team
                    </p>
                    <h1
                      className="mt-4 max-w-[10ch] text-[clamp(3rem,5vw,5.3rem)] font-semibold leading-[0.98] text-white [text-shadow:0_6px_24px_rgba(0,0,0,0.52)]"
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                      }}
                    >
                      <span className="block">{hero.line1}</span>
                      <span className="block">{hero.line2}</span>
                    </h1>
                    <p className="mt-5 max-w-[34ch] text-[clamp(1.05rem,1.3vw,1.45rem)] leading-[1.5] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.5)]">
                      {description || hero.lead}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href="/quote/"
                        className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(215,228,224,0.72)] bg-[linear-gradient(180deg,#7ea196_0%,#5f8278_52%,#40645b_100%)] px-6 py-3 text-[15px] font-bold text-[#f7fbfa] shadow-[0_14px_26px_rgba(64,100,91,0.3)] transition hover:brightness-105"
                      >
                        Get Your Free Estimate
                      </a>
                      <a
                        href={PHONE_HREF}
                        className="inline-flex items-center justify-center rounded-[12px] border border-white/18 bg-[rgba(15,17,22,0.52)] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-[rgba(15,17,22,0.66)]"
                      >
                        Call Alex: {PHONE_NUMBER}
                      </a>
                    </div>
                    <ul className="mt-6 grid gap-2.5 text-[15px] text-white/92 md:grid-cols-2 md:text-[17px]">
                      {promiseItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 text-[22px] leading-none text-[var(--reno-accent)]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <div className="w-full max-w-[360px] animate-fade-up rounded-[28px] border border-[rgba(95,130,120,0.45)] bg-[rgba(13,17,23,0.72)] p-5 shadow-[0_28px_60px_rgba(0,0,0,0.26)] backdrop-blur-md md:p-6">
                      <h2 className="text-[30px] font-black leading-[0.98] text-[var(--reno-accent-soft)] display-title md:text-[38px]">
                        What You Can Expect
                      </h2>
                      <div className="mt-4 h-px bg-[linear-gradient(90deg,rgba(95,130,120,0.42),rgba(255,255,255,0.16))]" />
                      <ul className="mt-5 space-y-3 text-[16px] text-white/92 md:text-[18px]">
                        {expectationItems.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 text-[22px] leading-none text-[var(--reno-accent)]">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,#0d1117_0%,#1b2230_100%)] shadow-[0_34px_86px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0">
                <img
                  src={heroImage}
                  alt={`${title} hero project`}
                  className="reno-image-pop h-full w-full object-cover contrast-[1.08] brightness-[1.17] saturate-[1.12] scale-[1.04]"
                  style={{ objectPosition: heroImagePosition }}
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.22),transparent_24%),linear-gradient(90deg,rgba(8,10,14,0.8)_0%,rgba(8,10,14,0.48)_40%,rgba(8,10,14,0.12)_72%,rgba(8,10,14,0.34)_100%),linear-gradient(180deg,rgba(8,10,14,0.05)_0%,rgba(8,10,14,0.38)_100%)]" />
              <div className="relative z-10 px-6 py-7 md:px-8 md:py-9 lg:px-10 lg:pt-8 lg:pb-8">
                <div className="grid gap-7 lg:grid-cols-[1.22fr_0.78fr] lg:items-end">
                  <div className="max-w-[920px] animate-fade-up">
                    <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[var(--reno-accent-soft)] md:text-[13px]">
                      {kicker} • GTA Renovation Team
                    </p>
                    <h1
                      className="mt-4 max-w-[11ch] text-[clamp(3rem,5.8vw,5.75rem)] font-semibold leading-[0.9] text-white"
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                      }}
                    >
                      <span className="block">{hero.line1}</span>
                      <span className="block">{hero.line2}</span>
                    </h1>
                    <p className="mt-4 max-w-[23ch] text-[clamp(1.08rem,1.72vw,1.74rem)] leading-[1.45] text-white/92">
                      {description || hero.lead}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href="/quote/"
                        className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(215,228,224,0.72)] bg-[linear-gradient(180deg,#7ea196_0%,#5f8278_52%,#40645b_100%)] px-6 py-3.5 text-[16px] font-bold text-[#f7fbfa] shadow-[0_14px_26px_rgba(64,100,91,0.3)] transition hover:brightness-105"
                      >
                        Get Your Free Estimate
                      </a>
                      <a
                        href={PHONE_HREF}
                        className="inline-flex items-center justify-center rounded-[12px] border border-white/18 bg-[rgba(15,17,22,0.52)] px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-[rgba(15,17,22,0.66)]"
                      >
                        Call Alex: {PHONE_NUMBER}
                      </a>
                    </div>
                    <ul className="mt-7 grid gap-2.5 text-[17px] text-white/92 md:grid-cols-2 md:text-[19px]">
                      {promiseItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 text-[24px] leading-none text-[var(--reno-accent)]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <div className="w-full max-w-[390px] animate-fade-up rounded-[28px] border border-[rgba(95,130,120,0.45)] bg-[rgba(18,22,29,0.5)] p-5 shadow-[0_28px_60px_rgba(0,0,0,0.26)] backdrop-blur-md md:p-6">
                      <h2 className="text-[31px] font-black leading-[0.98] text-[var(--reno-accent-soft)] display-title md:text-[40px]">
                        What You Can Expect
                      </h2>
                      <div className="mt-4 h-px bg-[linear-gradient(90deg,rgba(95,130,120,0.42),rgba(255,255,255,0.16))]" />
                      <ul className="mt-5 space-y-3.5 text-[17px] text-white/92 md:text-[19px]">
                        {expectationItems.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 text-[24px] leading-none text-[var(--reno-accent)]">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {TRUST_ITEMS.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-white/12 bg-[rgba(17,18,24,0.56)] px-5 py-5 shadow-[0_22px_48px_rgba(0,0,0,0.2)] backdrop-blur-sm"
                    >
                      <div className="text-[30px] leading-none text-[var(--reno-accent)]">
                        {item.icon}
                      </div>
                      <h2 className="mt-4 text-[28px] font-black leading-[0.98] text-white display-title md:text-[34px]">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-white/76">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container-x mt-10">
        <div className="grid gap-8 lg:grid-cols-[1.22fr_0.78fr]">
          <div className="space-y-6">
            <div className="card px-6 py-7 md:px-8 md:py-8">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                Signature Layout
              </p>
              <h2 className="mt-3 text-[38px] font-black uppercase leading-[0.94] text-[var(--reno-ink)] display-title md:text-[58px]">
                {servicesHeading}
              </h2>
              <p className="mt-4 max-w-[48rem] text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Built around practical layouts, sharp detailing, and renovation
                planning that keeps the work moving cleanly.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((card, index) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[30px] border border-white/8 bg-[#171b21] shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
                >
                  <figure className="relative">
                    <img
                      src={card.image}
                      alt={`${card.title} - ${title}`}
                      className="reno-image-pop h-[320px] w-full object-cover"
                      data-lightbox="true"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_24%,rgba(10,12,16,0.9)_100%)]" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-5 py-5">
                      <span className="inline-flex rounded-full border border-[rgba(95,130,120,0.42)] bg-[rgba(95,130,120,0.12)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-[30px] font-black uppercase leading-[0.95] text-white display-title md:text-[36px]">
                        {card.title}
                      </h3>
                    </figcaption>
                  </figure>
                  <div className="px-5 pb-6 pt-5">
                    <p className="text-[15px] leading-7 text-white/68">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="dark-card px-6 py-7 md:px-8 md:py-8">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                What Drives The Finish
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {FRAMEWORK_PILLARS.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-white/8 bg-white/3 px-5 py-5"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(95,130,120,0.14)] text-[18px] font-black text-[var(--reno-accent)]">
                      +
                    </div>
                    <h3 className="mt-4 text-[28px] font-black uppercase leading-[0.95] text-white display-title md:text-[34px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/66">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-[126px] lg:self-start">
            <div className="hero-form shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                Fast Contact
              </p>
              <h3 className="mt-3 text-[34px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[46px]">
                Request A Free Quote
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--reno-ink-soft)]">
                Share your scope and timeline. We will follow up with the right
                next step for the project.
              </p>
              <QuoteForm />
            </div>

            <div className="dark-card overflow-hidden">
              <div className="grid grid-cols-2 gap-[1px] bg-white/10">
                <figure className="relative">
                  <img
                    src={
                      featureLeft?.src ||
                      serviceCards[0]?.image ||
                      "/home/1.webp"
                    }
                    alt={featureLeft?.alt || `${title} featured image 1`}
                    className="reno-image-pop h-[280px] w-full object-cover"
                    data-lightbox="true"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-[rgba(12,14,18,0.78)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                    {featureLeft?.badge || "Featured 01"}
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img
                    src={
                      featureRight?.src ||
                      serviceCards[1]?.image ||
                      "/home/2.webp"
                    }
                    alt={featureRight?.alt || `${title} featured image 2`}
                    className="reno-image-pop h-[280px] w-full object-cover"
                    data-lightbox="true"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-[rgba(95,130,120,0.92)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#f7fbfa]">
                    {featureRight?.badge || "Featured 02"}
                  </figcaption>
                </figure>
              </div>
              <div className="px-5 py-5">
                <h3 className="text-[28px] font-black uppercase leading-[0.95] text-white display-title md:text-[34px]">
                  Project Highlights
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-white/66">
                  Featured project images show tile work, fixture detailing, and
                  how the finished space reads in real homes.
                </p>
              </div>
            </div>

            {keywordLinks.length > 0 && (
              <div className="dark-card px-5 py-5">
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[var(--reno-accent-soft)]">
                  Explore More
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {keywordLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="pill">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section id="proof" className="container-x mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card px-6 py-7 md:px-7">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-dark)]">
                Project Edge
              </p>
              <h2 className="mt-3 text-[32px] font-black uppercase leading-[0.94] text-[var(--reno-ink)] display-title md:text-[40px]">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[var(--reno-ink-soft)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {remainingGallery.length > 0 && (
        <section className="container-x mt-10">
          <div className="dark-card px-6 py-7 md:px-8 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                  Project Details
                </p>
                <h2 className="mt-2 text-[36px] font-black uppercase leading-[0.95] text-white display-title md:text-[50px]">
                  More Renovation Images
                </h2>
              </div>
              <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
                Extra project images give a clearer feel for finishes, layout
                decisions, and the level of detail in the work.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {remainingGallery.map((img) => (
                <img
                  key={img.src + img.alt}
                  src={img.src}
                  alt={img.alt}
                  className="reno-image-pop h-72 w-full rounded-[22px] border border-white/8 object-cover"
                  data-lightbox="true"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-x mt-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div id="process">
            {processSection || (
              <div className="card px-6 py-7 md:px-8 md:py-8">
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                  Renovation Flow
                </p>
                <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[50px]">
                  Our Process
                </h2>
                <ol className="mt-6 space-y-4">
                  {process.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#191d23] text-[13px] font-black text-[var(--reno-accent-soft)]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <p className="text-[16px] leading-7 text-[var(--reno-ink-soft)]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div id="local" className="dark-card px-6 py-7 md:px-8 md:py-8">
            {localSection || (
              <>
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                  Local Notes
                </p>
                <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-white display-title md:text-[50px]">
                  GTA Context Matters
                </h2>
                <p className="mt-5 text-[16px] leading-8 text-white/68">
                  {localCopy}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="faq" className="container-x mt-10">
        <div className="card px-6 py-7 md:px-8 md:py-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Questions
          </p>
          <h2 className="mt-3 text-[38px] font-black uppercase leading-[0.94] text-[var(--reno-ink)] display-title md:text-[54px]">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="rounded-[22px] border border-black/8 bg-white/78 px-5 py-5"
              >
                <summary className="cursor-pointer list-none pr-7 text-[18px] font-black uppercase tracking-[0.02em] text-[var(--reno-ink)] md:text-[21px]">
                  {item.q}
                </summary>
                <p className="mt-3 text-[15px] leading-7 text-[var(--reno-ink-soft)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {serviceAreaSection && (
        <section className="container-x mt-10">{serviceAreaSection}</section>
      )}

      {postServiceAreaSection && (
        <section className="container-x mt-10">{postServiceAreaSection}</section>
      )}

      <section className="container-x mt-10">
        <div className="dark-card flex flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Ready When You Are
            </p>
            <h3 className="mt-3 text-[36px] font-black uppercase leading-[0.94] text-white display-title md:text-[52px]">
              Ready To Start Your Renovation?
            </h3>
            <p className="mt-3 max-w-[36rem] text-[15px] leading-7 text-white/66">
              Reach out for a quote, get clarity on scope, and move forward with
              a renovation team focused on clean execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              Call {PHONE_NUMBER}
            </a>
            <a href="/quote/" className="btn-cta-outline">
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {finalSection && <section className="container-x mt-10">{finalSection}</section>}
    </div>
  );
}
