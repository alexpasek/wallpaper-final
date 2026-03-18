import RenoLandingPage from "@/components/RenoLandingPage";
import { PHONE_HREF, PHONE_NUMBER, SERVICE_AREAS } from "@/app/config";
import GtaServiceAreaMap from "@/components/GtaServiceAreaMap";
import ReviewScroller from "@/components/ReviewScroller";
import { buildBathroomGallery } from "@/data/bathroomGallery";

export const metadata = {
  title: "Bathroom, Basement & Home Renovation | EPF Pro Services",
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

const baseGallery = buildBathroomGallery("Bathroom, Basement & Home Renovation");
const gallery = [
  {
    src: "/bathrooms%20/IMG_4876.JPG",
    alt: "Bathroom, Basement & Home Renovation - bright bathroom with tub and glass shower screen",
    badge: "Featured Room",
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

export default function Page() {
  return (
    <RenoLandingPage
      title="Bathroom, Basement & Home Renovation"
      description="We deliver bathroom renovation projects across Mississauga and the GTA with clear planning, clean worksites, and dependable communication from start to finish."
      canonicalPath="/"
      kicker="EPF Pro Services"
      highlights={highlights}
      process={process}
      processSection={
        <div className="dark-card h-full px-6 py-7 md:px-8 md:py-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Renovation Flow
          </p>
          <h2 className="mt-3 text-[34px] font-black uppercase leading-[0.95] text-white display-title md:text-[44px]">
            Bathroom Renovation Process
          </h2>
          <p className="mt-4 max-w-[36rem] text-[15px] leading-7 text-white/84">
            The strongest projects feel organized before demolition starts. We
            plan the scope, sequence, and site setup first so the renovation
            moves cleanly and homeowners know what happens next.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Discovery And Measure",
                text: "Initial call, site review, and real measurements for the bathroom.",
              },
              {
                step: "02",
                title: "Scope And Quote",
                text: "Layout priorities, finish direction, and clear pricing before work starts.",
              },
              {
                step: "03",
                title: "Material Planning",
                text: "Selections, fixture coordination, and pre-construction scheduling.",
              },
              {
                step: "04",
                title: "Build Execution",
                text: "Protected worksite, daily updates, and staged renovation progress.",
              },
              {
                step: "05",
                title: "Final Walkthrough",
                text: "Completion review, finishing checks, and project handover.",
              },
            ].map((item, index) => (
              <article
                key={item.step}
                className={[
                  "border border-white/10 bg-white/5 px-4 py-4",
                  index === 4 ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--reno-accent)]/30 bg-[rgba(95,130,120,0.18)] text-[13px] font-black tracking-[0.14em] text-[var(--reno-accent-soft)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black uppercase leading-[0.95] text-white display-title md:text-[25px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-7 text-white/84">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      }
      localCopy="We provide bathroom renovation services across Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, and North York, with local service pages built around real GTA neighbourhoods and project coverage."
      localSection={
        <>
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
            Local Bathroom Renovation
          </p>
          <h2 className="mt-3 max-w-[14ch] text-[32px] font-black uppercase leading-[0.94] text-white display-title md:text-[42px]">
            Bathroom Renovation In Mississauga And Nearby Neighbourhoods
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-white/84">
            Homeowners searching for bathroom renovation in Mississauga usually want the
            same things: a contractor who understands the home, a quote tied to the real
            scope, and a renovation plan that stays organized from demolition to final
            walkthrough. EPF Pro Services builds around those basics first with measured
            layouts, fixture planning, and practical sequencing before the work begins.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Bathroom renovation planning before demolition starts",
              "Clear quote guidance tied to layout and finish choices",
              "Daily cleanup and floor protection in lived-in homes",
              "Tile, vanity, plumbing, and fixture coordination",
              "Steady communication through each stage of the renovation",
              "Mississauga service plus nearby GTA neighbourhood coverage",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/5 px-4 py-3 text-[14px] font-semibold leading-6 text-white/88"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-7 text-white/84">
            We work with homeowners in Port Credit, Clarkson, Lorne Park, Cooksville,
            City Centre, Erin Mills, Churchill Meadows, Streetsville, Meadowvale, East
            Credit, Applewood, Lakeview, Sheridan, Hurontario, Mineola, and Meadowvale
            Village. These neighbourhoods all have different home layouts, ages, and
            access conditions, which is why local planning matters before a bathroom
            renovation starts.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-white/84">
            When layout decisions, material selections, and site preparation are handled
            upfront, bathroom renovation projects tend to run with fewer surprises, more
            accurate scheduling, and a cleaner finish at handover. The goal is simple:
            give Mississauga homeowners a bathroom renovation process that feels clear,
            local, and well managed from the first visit to the final walkthrough.
          </p>
          <p className="mt-6 text-[16px] leading-8 text-white/88">
            <a
              href="/quote/"
              className="font-bold text-[var(--reno-accent-soft)] underline decoration-[rgba(95,130,120,0.45)] underline-offset-4 transition hover:text-white"
            >
              Request your free estimate
            </a>{" "}
            if you are planning a bathroom renovation in Mississauga or a nearby GTA
            neighbourhood.
          </p>
        </>
      }
      serviceAreaSection={
        <div className="card px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
                Service Area Map
              </p>
              <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[52px]">
                Areas We Serve               </h2>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Homeowners often want to know if we work in their part of the GTA before
                they spend time planning a renovation. EPF Pro Services serves renovation
                clients across Mississauga, Toronto, Oakville, Burlington, Hamilton,
                Caledonia, Brantford, Grimsby, Milton, Etobicoke, North York, and nearby
                communities where we have location and neighbourhood pages.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                If you are planning a bathroom renovation, basement renovation, or larger
                home renovation, we can review your scope, timeline, and location before
                the next step.
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
                Some contractors are vague about licensing, site protection, and what
                happens after the renovation is finished. Before agreeing to a bathroom
                renovation price, whether it is a full primary bathroom remodel or a
                smaller bathroom update, it is worth understanding exactly what kind of
                workmanship coverage and follow-through your contractor offers.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                Mississauga homeowners deserve a renovation company that respects the
                home, the schedule, and the budget, not just one that gives a number and
                disappears once the work is done. Clear scope, protected worksites, and
                written coverage matter as much as tile, vanities, and fixtures.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                EPF Pro Services positions projects around documented scope, insured and
                WSIB-backed jobsite standards, and a written{" "}
                <strong>3-year workmanship warranty</strong>. Manufacturer warranties on
                fixtures and materials remain specific to the brands and products chosen
                for the job, but if an issue comes up with our workmanship during the
                covered period, we address it directly.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
                <a
                  href={PHONE_HREF}
                  className="font-bold text-[var(--reno-ink)] underline decoration-[rgba(95,130,120,0.45)] underline-offset-4"
                >
                  Speak with a remodel expert
                </a>{" "}
                if you are planning a bathroom renovation in Mississauga or nearby
                neighbourhoods.
              </p>
            </div>
          </div>
        </div>
      }
      finalSection={
        <div className="card overflow-hidden px-6 py-7 md:px-8 md:py-8">
          <div className="dark-card px-6 py-7 md:px-8 md:py-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                  Renovation Reviews
                </p>
                <h2 className="mt-3 max-w-[13ch] text-[34px] font-black uppercase leading-[0.95] text-white display-title md:text-[46px]">
                  Homeowners Remember The Process And The Finish
                </h2>
                <p className="mt-4 max-w-[42rem] text-[15px] leading-7 text-white/84">
                  Bathroom renovations get recommended when the workmanship is
                  strong and the experience stays organized from start to
                  finish. Homeowners usually mention clean job sites, clear
                  updates, and bathrooms that feel finished the way they were
                  promised.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Cleaner daily wrap-ups",
                  "Clear schedule and material updates",
                  "Finished bathrooms that match the plan",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/14 bg-white/10 px-4 py-4 text-[14px] font-semibold leading-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,#f8f4ec_0%,#efe3cb_100%)] px-3 py-5 md:px-4">
            <ReviewScroller
              className="py-1"
              brand="95 130 120"
              accent="46 53 64"
              bg="subtle"
              bgAlpha={0.14}
              cardAlpha={0.06}
              hoverAlpha={0.12}
              showHeader={false}
            />
          </div>

          <div className="mt-8 rounded-[26px] border border-black/8 bg-[linear-gradient(135deg,#171b21_0%,#232932_100%)] px-6 py-6 md:px-8 md:py-7">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Next Step
            </p>
            <h3 className="mt-3 text-[32px] font-black uppercase leading-[0.95] text-white display-title md:text-[44px]">
              Ready To Remodel Without Regret?
            </h3>
            <p className="mt-3 max-w-[42rem] text-[15px] leading-7 text-white/84">
              Book a time with a remodel expert to review your bathroom goals, layout,
              finish direction, and the right next step for your project.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/quote/" className="btn-cta">
                Speak With A Remodel Expert
              </a>
              <a href="/bathroom-renovation/" className="btn-cta-outline">
                Explore Bathroom Renovation
              </a>
            </div>
          </div>
        </div>
      }
      faqItems={faqItems}
      gallery={gallery}
      heroImagePosition="75% center"
      keywordLinks={keywordLinks}
    />
  );
}
