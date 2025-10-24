import Link from "next/link";
import { cities } from "@/data/cities";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Service Areas (GTA)",
  description:
    "Find popcorn ceiling removal service areas across the GTA. Dust-contained, Level 5 skim-coat, prime & paint.",
  alternates: { canonical: "/service-areas/popcorn" },
  openGraph: {
    title: "Popcorn Ceiling Removal — Service Areas (GTA)",
    description:
      "Choose your city to see process, photos, and get a fast quote for popcorn ceiling removal.",
    url: "/service-areas/popcorn",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="container-x py-10">
      <header className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Popcorn Ceiling Removal — Service Areas
        </h1>
        <p className="mt-3 text-gray-700">
          Choose your city to see local details, process, and a fast quote.
        </p>
      </header>

      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {cities.map((c) => (
          <Link
            key={c.slug}
            href={`/service-areas/popcorn/${c.slug}/`}
            className="pill"
          >
            {c.name}
          </Link>
        ))}
      </section>
    </div>
  );
}
