"use client";

import { CONTACT } from "@/app/config";

export default function StickyCTA() {
  return (
    <div id="sticky-cta" className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="rounded-full border border-white/12 bg-[rgba(11,13,17,0.92)] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex gap-2">
          <a href={CONTACT.phoneHref} className="btn-cta w-1/2 text-center text-[13px]">
            Call Now
          </a>
          <a href="/quote/" className="btn-cta-outline w-1/2 text-center text-[13px]">
            Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}
