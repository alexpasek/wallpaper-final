"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_NAME, PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/services/", label: "Services" },
  { href: "/before-after/", label: "Gallery" },
  { href: "/about-us/", label: "About" },
];

const mobileLinks = [
  ...primaryNav,
  { href: "/contact/", label: "Contact" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const syncCompactState = () => {
      setIsCompact(window.scrollY > 48);
    };

    syncCompactState();
    window.addEventListener("scroll", syncCompactState, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncCompactState);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 px-4 transition-all duration-300 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="overflow-hidden rounded-[18px] border border-[#3a3328] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(90deg,rgba(8,10,14,0.98)_0%,rgba(31,27,24,0.96)_48%,rgba(10,12,16,0.98)_100%)] shadow-[0_22px_48px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div
            className={[
              "flex flex-col px-5 transition-all duration-300 md:px-7 lg:flex-row lg:items-center",
              isCompact ? "gap-3 py-3 md:py-4 lg:gap-6" : "gap-5 py-5 md:py-6 lg:gap-8",
            ].join(" ")}
          >
            <Link href="/" className="flex min-w-0 items-center gap-4">
              <img
                src="/logo.png"
                alt={`${BRAND_NAME} logo`}
                className={[
                  "w-auto shrink-0 object-contain transition-all duration-300",
                  isCompact ? "h-11 md:h-[56px]" : "h-14 md:h-[70px]",
                ].join(" ")}
              />

              <span className="min-w-0">
                <span
                  className={[
                    "block truncate leading-none text-white transition-all duration-300",
                    isCompact ? "text-[22px] md:text-[34px]" : "text-[28px] md:text-[42px]",
                  ].join(" ")}
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {BRAND_NAME}
                </span>
                <span
                  className={[
                    "mt-1 block truncate leading-none text-[#d9d0c3] transition-all duration-300",
                    isCompact ? "text-[11px] md:text-[13px]" : "text-[13px] md:text-[15px]",
                  ].join(" ")}
                >
                  Renovation Specialists in the GTA
                </span>
              </span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative pb-3 text-[18px] font-semibold text-white/92 transition hover:text-white",
                    isActive(item.href) ? "text-white" : "",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute inset-x-0 bottom-0 mx-auto h-[3px] w-[72%] rounded-full transition",
                      isActive(item.href) ? "bg-[var(--reno-accent)]" : "bg-transparent",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/quote/"
                className={[
                  "inline-flex items-center justify-center rounded-[10px] border border-[rgba(215,228,224,0.72)] bg-[linear-gradient(180deg,#7ea196_0%,#5f8278_52%,#40645b_100%)] font-bold text-[#f7fbfa] shadow-[0_12px_24px_rgba(64,100,91,0.3)] transition-all duration-300 hover:brightness-105",
                  isCompact ? "px-5 py-2.5 text-[14px] md:px-6 md:text-[15px]" : "px-6 py-3 text-[15px] md:px-7 md:py-3.5 md:text-[17px]",
                ].join(" ")}
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className={[
                  "text-white/74 transition-all duration-300 hover:text-white",
                  isCompact ? "text-[13px]" : "text-[15px]",
                ].join(" ")}
              >
                Call or text: {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div
            className={[
              "overflow-hidden border-t border-[#8a6731] px-5 transition-all duration-300 md:px-7",
              isCompact
                ? "max-h-0 border-t-0 py-0 opacity-0"
                : "max-h-24 py-4 opacity-100 md:py-5",
            ].join(" ")}
          >
            <div className="text-center text-[18px] text-[#f0e5d6] md:text-[24px]">
              Trusted Bathroom, Basement &amp; Interior Renovation Experts Across the GTA
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "mx-auto max-w-[1600px] transition-all duration-300 lg:hidden",
          isCompact ? "mt-2" : "mt-3",
        ].join(" ")}
      >
        <div className="overflow-x-auto rounded-[16px] border border-white/10 bg-[rgba(10,12,16,0.72)] px-3 py-3 backdrop-blur-xl">
          <nav className="flex gap-2 pb-1">
            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold",
                  isActive(item.href)
                    ? "border-[rgba(95,130,120,0.8)] bg-[rgba(95,130,120,0.14)] text-[var(--reno-accent-soft)]"
                    : "border-white/12 bg-white/5 text-white/82",
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
