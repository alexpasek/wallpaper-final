import Link from "next/link";

import { BRAND_NAME, CONTACT, PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteForm from "@/components/QuoteForm";
import TrustBar from "@/components/TrustBar";
import {
  HUB_SERVICE_LINKS,
  MISSISSAUGA_BATHROOM_HUB,
  MISSISSAUGA_BATHROOM_PATHS,
} from "@/data/mississaugaBathroomCluster";

const SITE_URL = "https://epfproservices.com";

function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

function Breadcrumbs({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/62"
    >
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          {index > 0 && <span className="text-white/28">/</span>}
          <Link href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

function CtaBlock({ title, text, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fbfaf8_0%,#f3efe8_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[44rem]">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Mississauga Bathroom Quotes
          </p>
          <h3 className="mt-2 text-[clamp(1.8rem,3vw,2.75rem)] font-black uppercase leading-[0.94] text-[#17181c] display-title">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[#4f4a43]">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryHref} className="btn-cta-new">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="btn-cta-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function JsonLd({ type, page, faqItems = [], breadcrumbs = [] }) {
  const graph = [];
  const breadcrumbItems = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  }));

  if (breadcrumbItems.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }

  if (type === "hub") {
    graph.push({
      "@type": "HomeAndConstructionBusiness",
      name: BRAND_NAME,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: CONTACT.address,
      areaServed: [{ "@type": "City", name: "Mississauga" }],
      url: absoluteUrl(page.path),
      image: absoluteUrl(page.heroImage),
    });

    graph.push({
      "@type": "Service",
      name: "Bathroom Renovation Mississauga",
      serviceType: "Bathroom Renovation",
      areaServed: { "@type": "City", name: "Mississauga" },
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: BRAND_NAME,
        telephone: CONTACT.phone,
      },
      description: page.description,
      url: absoluteUrl(page.path),
    });
  }

  if (type === "support") {
    graph.push({
      "@type": "Service",
      name: page.title,
      serviceType: page.title,
      areaServed: { "@type": "City", name: "Mississauga" },
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: BRAND_NAME,
        telephone: CONTACT.phone,
      },
      description: page.description,
      url: absoluteUrl(page.path),
    });
  }

  if (type === "project") {
    graph.push({
      "@type": "Article",
      headline: page.title,
      description: page.description,
      mainEntityOfPage: absoluteUrl(page.path),
      about: {
        "@type": "Service",
        name: "Bathroom renovation Mississauga",
      },
      image: page.gallery.map((item) => absoluteUrl(item.src)),
    });
  }

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

function Hero({ eyebrow, title, intro, image, imageAlt, points, breadcrumbs }) {
  return (
    <section className="pt-3 md:pt-4">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#0d1117_0%,#1b2230_100%)] shadow-[0_34px_86px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0">
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover contrast-[1.05] brightness-[1.08] saturate-[1.08]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.9)_0%,rgba(8,10,14,0.74)_34%,rgba(8,10,14,0.38)_70%,rgba(8,10,14,0.46)_100%)]" />
          <div className="relative z-10 px-6 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
            <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-[980px]">
                <Breadcrumbs items={breadcrumbs} />
                <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[var(--reno-accent-soft)]">
                  {eyebrow}
                </p>
                <h1 className="mt-4 max-w-[12ch] text-[clamp(2.9rem,5.8vw,5.8rem)] font-semibold leading-[0.92] text-white">
                  {title}
                </h1>
                <p className="mt-4 max-w-[34rem] text-[clamp(1.02rem,1.72vw,1.42rem)] leading-[1.6] text-white/90">
                  {intro}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/quote/" className="btn-cta-new">
                    Get A Free Estimate
                  </Link>
                  <a href={PHONE_HREF} className="btn-cta-outline">
                    Call Alex: {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[rgba(10,12,16,0.62)] p-5 backdrop-blur-sm md:p-6">
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                  What this page answers
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/88">
                  {points.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-[18px] leading-none text-[var(--reno-accent)]">
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
    </section>
  );
}

function Gallery({ title, items }) {
  return (
    <section className="container-x mt-10 md:mt-12" data-lightbox-scope>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Photo Proof
          </p>
          <h2 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] font-black uppercase leading-[0.94] text-white display-title">
            {title}
          </h2>
        </div>
        <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
          Finished project photos with alt text mapped to Mississauga bathroom remodel intent.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item, index) => (
          <figure
            key={item.src}
            className={`group overflow-hidden rounded-[24px] border border-white/10 bg-[#12151b] shadow-[0_18px_34px_rgba(0,0,0,0.24)] ${index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              data-lightbox="true"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function HubPage({ page }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/locations/", label: "Locations" },
    { href: page.path, label: "Bathroom Renovation Mississauga" },
  ];

  return (
    <div className="pb-14 md:pb-20">
      <JsonLd type="hub" page={page} faqItems={page.faqItems} breadcrumbs={breadcrumbs} />

      <Hero
        eyebrow={page.heroEyebrow}
        title={page.heroTitle}
        intro={page.heroIntro}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        points={page.heroPoints}
        breadcrumbs={breadcrumbs}
      />

      <div className="container-x relative z-10 -mt-6 md:-mt-8">
        <TrustBar />
      </div>

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Scope Of Work
          </p>
          <h2 className="mt-2 text-[clamp(2rem,3.5vw,3.5rem)] font-black uppercase leading-[0.94] text-white display-title">
            What A Full Mississauga Bathroom Remodel Usually Includes
          </h2>
          <p className="mt-4 max-w-[42rem] text-[16px] leading-8 text-white/72">
            The page is built to be commercially complete without turning into generic template spam. The work below is the scope homeowners usually need clarity on before they can compare quotes properly.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.scopeItems.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] leading-7 text-white/84"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <article className="overflow-hidden rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fdfcf9_0%,#f2eee7_100%)] shadow-[0_24px_56px_rgba(0,0,0,0.16)]">
          <img
            src={page.featuredProject.image}
            alt={page.featuredProject.alt}
            className="h-[240px] w-full object-cover"
          />
          <div className="p-6">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Featured Project
            </p>
            <h2 className="mt-2 text-[32px] font-black uppercase leading-[0.94] text-[#16181d] display-title">
              {page.featuredProject.title}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#4f4a43]">
              {page.featuredProject.text}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link href={page.featuredProject.href} className="btn-cta-new">
                {page.featuredProject.primaryAnchor}
              </Link>
              <Link href={page.featuredProject.href} className="text-[14px] font-semibold text-[#1f5d51] transition hover:text-[#c71b17]">
                {page.featuredProject.secondaryAnchor}
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <CtaBlock
          title="Need pricing before you commit to a design direction?"
          text="Use the Mississauga cost page to compare powder rooms, condo baths, family bathrooms, and master ensuites before you lock in your allowance level."
          primaryHref={MISSISSAUGA_BATHROOM_PATHS.cost}
          primaryLabel="View Cost Guide"
          secondaryHref="/quote/"
          secondaryLabel="Request A Quote"
        />
      </section>

      <section className="container-x mt-10 md:mt-12">
        <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[#1b1d22] px-6 py-8 shadow-[0_26px_56px_rgba(0,0,0,0.28)] md:px-8 md:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                Build Process
              </p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3.8rem)] font-black uppercase leading-[0.94] text-white display-title">
                Mississauga Bathroom Renovation Process
              </h2>
            </div>
            <p className="max-w-[34rem] text-[15px] leading-7 text-white/68">
              The process section is intentionally practical: layout decisions, allowance choices, waterproofing, sequencing, and final handoff.
            </p>
          </div>
          <div className="mt-8">
            <ProcessTimeline process={page.process} />
          </div>
        </div>
      </section>

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Cost Factors
          </p>
          <h2 className="mt-2 text-[clamp(2rem,3.5vw,3.4rem)] font-black uppercase leading-[0.94] text-white display-title">
            What Changes Bathroom Renovation Cost In Mississauga
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.costFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-[20px] font-black uppercase leading-[1.02] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-white/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfbf8_0%,#f4efe7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Included / Not Included
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-[20px] font-black uppercase text-[#17181c]">Usually Included</h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#4f4a43]">
                  {page.includedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] font-black uppercase text-[#17181c]">Usually Separate</h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#4f4a43]">
                  {page.excludedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Material Allowances
            </p>
            <p className="mt-3 text-[15px] leading-8 text-white/72">{page.allowanceNote}</p>
          </div>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <CtaBlock
          title="Want the Mississauga pricing logic in writing?"
          text="The cost guide is built to support quote conversations. It explains range by bathroom type, what changes the budget, and how to think about material allowances."
          primaryHref={MISSISSAUGA_BATHROOM_PATHS.cost}
          primaryLabel="See Bathroom Renovation Cost Mississauga"
          secondaryHref={page.featuredProject.href}
          secondaryLabel="See Mrs. Olga Project"
        />
      </section>

      <Gallery title="Mississauga Bathroom Remodel Gallery" items={page.gallery} />

      <section className="container-x mt-10 md:mt-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Support Cluster
            </p>
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] font-black uppercase leading-[0.94] text-white display-title">
              Mississauga Bathroom Support Pages
            </h2>
          </div>
          <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
            These pages are narrow on purpose. Each one supports a real sub-intent and passes authority back into the main Mississauga bathroom hub.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.serviceLinks.map((item) => (
            <article
              key={item.href}
              className="rounded-[22px] border border-white/10 bg-[#16191f] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.24)]"
            >
              <h3 className="text-[22px] font-black uppercase leading-[0.98] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-white/70">{item.text}</p>
              <Link href={item.href} className="mt-5 inline-flex text-[14px] font-semibold text-[var(--reno-accent-soft)] transition hover:text-white">
                View Page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                FAQ
              </p>
              <h2 className="mt-2 text-[clamp(2rem,3.9vw,3.4rem)] font-black uppercase leading-[0.94] text-white display-title">
                Bathroom Renovation Mississauga FAQ
              </h2>
            </div>
            <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
              Focused on homeowner decisions instead of generic filler.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            {page.faqItems.map((item) => (
              <article
                key={item.q}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-5"
              >
                <h3 className="text-[20px] font-black leading-[1.18] text-white">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/72">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <CtaBlock
          title="Ready to price your Mississauga bathroom renovation?"
          text="Use the quote form for a direct estimate conversation, or review the cost guide and case study first if you want to compare scope and allowance decisions before reaching out."
          primaryHref="/quote/"
          primaryLabel="Request A Quote"
          secondaryHref={MISSISSAUGA_BATHROOM_PATHS.cost}
          secondaryLabel="Review Cost Guide"
        />
      </section>

      <section className="container-x mt-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fdfcf9_0%,#f2eee7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Supporting Blogs
            </p>
            <div className="mt-4 grid gap-4">
              {page.blogLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[18px] border border-[rgba(17,19,23,0.08)] bg-white px-4 py-4 text-[15px] leading-7 text-[#3f3b35] transition hover:border-[var(--reno-accent-dark)] hover:text-[#1c1d22]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-4 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-5">
            <QuoteForm variant="simple" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SupportPage({ page }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/locations/", label: "Locations" },
    { href: MISSISSAUGA_BATHROOM_PATHS.hub, label: "Bathroom Renovation Mississauga" },
    { href: page.path, label: page.title },
  ];

  return (
    <div className="pb-14 md:pb-20">
      <JsonLd type="support" page={page} faqItems={page.faqItems} breadcrumbs={breadcrumbs} />

      <Hero
        eyebrow={page.heroEyebrow}
        title={page.heroTitle}
        intro={page.heroIntro}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        points={page.bullets}
        breadcrumbs={breadcrumbs}
      />

      <div className="container-x relative z-10 -mt-6 md:-mt-8">
        <TrustBar />
      </div>

      <section className="container-x mt-10 md:mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {page.cards.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-white/10 bg-[#16191f] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.24)]"
            >
              <h2 className="text-[22px] font-black uppercase leading-[0.98] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <CtaBlock
          title="Need the full local context, not just this subtopic?"
          text="The main hub ties this support page back to the full Mississauga bathroom renovation offer, service scope, pricing logic, FAQ, and proof assets."
          primaryHref={page.primaryLink.href}
          primaryLabel={page.primaryLink.label}
          secondaryHref="/quote/"
          secondaryLabel="Request A Quote"
        />
      </section>

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Key Considerations
          </p>
          <div className="mt-5 grid gap-4">
            {page.sections.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <h2 className="text-[22px] font-black uppercase leading-[1.02] text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-white/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fdfcf9_0%,#f2eee7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Internal Linking
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <Link href={page.primaryLink.href} className="text-[18px] font-black text-[#17181c] transition hover:text-[#c71b17]">
                  {page.primaryLink.label}
                </Link>
                <p className="mt-2 text-[15px] leading-7 text-[#4f4a43]">
                  {page.primaryLink.description}
                </p>
              </div>

              <div>
                <Link href={page.secondaryLink.href} className="text-[18px] font-black text-[#17181c] transition hover:text-[#c71b17]">
                  {page.secondaryLink.label}
                </Link>
                <p className="mt-2 text-[15px] leading-7 text-[#4f4a43]">
                  {page.secondaryLink.description}
                </p>
              </div>

              {page.proofLink && (
                <div>
                  <Link href={page.proofLink.href} className="text-[18px] font-black text-[#17181c] transition hover:text-[#c71b17]">
                    {page.proofLink.label}
                  </Link>
                  <p className="mt-2 text-[15px] leading-7 text-[#4f4a43]">
                    {page.proofLink.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-4 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-5">
            <QuoteForm variant="simple" />
          </div>
        </aside>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                FAQ
              </p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3.4rem)] font-black uppercase leading-[0.94] text-white display-title">
                {page.title} FAQ
              </h2>
            </div>
            <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
              Direct answers tied to the exact sub-intent of this page.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            {page.faqItems.map((item) => (
              <article
                key={item.q}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-5"
              >
                <h3 className="text-[20px] font-black leading-[1.18] text-white">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/72">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <CtaBlock
          title="Ready to move from research to pricing?"
          text="Use the quote form if you already know the scope, or return to the main Mississauga hub if you still need the broader service and process context."
          primaryHref="/quote/"
          primaryLabel="Request A Quote"
          secondaryHref={page.primaryLink.href}
          secondaryLabel={page.primaryLink.label}
        />
      </section>
    </div>
  );
}

function ProjectPage({ page }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/before-after/", label: "Project Gallery" },
    { href: page.path, label: "Mrs. Olga Bathroom Renovation" },
  ];

  return (
    <div className="pb-14 md:pb-20">
      <JsonLd type="project" page={page} breadcrumbs={breadcrumbs} />

      <Hero
        eyebrow={page.heroEyebrow}
        title={page.heroTitle}
        intro={page.heroIntro}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        points={[
          "Project proof asset designed to strengthen the main Mississauga bathroom hub.",
          "Scope, timeline, materials, and allowance notes instead of generic blog filler.",
          "Direct internal links to bathroom renovation Mississauga and bathroom renovation cost Mississauga.",
        ]}
        breadcrumbs={breadcrumbs}
      />

      <div className="container-x relative z-10 -mt-6 md:-mt-8">
        <TrustBar />
      </div>

      <section className="container-x mt-10 md:mt-12">
        <div className="grid gap-4 md:grid-cols-4">
          {page.overview.map((item) => (
            <article
              key={item.label}
              className="rounded-[22px] border border-white/10 bg-[#16191f] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.24)]"
            >
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                {item.label}
              </p>
              <p className="mt-3 text-[22px] font-black uppercase leading-[1.02] text-white">
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Homeowner Goals
          </p>
          <div className="mt-5 grid gap-4">
            {page.goals.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] leading-7 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfbf8_0%,#f4efe7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Scope Of Work
          </p>
          <div className="mt-5 grid gap-3">
            {page.scope.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-[rgba(17,19,23,0.08)] bg-white px-4 py-4 text-[15px] leading-7 text-[#4f4a43]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[#1b1d22] px-6 py-8 shadow-[0_26px_56px_rgba(0,0,0,0.28)] md:px-8 md:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                Timeline
              </p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] font-black uppercase leading-[0.94] text-white display-title">
                Renovation Timeline
              </h2>
            </div>
            <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
              This case study is structured as a project proof asset, so the timeline stays practical and build-focused.
            </p>
          </div>
          <div className="mt-8">
            <ProcessTimeline process={page.timeline} />
          </div>
        </div>
      </section>

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Material Selections
          </p>
          <div className="mt-5 grid gap-4">
            {page.materials.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] leading-7 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfbf8_0%,#f4efe7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Before And After
          </p>
          <div className="mt-5 grid gap-4">
            {page.beforeAfter.map((item) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-[rgba(17,19,23,0.08)] bg-white px-4 py-4"
              >
                <h2 className="text-[20px] font-black uppercase text-[#17181c]">{item.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#4f4a43]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Gallery title="Mrs. Olga Bathroom Photo Set" items={page.gallery} />

      <section className="container-x mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[26px] border border-white/10 bg-[#171a20] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.22)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Why This Layout Worked
          </p>
          <div className="mt-5 grid gap-4">
            {page.whyItWorked.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] leading-7 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfbf8_0%,#f4efe7_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Cost Range / Allowance Note
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[#4f4a43]">{page.allowanceNote}</p>
          <div className="mt-6 space-y-3">
            {page.mainLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-[18px] border border-[rgba(17,19,23,0.08)] bg-white px-4 py-4 text-[15px] leading-7 text-[#17181c] transition hover:border-[var(--reno-accent-dark)] hover:text-[#c71b17]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function MississaugaBathroomHubPage() {
  return <HubPage page={MISSISSAUGA_BATHROOM_HUB} />;
}

export function MississaugaBathroomSupportPage({ page }) {
  return <SupportPage page={page} />;
}

export function MississaugaBathroomProjectPage({ page }) {
  return <ProjectPage page={page} />;
}

export function getSupportLinkCards() {
  return HUB_SERVICE_LINKS;
}
