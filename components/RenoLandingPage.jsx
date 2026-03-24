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
  detectServiceFamily,
} from "@/data/remodelFramework";

import ProcessTimeline from "./ProcessTimeline";
import TrustBar from "./TrustBar";

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

function buildWhyChooseItems(family, title, gallery, serviceCards) {
  const serviceLabel = title.toLowerCase().includes("renovation")
    ? title
    : `${title} Renovation`;
  const backgroundA = gallery[0]?.src || serviceCards[0]?.image || "/home/1.webp";
  const backgroundB = gallery[1]?.src || serviceCards[1]?.image || backgroundA;

  if (family === "bathroom") {
    return [
      {
        title: "Precision Planning",
        text: `Every ${serviceLabel.toLowerCase()} starts with measured layouts, fixture coordination, and scope clarity before demolition begins.`,
        image: backgroundA,
        icon: "01",
      },
      {
        title: "Protected Build Process",
        text: "Waterproofing details, staged installation, and daily site control keep the project cleaner and more predictable.",
        image: backgroundB,
        icon: "02",
      },
      {
        title: "Experienced Delivery",
        text: "From material sequencing to final walkthrough, the work is organized to finish sharply and hand over cleanly.",
        icon: "03",
      },
    ];
  }

  if (family === "basement") {
    return [
      {
        title: "Layout First",
        text: "Basement plans are built around access, utility zones, and everyday usability before finishing work starts.",
        image: backgroundA,
        icon: "01",
      },
      {
        title: "Controlled Execution",
        text: "Moisture-aware planning, protected pathways, and staged finishing keep lower-level projects disciplined.",
        image: backgroundB,
        icon: "02",
      },
      {
        title: "Reliable Turnover",
        text: "The result is a finished basement that feels integrated with the home, not treated like an afterthought.",
        icon: "03",
      },
    ];
  }

  if (family === "home") {
    return [
      {
        title: "One Coordinated Plan",
        text: "Multi-room renovations move better when scope, sequencing, and dependencies are aligned from the start.",
        image: backgroundA,
        icon: "01",
      },
      {
        title: "Clear Project Rhythm",
        text: "Work zones, material timing, and trade coordination are managed to reduce confusion during the build.",
        image: backgroundB,
        icon: "02",
      },
      {
        title: "Consistent Finishing",
        text: "Drywall, paint, trim, and closeout details are handled with the same standard across the full renovation.",
        icon: "03",
      },
    ];
  }

  return [
    {
      title: "Clear Scope",
      text: "We define real deliverables, realistic sequencing, and practical next steps before work begins.",
      image: backgroundA,
      icon: "01",
    },
    {
      title: "Clean Work Standards",
      text: "Protected surfaces, organized staging, and steady communication keep the renovation process easier to manage.",
      image: backgroundB,
      icon: "02",
    },
    {
      title: "Stronger Finish Quality",
      text: "Final detailing, walkthrough checks, and sharper handover standards are built into the process.",
      icon: "03",
    },
  ];
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

const homepageHeroCards = [
  {
    href: "/bathroom-renovation/",
    title: "Bathroom Renovations",
    text: "Refresh the bathroom with cleaner layouts, sharper finishes, and practical planning.",
    image:
      "/bathrooms%20al/bathroom%20renovation%20mississuaga00001.png",
  },
  {
    href: "/basement-renovation/",
    title: "Basement Renovations",
    text: "Turn the lower level into finished living space with a clean renovation flow.",
    image:
      "/bathrooms%20al/bathroom%20renovation%20mississuaga00004.png",
  },
  {
    href: "/home-renovation/",
    title: "Home Renovations",
    text: "Upgrade key rooms with one coordinated plan, schedule, and build team.",
    image:
      "/bathrooms%20al/bathroom%20renovation%20mississuaga00006.png",
  },
  {
    href: "/other-services/",
    title: "Interior Finishing",
    text: "Drywall, painting, popcorn removal, and finishing support across the GTA.",
    image:
      "/bathrooms%20al/bathroom%20renovation%20mississuaga00003.png",
  },
];

const homepageBathroomAlGallery = [
  {
    src: "/bathrooms%20al/powderroom.png",
    alt: "Powder room renovation before and after with a bright vanity wall and refined finish details",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00001.png",
    alt: "Bathroom renovation in Mississauga with clean tile lines and a bright luxury finish",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00002.png",
    alt: "Custom bathroom renovation with a polished vanity wall and upgraded fixtures",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00003.png",
    alt: "Finished bathroom space with modern detailing and coordinated renovation materials",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00004.png",
    alt: "Renovated bathroom with brighter finishes and a cleaner layout flow",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00005.png",
    alt: "Bathroom remodel image highlighting upgraded shower, tile, and vanity details",
  },
  {
    src: "/bathrooms%20al/bathroom%20renovation%20mississuaga00006.png",
    alt: "Luxury bathroom renovation image with bright surfaces and refined finishing work",
  },
];

export default function RenoLandingPage({
  title,
  description,
  canonicalPath,
  kicker,
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
  seoFeatureSection,
  reviewFeatureSection,
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
  const remainingGallery = (
    isHomepage
      ? [...homepageBathroomAlGallery, ...effectiveGallery.slice(3)]
      : effectiveGallery.slice(3)
  ).filter(
    (img, index, list) =>
      index === list.findIndex((item) => item.src === img.src),
  );
  const whyChooseItems = buildWhyChooseItems(
    family,
    title,
    effectiveGallery,
    serviceCards,
  );
  const displayWhyChooseItems =
    isHomepage
      ? whyChooseItems.map((item, index) => ({
          ...item,
          image:
            index === 0
              ? "/bathrooms%20al/bathroom%20renovation%20mississuaga00002.png"
              : index === 1
                ? "/bathrooms%20al/bathroom%20renovation%20mississuaga00005.png"
                : item.image,
        }))
      : whyChooseItems;
  const quoteSection = (
    <section className="container-x mt-10 md:mt-12">
      <div className="border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfcfb_0%,#f5f3ef_100%)] px-6 py-10 shadow-[0_24px_48px_rgba(0,0,0,0.14)] md:px-10 md:py-12">
        <div className="text-center">
          <h2 className="text-[42px] font-black leading-[0.96] text-[#1c1d22] display-title md:text-[60px]">
            Get Your Free Estimate Now!
          </h2>
          <div className="mt-4">
            <div className="reno-divider mx-auto" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <figure className="overflow-hidden bg-white shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
            <img
              src={featureLeft?.src || serviceCards[0]?.image || "/home/1.webp"}
              alt={featureLeft?.alt || `${title} featured project image`}
              className="reno-image-pop h-full min-h-[320px] w-full object-cover md:min-h-[420px]"
              data-lightbox="true"
            />
          </figure>

          <div className="border border-[#efefef] bg-white p-4 shadow-[0_16px_32px_rgba(0,0,0,0.08)] md:p-5">
            <QuoteForm variant="simple" />
          </div>
        </div>

        {keywordLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {keywordLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-[#e2ddd4] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#55504a] transition hover:text-[#c71b17]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
  const whyChooseSection = (
    <section className="container-x mt-10 md:mt-12">
      <div className="overflow-hidden rounded-[24px] border border-white/8 bg-[#1f2024] px-6 py-8 shadow-[0_26px_56px_rgba(0,0,0,0.28)] md:px-8 md:py-10">
        <div className="text-center">
          <h2 className="mx-auto max-w-[18ch] text-[clamp(2rem,3.1vw,3.35rem)] font-extrabold leading-[1.02] text-white">
            Why Homeowners Choose EPF Reno For {title}
          </h2>
          <div className="mt-5">
            <div className="reno-divider mx-auto" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {displayWhyChooseItems.map((item, index) => (
            <article
              key={item.title}
              className={[
                "relative overflow-hidden rounded-[22px] border border-white/8 min-h-[320px]",
                item.image
                  ? "bg-[#2a2c31]"
                  : "bg-[linear-gradient(180deg,#5b5b61_0%,#515159_100%)]",
              ].join(" ")}
            >
              {item.image && (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.48)_0%,rgba(14,14,16,0.76)_55%,rgba(14,14,16,0.88)_100%)]" />
                </>
              )}

              <div className="relative z-10 flex h-full flex-col items-center px-7 py-8 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#cf241c]/40 bg-[#cf241c]/12 text-[24px] font-black tracking-[0.08em] text-[#cf241c]">
                  {item.icon}
                </div>
                <h3 className="mt-7 max-w-[14ch] text-[22px] font-extrabold uppercase leading-[1.08] text-white md:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-[18ch] text-[15px] leading-[1.7] text-white/86 md:text-[16px]">
                  {item.text}
                </p>
                {index === 2 && <div className="mt-6 h-px w-16 bg-white/22" />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

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
            <div className="relative h-[760px] overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,#0d1117_0%,#1b2230_100%)] shadow-[0_34px_86px_rgba(0,0,0,0.4)] md:h-[860px] lg:h-[940px]">
              <div className="absolute inset-0">
                <img
                  src={heroImage}
                  alt={`${title} featured bathroom`}
                  className="reno-image-pop h-full w-full object-cover contrast-[1.06] brightness-[1.16] saturate-[1.08] scale-[1.03]"
                  style={{ objectPosition: heroImagePosition }}
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(90deg,rgba(8,10,14,0.9)_0%,rgba(8,10,14,0.72)_34%,rgba(8,10,14,0.3)_64%,rgba(8,10,14,0.24)_100%),linear-gradient(180deg,rgba(8,10,14,0.16)_0%,rgba(8,10,14,0.34)_100%)]" />
              <div className="relative z-10 flex h-full items-start px-6 pb-44 pt-14 md:px-8 md:pb-52 md:pt-20 lg:px-12 lg:pb-60 lg:pt-20">
                <div className="grid w-full gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
                  <div className="max-w-[1040px] animate-fade-up">
                    <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[var(--reno-accent-soft)] md:text-[13px]">
                      {kicker} • GTA Renovation Team
                    </p>
                    <h1
                      className="mt-4 max-w-[10ch] text-[clamp(3rem,5vw,5.3rem)] font-semibold leading-[0.98] text-white [text-shadow:0_6px_24px_rgba(0,0,0,0.52)]"
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
                        className="btn-cta-new"
                      >
                        Get Your Free Estimate
                      </a>
                      <a
                        href={PHONE_HREF}
                        className="btn-cta-new"
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
                        className="btn-cta-new"
                      >
                        Get Your Free Estimate
                      </a>
                      <a
                        href={PHONE_HREF}
                        className="btn-cta-new"
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

      {isHomepage ? (
        <section className="container-x relative z-20 -mt-[56px] md:-mt-[72px] lg:-mt-[88px]">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {homepageHeroCards.map((item) => (
                <article
                  key={item.href}
                  className="overflow-hidden border-[10px] border-white bg-[#faf6f0] shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                >
                  <Link href={item.href} className="block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[220px] w-full object-cover md:h-[250px]"
                    />
                  </Link>
                  <div className="px-6 py-7 text-center">
                    <h2 className="text-[20px] font-black leading-[1.15] text-[#111111] md:text-[22px]">
                      {item.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[18rem] text-[15px] leading-8 text-[#3f3a36]">
                      {item.text}
                    </p>
                    <p className="mt-5">
                      <Link
                        href={item.href}
                        className="btn-cta-new text-[13px]"
                      >
                        View Details
                      </Link>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              <Link
                href="/services/"
                className="btn-cta-new"
              >
                View All Services
              </Link>
              <Link
                href="/quote/"
                className="btn-cta-new min-w-[280px] rounded-full px-10 py-5 text-[15px]"
              >
                Get Estimate Now
                <span className="ml-3 text-[24px] leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="container-x relative z-20 -mt-8 md:-mt-10">
          <TrustBar />
        </section>
      )}

      {isHomepage && quoteSection}
      {isHomepage && seoFeatureSection}
      {isHomepage && whyChooseSection}
      {isHomepage && reviewFeatureSection}

      <section className={isHomepage ? "container-x mt-14 md:mt-16" : "container-x mt-10"}>
        <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((card, index) => (
                <article
                  key={card.title}
                  className="service-card overflow-hidden border border-white/12 bg-[linear-gradient(135deg,#171b21_0%,#0f1318_100%)] shadow-[0_24px_52px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[rgba(95,130,120,0.5)] hover:shadow-[0_24px_52px_rgba(0,0,0,0.4),0_0_30px_rgba(95,130,120,0.15)]"
                >
                  <figure className="relative">
                    <img
                      src={card.image}
                      alt={`${card.title} - ${title}`}
                      className="reno-image-pop h-[320px] w-full object-cover"
                      data-lightbox="true"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_24%,rgba(10,12,16,0.92)_100%)]" />
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
                    <p className="text-[15px] leading-7 text-white/72">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {!isHomepage && whyChooseSection}
        </div>
      </section>

      {!isHomepage && quoteSection}
      {!isHomepage && seoFeatureSection}

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

      {!seoFeatureSection && (
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
      )}

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
        <section className="container-x mt-10">
          {postServiceAreaSection}
        </section>
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

      {finalSection && (
        <section className="container-x mt-10">{finalSection}</section>
      )}
    </div>
  );
}
