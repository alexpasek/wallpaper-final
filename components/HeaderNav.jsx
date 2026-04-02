"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_NAME, PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const serviceGroups = [
  {
    label: "Renovation Services",
    items: [
      {
        href: "/bathroom-renovation/",
        label: "Bathroom Renovation",
        description: "Bathrooms, showers, tile, vanities, and full upgrades.",
      },
      {
        href: "/basement-renovation/",
        label: "Basement Renovation",
        description: "Lower-level remodeling with practical layout planning.",
      },
      {
        href: "/home-renovation/",
        label: "Home Renovation",
        description: "Whole-home renovation projects with phased execution.",
      },
    ],
  },
  {
    label: "Other Services",
    items: [
      {
        href: "/other-services/",
        label: "Other Services Overview",
        description: "See the full list of supporting finishing services.",
      },
      {
        href: "/other-services/wallpaper-removal/",
        label: "Wallpaper Removal",
        description: "Clean stripping, adhesive removal, and prep-ready walls.",
      },
      {
        href: "/other-services/popcorn-ceiling-removal/",
        label: "Popcorn Ceiling Removal",
        description: "Containment, smoothing, and finish-ready ceilings.",
      },
      {
        href: "/other-services/drywall-installation/",
        label: "Drywall Installation",
        description: "Board installation, repairs, taping, and smooth finishing.",
      },
      {
        href: "/other-services/interior-painting/",
        label: "Interior Painting",
        description: "Prep discipline, clean lines, and durable paint systems.",
      },
    ],
  },
];

const serviceLinks = [
  {
    href: "/services/",
    label: "All Services",
    description: "Service overview for renovation and finishing work.",
  },
  ...serviceGroups.flatMap((group) => group.items),
];

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services", children: serviceLinks },
  { href: "/before-after/", label: "Gallery" },
  { href: "/blog/", label: "Blog" },
  { href: "/about-us/", label: "About" },
];

const mobileLinks = [
  primaryNav[0],
  primaryNav[2],
  primaryNav[3],
  primaryNav[4],
  { href: "/contact/", label: "Contact" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  const isServicesActive = serviceLinks.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 px-4 transition-all duration-300 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative rounded-[18px] border border-[#3a3328] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(90deg,rgba(8,10,14,0.98)_0%,rgba(31,27,24,0.96)_48%,rgba(10,12,16,0.98)_100%)] shadow-[0_22px_48px_rgba(0,0,0,0.42)] backdrop-blur-xl">
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
              {primaryNav.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                    onFocus={() => setDesktopServicesOpen(true)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setDesktopServicesOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setDesktopServicesOpen((open) => !open)}
                      className={[
                        "relative inline-flex items-center gap-2 rounded-full px-4 pb-3 pt-3 text-[18px] font-semibold text-white/92 transition-all duration-200 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                        isServicesActive || desktopServicesOpen
                          ? "bg-white/[0.08] text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                          : "",
                      ].join(" ")}
                      aria-haspopup="menu"
                      aria-expanded={desktopServicesOpen}
                    >
                      {item.label}
                      <span
                        className={[
                          "text-[12px] transition-transform duration-200",
                          desktopServicesOpen ? "rotate-180" : "",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                      <span
                        className={[
                          "absolute inset-x-0 bottom-0 mx-auto h-[3px] w-[72%] rounded-full transition",
                          isServicesActive || desktopServicesOpen
                            ? "bg-[var(--reno-accent)]"
                            : "bg-transparent",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={[
                        "absolute left-1/2 top-full z-40 hidden w-[960px] max-w-[calc(100vw-7rem)] -translate-x-1/2 pt-5 lg:block",
                        desktopServicesOpen ? "pointer-events-auto" : "pointer-events-none",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "rounded-[18px] border border-[rgba(215,200,170,0.2)] bg-[linear-gradient(180deg,rgba(18,22,29,0.985),rgba(11,14,19,0.985))] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.44)] transition duration-200",
                          desktopServicesOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0",
                        ].join(" ")}
                      >
                        <div className="grid grid-cols-[0.8fr_1fr_1fr] gap-4">
                          <Link
                            href="/services/"
                            className={[
                              "rounded-[14px] border px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_28px_rgba(0,0,0,0.22)] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                              isActive("/services/")
                                ? "border-[rgba(95,130,120,0.46)] bg-[rgba(95,130,120,0.16)]"
                                : "border-white/8 bg-white/[0.04] hover:border-[rgba(246,221,160,0.24)] hover:bg-white/[0.08]",
                            ].join(" ")}
                          >
                            <span className="block text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                              Service Overview
                            </span>
                            <span className="mt-3 block text-[24px] font-black leading-[0.96] text-white display-title">
                              All Services
                            </span>
                            <span className="mt-3 block text-[14px] leading-6 text-white/72">
                              Start here if you want the full renovation and finishing service list in one place.
                            </span>
                          </Link>

                          {serviceGroups.map((group) => (
                            <div
                              key={group.label}
                              className="rounded-[14px] border border-white/8 bg-white/[0.04] px-4 py-4"
                            >
                              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                                {group.label}
                              </p>
                              <div className="mt-3 space-y-2">
                                {group.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={[
                                      "block rounded-[12px] px-4 py-3 transition-all duration-200 hover:translate-x-1 hover:bg-white/[0.08] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                                      isActive(child.href)
                                        ? "bg-[rgba(95,130,120,0.16)] shadow-[inset_0_0_0_1px_rgba(95,130,120,0.3)]"
                                        : "",
                                    ].join(" ")}
                                  >
                                    <span className="block text-[15px] font-bold text-white">
                                      {child.label}
                                    </span>
                                    <span className="mt-1 block text-[13px] leading-5 text-white/62">
                                      {child.description}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setDesktopServicesOpen(false)}
                    className={[
                      "relative rounded-full px-4 pb-3 pt-3 text-[18px] font-semibold text-white/92 transition-all duration-200 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                      isActive(item.href)
                        ? "bg-white/[0.08] text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                        : "",
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
                )
              )}
            </nav>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/quote/"
                className={[
                  "btn-cta",
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
              isCompact ? "max-h-0 border-t-0 py-0 opacity-0" : "max-h-24 py-4 opacity-100 md:py-5",
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
                  "shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                  isActive(item.href)
                    ? "border-[rgba(95,130,120,0.8)] bg-[rgba(95,130,120,0.14)] text-[var(--reno-accent-soft)]"
                    : "border-white/12 bg-white/5 text-white/82 hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              className={[
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                isServicesActive || mobileServicesOpen
                  ? "border-[rgba(95,130,120,0.8)] bg-[rgba(95,130,120,0.14)] text-[var(--reno-accent-soft)]"
                  : "border-white/12 bg-white/5 text-white/82 hover:bg-white/10",
              ].join(" ")}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-menu"
            >
              Services
              <span
                className={[
                  "text-[10px] transition-transform duration-200",
                  mobileServicesOpen ? "rotate-180" : "",
                ].join(" ")}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
          </nav>

          <div
            id="mobile-services-menu"
            className={[
              "overflow-hidden transition-all duration-300",
              mobileServicesOpen ? "max-h-[900px] pt-3 opacity-100" : "max-h-0 pt-0 opacity-0",
            ].join(" ")}
          >
            <div className="space-y-3 border-t border-white/10 pt-3">
              <Link
                href="/services/"
                className={[
                  "block rounded-[12px] border px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                  isActive("/services/")
                    ? "border-[rgba(95,130,120,0.6)] bg-[rgba(95,130,120,0.14)]"
                    : "border-white/10 bg-white/5 hover:bg-white/8",
                ].join(" ")}
              >
                <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                  All Services
                </span>
                <span className="mt-1 block text-[12px] leading-5 text-white/62">
                  Overview of renovation and finishing services.
                </span>
              </Link>

              {serviceGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[14px] border border-white/10 bg-white/[0.04] px-3 py-3"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                    {group.label}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "rounded-[12px] border px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(246,221,160,0.58)]",
                          isActive(item.href)
                            ? "border-[rgba(95,130,120,0.6)] bg-[rgba(95,130,120,0.14)]"
                            : "border-white/10 bg-white/5 hover:bg-white/8",
                        ].join(" ")}
                      >
                        <span className="block text-[13px] font-bold text-white">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[12px] leading-5 text-white/62">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
