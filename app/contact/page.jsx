import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, CONTACT, PHONE_HREF, PHONE_NUMBER, SERVICE_AREAS } from "@/app/config";

export const metadata = {
  title: "Contact Us | EPF Pro Services",
  description:
    "Contact EPF Pro Services for bathroom renovation, basement renovation, and home renovation projects across Mississauga and the GTA.",
  alternates: { canonical: "/contact/" },
  robots: { index: true, follow: true },
};

const textHref = "sms:+16478129135";

const quickActions = [
  {
    title: "Call Us",
    text: "Talk through your renovation scope, schedule, and next steps directly.",
    href: PHONE_HREF,
    label: PHONE_NUMBER,
  },
  {
    title: "Text Us",
    text: "Send a quick message from your phone and get a fast response.",
    href: textHref,
    label: "Send A Text",
  },
  {
    title: "Email Us",
    text: "Share photos, rough scope, or a short project summary by email.",
    href: `mailto:${CONTACT.email}`,
    label: CONTACT.email,
  },
];

export default function Page() {
  return (
    <div className="container-x py-8 md:py-10">
      <section className="dark-card overflow-hidden px-6 py-8 md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Contact Us
            </p>
            <h1 className="mt-3 max-w-[10ch] text-[44px] font-black uppercase leading-[0.9] text-white display-title md:text-[72px]">
              Let&apos;s Talk About Your Renovation
            </h1>
            <p className="mt-5 max-w-[44rem] text-[17px] leading-8 text-white/74">
              Reach out for bathroom renovation, basement renovation, home renovation,
              wallpaper removal, drywall, painting, or finishing work across
              Mississauga and nearby GTA service areas. If you already have photos,
              dimensions, or a rough timeline, we can use that to guide the next step.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {quickActions.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="border border-white/10 bg-white/5 px-4 py-5 transition hover:bg-white/8"
                >
                  <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-white/72">{item.text}</p>
                  <p className="mt-5 text-[16px] font-bold text-white">{item.label}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                  Contact Information
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/80">
                  <li>
                    Phone:{" "}
                    <a href={PHONE_HREF} className="font-bold text-white underline underline-offset-4">
                      {PHONE_NUMBER}
                    </a>
                  </li>
                  <li>
                    Text:{" "}
                    <a href={textHref} className="font-bold text-white underline underline-offset-4">
                      Message our team
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-bold text-white underline underline-offset-4"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                  Service Areas
                </p>
                <p className="mt-4 text-[15px] leading-7 text-white/74">
                  We work across Mississauga, Toronto, Oakville, Burlington,
                  Hamilton, Milton, Etobicoke, North York, and surrounding
                  neighbourhoods in the GTA.
                </p>
                <p className="mt-4">
                  <Link
                    href="/locations/"
                    className="font-bold text-white underline decoration-white/30 underline-offset-4"
                  >
                    View all location pages
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <aside className="hero-form h-fit shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
              Request A Quote
            </p>
            <h2 className="mt-3 text-[36px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[50px]">
              Send Your Project Details
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
              Share the type of renovation, your rough timeline, and any notes
              that help define the scope. We will follow up with the right next
              step for your project.
            </p>
            <QuoteForm />
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card px-6 py-7 md:px-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            Why Homeowners Reach Out
          </p>
          <h2 className="mt-3 text-[34px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[48px]">
            Clear Contact. Clear Next Step.
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
            Most homeowners contacting {BRAND_NAME} want to confirm three things first:
            whether we serve their area, whether the scope fits what we do, and what
            the next planning step looks like. This page is built to make that simple.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Fast response by call, text, or form submission",
              "Bathroom, basement, and home renovation project screening",
              "Mississauga-first service with broader GTA coverage",
            ].map((item) => (
              <div
                key={item}
                className="border border-black/10 bg-[var(--reno-paper-soft)] px-4 py-3 text-[14px] font-bold leading-6 text-[var(--reno-ink)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card px-6 py-7 md:px-8">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-dark)]">
            GTA Coverage
          </p>
          <h2 className="mt-3 text-[34px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[48px]">
            Service Areas Across The GTA
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[var(--reno-ink-soft)]">
            If you are reaching out from Mississauga, Oakville, Burlington,
            Hamilton, Brantford, Caledonia, Grimsby, Etobicoke, Toronto, Milton,
            North York, Ancaster, Dundas, Stoney Creek, or Waterdown, we can
            review your renovation scope and confirm fit before the next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="border border-black/10 bg-[var(--reno-paper-soft)] px-3 py-2 text-[12px] font-black uppercase tracking-[0.1em] text-[var(--reno-ink)]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 dark-card px-6 py-7 md:px-8 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Ready To Reach Out?
            </p>
            <h2 className="mt-3 max-w-[12ch] text-[34px] font-black uppercase leading-[0.95] text-white display-title md:text-[48px]">
              Call, Text, Or Send Your Quote Request
            </h2>
            <p className="mt-4 max-w-[42rem] text-[16px] leading-8 text-white/72">
              Send your renovation details whenever you are ready. We will review
              the scope and point you to the right next step without adding extra friction.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              Call {PHONE_NUMBER}
            </a>
            <a href={textHref} className="btn-cta-outline">
              Text Us
            </a>
            <Link href="/quote/" className="btn-cta-outline">
              Open Quote Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
