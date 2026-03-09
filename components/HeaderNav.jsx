"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/before-after/", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about-us/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const serviceLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/other-services/wallpaper-removal/", label: "Wallpaper Removal" },
  { href: "/other-services/popcorn-ceiling-removal/", label: "Popcorn Ceiling Removal" },
  { href: "/other-services/drywall-installation/", label: "Drywall Installation" },
  { href: "/other-services/interior-painting/", label: "Interior Painting" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const isActive = (href) => {
    if (href === "/#reviews") return false;
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--reno-border)] bg-white">
      <div className="container-x h-[88px] flex items-center gap-4">
        <Link href="/" className="shrink-0 flex items-center">
          <img src="/logo.png" alt="EPF Pro Services" className="w-auto h-11 md:h-12 object-contain" />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-center text-[17px] font-semibold text-[#264f46]">
          {primaryNav.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-4 h-6 w-px bg-[#d3ddd8]" aria-hidden="true" />}
              <Link
                href={item.href}
                className={[
                  "leading-none transition-colors",
                  isActive(item.href) ? "text-[var(--reno-ink)]" : "hover:text-[var(--reno-ink)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="ml-auto shrink-0 inline-flex items-center whitespace-nowrap rounded-[14px] bg-[var(--reno-accent)] px-6 py-3 text-white font-black text-[18px] md:text-[20px] leading-none hover:bg-[var(--reno-accent-dark)]"
        >
          {PHONE_NUMBER}
        </a>
      </div>

      <div className="lg:hidden border-t border-[var(--reno-border)] bg-[#f7faf9]">
        <div className="container-x py-2">
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {primaryNav.concat(serviceLinks).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "shrink-0 rounded-xl px-3 py-2 text-sm font-semibold",
                  isActive(item.href)
                    ? "bg-[var(--reno-ink)] text-white"
                    : "bg-white text-[#264a42] border border-[var(--reno-border)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
