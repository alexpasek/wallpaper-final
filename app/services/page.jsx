import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Services | EPF Reno",
  description:
    "Bathroom remodeling, basement renovation, home renovation, and interior finishing services across GTA locations.",
  alternates: { canonical: "/services/" },
  robots: { index: true, follow: true },
};

const cards = [
  {
    href: "/bathroom-renovation/",
    title: "Bathroom Renovation",
    text: "Design, showers, vanities, tile, and complete bathroom upgrades.",
    image: "/home/1.webp",
  },
  {
    href: "/basement-renovation/",
    title: "Basement Renovation",
    text: "Functional lower-level remodeling with clean sequencing and finishing.",
    image: "/home/2.webp",
  },
  {
    href: "/home-renovation/",
    title: "Home Renovation",
    text: "Whole-home planning and staged execution with clear milestones.",
    image: "/home/3.webp",
  },
  {
    href: "/other-services/",
    title: "Other Services",
    text: "Wallpaper, popcorn, drywall, and interior painting support.",
    image: "/home/4.webp",
  },
];

export default function ServicesPage() {
  return (
    <div className="container-x py-8 md:py-10">
      <header className="reno-hero p-6 md:p-8">
        <h1 className="reno-hero-title">Our Remodeling Services</h1>
        <p className="mt-3 text-[#2f665b] text-lg max-w-3xl">
          Structured service framework for planning, building, and finishing your renovation project.
        </p>
      </header>

      <div className="relative z-10 -mt-4 md:-mt-5">
        <TrustBar />
      </div>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <article key={card.href} className="card overflow-hidden bg-white">
              <img
                src={card.image}
                alt={card.title}
                className="reno-image-pop w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-extrabold text-[#1e5a4e] tracking-tight">
                  {card.title}
                </h2>
                <p className="mt-2 text-[#4b6b62] text-lg">{card.text}</p>
                <p className="mt-4">
                  <Link href={card.href} className="btn-cta">
                    View Service
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>

        <aside className="lg:col-span-4 hero-form">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1b6959]">
            Request A Free Quote
          </h2>
          <p className="mt-2 text-[#496a61] text-lg">
            Get fast estimate guidance for your service scope.
          </p>
          <QuoteForm />
        </aside>
      </section>
    </div>
  );
}
