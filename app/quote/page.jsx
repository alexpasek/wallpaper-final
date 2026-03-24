import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const metadata = {
  title: "Get a Quote | EPF Reno",
  alternates: { canonical: "/quote/" },
};

export default function Page() {
  return (
    <section className="container-x py-8 md:py-12">
      <div className="overflow-hidden border border-[rgba(221,212,192,0.88)] bg-[linear-gradient(180deg,#fcfcfb_0%,#f7f4ee_100%)] shadow-[0_24px_48px_rgba(0,0,0,0.14)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[linear-gradient(180deg,#fcfcfb_0%,#f5efe5_100%)] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-14">
            <div className="flex items-start gap-6">
              <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-[rgba(32,28,21,0.08)] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.1)] md:h-[136px] md:w-[136px]">
                <img
                  src="/logo.png"
                  alt={`${BRAND_NAME} logo`}
                  className="h-[92px] w-[92px] object-contain md:h-[104px] md:w-[104px]"
                />
              </div>

              <div className="pt-2">
                <p className="text-[clamp(1.5rem,2vw,2rem)] font-medium leading-tight text-[#181511]">
                  From The EPF Reno Team
                </p>
                <h1 className="mt-6 text-[clamp(3.2rem,6vw,5.25rem)] font-black uppercase leading-[0.9] text-[var(--reno-accent)] display-title">
                  Free Quote
                </h1>
              </div>
            </div>

            <div className="mt-10 max-w-[58rem] space-y-5 text-[17px] leading-[1.65] text-[#1f1c18]">
              <p>Hello and welcome!</p>
              <p>
                We appreciate you considering {BRAND_NAME} for your bathroom,
                basement, or home renovation project. The goal is simple:
                clearer planning, cleaner execution, and a final result that
                feels finished properly.
              </p>
              <p>
                Every quote request is reviewed around real scope, site
                conditions, timing, and the level of finish you want. That
                helps us respond with practical next steps instead of generic
                pricing.
              </p>
              <p className="font-semibold text-[#14110d]">
                If you are planning a renovation in Mississauga, Oakville,
                Burlington, Toronto, or the surrounding GTA, send your details
                here and we will follow up with quote guidance and project
                direction.
              </p>
              <p>
                If you prefer to speak directly, call or text{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-[#14110d] underline decoration-[var(--reno-accent)] underline-offset-4"
                >
                  {PHONE_NUMBER}
                </a>
                .
              </p>
            </div>

            <p className="mt-10">
              <Link
                href="/about-us/"
                className="text-[15px] font-black uppercase tracking-[0.08em] text-[var(--reno-accent)] transition hover:opacity-75"
              >
                Read More About EPF Reno
              </Link>
            </p>
          </div>

          <div className="bg-[linear-gradient(180deg,#1c1d22_0%,#111216_100%)] px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-[900px]">
              <h2 className="text-center text-[clamp(2.5rem,4.7vw,4.25rem)] font-black uppercase leading-[0.95] text-white display-title">
                Get Your <span className="text-[var(--reno-accent)]">Free Quote</span> Now!
              </h2>

              <div className="mt-8 rounded-[8px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 md:p-6">
                <QuoteForm variant="showcase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
