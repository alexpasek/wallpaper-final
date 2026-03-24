import RenoLandingPage from "@/components/RenoLandingPage";
import { PHONE_HREF, PHONE_NUMBER, SERVICE_AREAS } from "@/app/config";
import GtaServiceAreaMap from "@/components/GtaServiceAreaMap";
import { buildBathroomGallery } from "@/data/bathroomGallery";
import ReviewSummaryCard from "@/components/ReviewSummaryCard";

function GoogleStars({ count = 5, size = "h-6 w-6" }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className={`${size} fill-[#f4b400]`}
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export const metadata = {
  title: "Bathroom, Basement & Home Renovation | EPF Reno",
  description:
    "Bathroom renovation contractor serving Mississauga and the GTA with basement renovation, home renovation, and finishing services.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    title: "Renovation Planning",
    text: "Detailed scope, sequence, and milestone scheduling before construction begins.",
  },
  {
    title: "Clean Execution",
    text: "Containment, floor protection, and daily cleanup on occupied home projects.",
  },
  {
    title: "Reliable Handover",
    text: "Final walkthrough, punch-list resolution, and clear closeout notes.",
  },
];

const process = [
  "Discovery call and onsite measurements.",
  "Scope definition with timeline and quote.",
  "Material planning and pre-construction setup.",
  "Build execution with daily updates.",
  "Final walkthrough and project handover.",
];

const faqItems = [
  {
    q: "What renovation services do you specialize in?",
    a: "Our core services are bathroom renovation, basement renovation, and full home renovation projects across GTA cities.",
  },
  {
    q: "Can you keep the project clean while we live at home?",
    a: "Yes. We use floor protection, contained work zones, and daily cleanup routines on every project.",
  },
  {
    q: "How do estimates work?",
    a: "We start with photos and project details, then confirm scope onsite before finalizing timeline and pricing.",
  },
  {
    q: "Do you also provide finishing services?",
    a: "Yes. Wallpaper removal, popcorn ceiling removal, drywall installation, and interior painting are available under Other Services.",
  },
];

const baseGallery = buildBathroomGallery(
  "Bathroom, Basement & Home Renovation",
);
const gallery = [
  {
    src: "/bathrooms%20al/powderroom.png",
    alt: "Bathroom, Basement & Home Renovation - powder room renovation before and after with a bright finished vanity wall",
    badge: "Powder Room Feature",
  },
  ...baseGallery.filter((item) => !item.src.includes("IMG_4876.JPG")),
].filter(Boolean);

const keywordLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/locations/", label: "Keyword Location Pages" },
  { href: "/other-services/", label: "Other Services" },
];

const googleReviewCards = [
  {
    name: "Melissa Carver",
    date: "2026-01-26",
    initials: "MC",
    color: "bg-[#bb8c72]",
    text: "We hired EPF Reno for a bathroom renovation in Mississauga and the whole process felt organized from the first visit. The crew protected the floors, kept the work area clean, and the tile and vanity finish looked exactly the way we hoped.",
  },
  {
    name: "Jordan Bell",
    date: "2026-01-20",
    initials: "JB",
    color: "bg-[#567d34]",
    text: "Our Oakville ensuite renovation needed better layout planning, not just nicer finishes. EPF Reno explained the scope clearly, kept us updated through each stage, and delivered a bathroom that feels much more functional every day.",
  },
  {
    name: "Priya Sandhu",
    date: "2026-01-19",
    initials: "PS",
    color: "bg-[#7755a8]",
    text: "We were comparing Burlington bathroom contractors and chose EPF Reno because the quote, schedule, and finishing standards were all clearly laid out. The communication stayed strong and the final shower renovation came out polished and clean.",
  },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Bathroom, Basement & Home Renovation"
      description="We deliver bathroom renovation projects across Mississauga and the GTA with clear planning, clean worksites, and dependable communication from start to finish."
      canonicalPath="/"
      kicker="EPF Reno"
      highlights={highlights}
      process={process}
      localCopy="We provide bathroom renovation services across Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, and North York, with local service pages built around real GTA neighbourhoods and project coverage."
      seoFeatureSection={
        <section className="container-x mt-10 md:mt-12">
          <div className="overflow-hidden border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfcfb_0%,#f8f7f4_100%)] shadow-[0_24px_48px_rgba(0,0,0,0.14)]">
            <div className="grid lg:grid-cols-[1fr_0.96fr]">
              <figure className="bg-[#ece9e3]">
                <img
                  src="/bathrooms%20al/bathroom-renovation-mississauga.png"
                  alt="Bathroom renovation in Mississauga with marble-look tile walls, tub surround, and warm brass fixtures"
                  className="h-full min-h-[360px] w-full object-cover md:min-h-[500px] lg:min-h-[700px]"
                  data-lightbox="true"
                />
              </figure>

              <div className="px-5 py-6 md:px-8 md:py-9 lg:px-10 lg:py-10">
                <p className="max-w-[14ch] text-[clamp(1.45rem,2.2vw,2.35rem)] font-semibold leading-[1.1] text-[#828282]">
                  Local Bathroom Renovation Contractors &amp; Renovation Planning
                  by EPF Reno
                </p>

                <h2 className="mt-5 max-w-[11ch] text-[clamp(2.3rem,3.8vw,3.8rem)] font-extrabold leading-[1] text-[#15181d]">
                  Bathroom Renovation Services In Mississauga And The GTA
                </h2>

                <div className="mt-4">
                  <div className="reno-divider reno-divider-sm" aria-hidden="true" />
                </div>

                <p className="mt-8 text-[15px] leading-[1.7] text-[#30343b] md:text-[16px]">
                  Homeowners searching for bathroom renovation in Mississauga
                  usually want the same things: a contractor who understands the
                  home, a quote tied to the real scope, and a renovation plan
                  that stays organized from demolition to final walkthrough. EPF
                  Reno builds around those basics first with measured layouts,
                  fixture planning, and practical sequencing before the work
                  begins.
                </p>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#30343b] md:text-[16px]">
                  We work with homeowners in Port Credit, Clarkson, Lorne Park,
                  Cooksville, City Centre, Erin Mills, Churchill Meadows,
                  Streetsville, Meadowvale, East Credit, Applewood, Lakeview,
                  Sheridan, Hurontario, Mineola, and Meadowvale Village. Those
                  neighbourhoods all have different home layouts, ages, and
                  access conditions, which is why local planning matters before
                  a bathroom renovation starts.
                </p>

                <h3 className="mt-7 max-w-[14ch] text-[clamp(1.9rem,2.8vw,2.8rem)] font-extrabold leading-[1.03] text-[#15181d]">
                  Why Homeowners Choose EPF Reno For Bathroom Renovations
                </h3>

                <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.65] text-[#30343b] marker:text-[#15181d] md:text-[16px]">
                  <li>
                    Discovery and measurement come first so layout decisions are
                    tied to the real bathroom.
                  </li>
                  <li>
                    Scope and quote are clarified before work starts, including
                    finish direction and renovation priorities.
                  </li>
                  <li>
                    Material planning keeps tile, vanity, plumbing, and fixture
                    coordination aligned.
                  </li>
                  <li>
                    Protected worksites, daily cleanup, and steady communication
                    help lived-in homes stay manageable.
                  </li>
                  <li>
                    Final walkthrough and finish checks keep the handover clear,
                    local, and well managed.
                  </li>
                </ul>

                <h3 className="mt-7 max-w-[13ch] text-[clamp(1.9rem,2.8vw,2.8rem)] font-extrabold leading-[1.03] text-[#15181d]">
                  Get Started On Your Bathroom Renovation Today
                </h3>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#30343b] md:text-[16px]">
                  When layout decisions, material selections, and site
                  preparation are handled upfront, bathroom renovation projects
                  tend to run with fewer surprises, more accurate scheduling,
                  and a cleaner finish at handover.{" "}
                  <a
                    href="/quote/"
                    className="font-semibold text-[#15181d] underline decoration-[#cf241c] underline-offset-4 transition hover:text-[#cf241c]"
                  >
                    Request your free estimate
                  </a>{" "}
                  if you are planning a bathroom renovation in Mississauga or a
                  nearby GTA neighbourhood.
                </p>
              </div>
            </div>
          </div>
        </section>
      }
      reviewFeatureSection={
        <section className="container-x mt-10 md:mt-12">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fdfbf8_0%,#f5eee3_100%)] px-5 py-8 shadow-[0_24px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] md:px-8 md:py-10">
            <div className="text-center">
              <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.05em] text-[#31343a]">
                Read Our Google Reviews
              </h2>
              <div className="mt-5">
                <GoogleStars />
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-[760px]">
              <ReviewSummaryCard />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {googleReviewCards.map((review) => (
                <article
                  key={review.name + review.date}
                  className="rounded-[18px] border border-black/8 bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[18px] font-semibold text-white ${review.color}`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-[15px] font-bold leading-5 text-[#17191d]">
                        {review.name}
                      </p>
                      <p className="mt-1 text-[13px] leading-5 text-[#888888]">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1">
                    <GoogleStars size="h-5 w-5" />
                  </div>

                  <p className="mt-4 text-[15px] leading-8 text-[#24272d]">
                    {review.text}
                  </p>

                  <p className="mt-5 text-[15px] leading-6 text-[#8a8a8a]">
                    Read more
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      }
      serviceAreaSection={
        <div className="card px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                Service Area Map
              </p>
              <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[52px]">
                Areas We Serve{" "}
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Homeowners often want to know if we work in their part of the
                GTA before they spend time planning a renovation. EPF Reno
                serves renovation clients across Mississauga, Toronto, Oakville,
                Burlington, Hamilton, Caledonia, Brantford, Grimsby, Milton,
                Etobicoke, North York, and nearby communities where we have
                location and neighbourhood pages.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                If you are planning a bathroom renovation, basement renovation,
                or larger home renovation, we can review your scope, timeline,
                and location before the next step.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-black/10 bg-[var(--reno-paper-soft)] px-3 py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--reno-ink)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Questions about your address or project area?{" "}
                <a
                  href={PHONE_HREF}
                  className="font-bold text-[var(--reno-ink)] underline decoration-[rgba(95,130,120,0.45)] underline-offset-4"
                >
                  Call {PHONE_NUMBER}
                </a>{" "}
                and we can confirm coverage.
              </p>
            </div>

            <GtaServiceAreaMap />
          </div>
        </div>
      }
      postServiceAreaSection={
        <div className="card px-6 py-7 md:px-8 md:py-8">
          <div>
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                Warranty And Trust
              </p>
              <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[52px]">
                Best Bathroom Remodelers In Mississauga
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Some contractors are vague about licensing, site protection, and
                what happens after the renovation is finished. Before agreeing
                to a bathroom renovation price, whether it is a full primary
                bathroom remodel or a smaller bathroom update, it is worth
                understanding exactly what kind of workmanship coverage and
                follow-through your contractor offers.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Mississauga homeowners deserve a renovation company that
                respects the home, the schedule, and the budget, not just one
                that gives a number and disappears once the work is done. Clear
                scope, protected worksites, and written coverage matter as much
                as tile, vanities, and fixtures.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                EPF Reno positions projects around documented scope, insured and
                WSIB-backed jobsite standards, and a written{" "}
                <strong>3-year workmanship warranty</strong>. Manufacturer
                warranties on fixtures and materials remain specific to the
                brands and products chosen for the job, but if an issue comes up
                with our workmanship during the covered period, we address it
                directly.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                <a
                  href={PHONE_HREF}
                  className="font-bold text-[var(--reno-ink)] underline decoration-[rgba(95,130,120,0.45)] underline-offset-4"
                >
                  Speak with a remodel expert
                </a>{" "}
                if you are planning a bathroom renovation in Mississauga or
                nearby neighbourhoods.
              </p>
            </div>
          </div>
        </div>
      }
      faqItems={faqItems}
      gallery={gallery}
      heroImagePosition="78% center"
      keywordLinks={keywordLinks}
    />
  );
}
