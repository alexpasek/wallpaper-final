import { notFound } from "next/navigation";

import {
  MississaugaBathroomHubPage,
  MississaugaBathroomSupportPage,
} from "@/components/MississaugaBathroomPage";
import {
  MISSISSAUGA_BATHROOM_HUB,
  MISSISSAUGA_SUPPORT_PAGES,
  getMississaugaSupportPage,
} from "@/data/mississaugaBathroomCluster";

export function generateStaticParams() {
  return Object.keys(MISSISSAUGA_SUPPORT_PAGES).map((slug) => ({
    slug: [slug],
  }));
}

export function generateMetadata({ params }) {
  const slug = params.slug?.[0];
  const page = slug ? getMississaugaSupportPage(slug) : MISSISSAUGA_BATHROOM_HUB;

  if (!page || (params.slug && params.slug.length > 1)) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: page.path },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }) {
  if (params.slug && params.slug.length > 1) {
    notFound();
  }

  const slug = params.slug?.[0];

  if (!slug) {
    return <MississaugaBathroomHubPage />;
  }

  const page = getMississaugaSupportPage(slug);

  if (!page) {
    notFound();
  }

  return <MississaugaBathroomSupportPage page={page} />;
}
