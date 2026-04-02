import Link from "next/link";
import { BRAND_NAME, CONTACT, SERVICE_AREAS } from "@/app/config";

const coreLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/before-after/", label: "Project Gallery" },
  { href: "/blog/", label: "Blog" },
];

const supportLinks = [
  { href: "/other-services/wallpaper-removal/", label: "Wallpaper Removal" },
  { href: "/other-services/popcorn-ceiling-removal/", label: "Popcorn Ceiling Removal" },
  { href: "/other-services/drywall-installation/", label: "Drywall Installation" },
  { href: "/other-services/interior-painting/", label: "Interior Painting" },
];

export default function Footer() {
  return (
    <footer
      className="mt-20 border-t border-white/8 bg-[#0f1115] text-[#f2ece1]"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <section className="container-x py-12 md:py-16">
        <div className="grid gap-8 border-b border-white/8 pb-10 md:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              {BRAND_NAME}
            </p>
            <h3 className="mt-3 text-[34px] font-black uppercase leading-[0.95] text-white md:text-[48px] display-title">
              Darker, cleaner, tighter renovation work from quote to handover.
            </h3>
            <p className="mt-4 max-w-[34rem] text-[15px] leading-7 text-white/70 md:text-[16px]">
              We build bathrooms, basements, home upgrades, and finishing projects with clear scope,
              protected worksites, and a straightforward quote process.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn-cta">
                Call {CONTACT.phone}
              </a>
              <Link href="/quote/" className="btn-cta-outline">
                Request Quote
              </Link>
            </div>
          </div>

          <div>
            <div className="text-[13px] font-black uppercase tracking-[0.18em] text-white/52">Core Services</div>
            <ul className="mt-4 space-y-3 text-[15px] font-semibold text-white/86">
              {coreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--reno-accent-soft)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-black uppercase tracking-[0.18em] text-white/52">Other Services</div>
            <ul className="mt-4 space-y-3 text-[15px] font-semibold text-white/86">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--reno-accent-soft)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-black uppercase tracking-[0.18em] text-white/52">Contact</div>
            <div className="mt-4 space-y-3 text-[15px] leading-6 text-white/82">
              <p itemProp="name" className="font-semibold text-white">
                {BRAND_NAME}
              </p>
              <p itemProp="openingHours">Mon-Sun: 8:00 AM - 9:00 PM</p>
              <a href={CONTACT.phoneHref} className="block font-semibold text-white transition hover:text-[var(--reno-accent-soft)]">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block transition hover:text-[var(--reno-accent-soft)]">
                {CONTACT.email}
              </a>
              <p>{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/42 md:flex-row md:items-center md:justify-between">
          <p>Serving {SERVICE_AREAS.join(" · ")}</p>
          <p>© {new Date().getFullYear()} {BRAND_NAME}</p>
        </div>
      </section>
    </footer>
  );
}
