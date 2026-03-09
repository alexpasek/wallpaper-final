import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Bathroom, Basement & Home Renovation | EPF Pro Services",
  description:
    "Renovation contractor across the GTA for bathroom renovation, basement renovation, home renovation, and finishing services.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    title: "Renovation Planning",
    text: "Detailed scope, sequence, and milestone scheduling before construction begins.",
  },
  {
    title: "Clean Execution",
    text: "Containment, floor protection, and daily cleanup on occupied home projects.",
  },
  {
    title: "Reliable Handover",
    text: "Final walkthrough, punch-list resolution, and clear closeout notes.",
  },
];

const process = [
  "Discovery call and onsite measurements.",
  "Scope definition with timeline and quote.",
  "Material planning and pre-construction setup.",
  "Build execution with daily updates.",
  "Final walkthrough and project handover.",
];

const faqItems = [
  {
    q: "What renovation services do you specialize in?",
    a: "Our core services are bathroom renovation, basement renovation, and full home renovation projects across GTA cities.",
  },
  {
    q: "Can you keep the project clean while we live at home?",
    a: "Yes. We use floor protection, contained work zones, and daily cleanup routines on every project.",
  },
  {
    q: "How do estimates work?",
    a: "We start with photos and project details, then confirm scope onsite before finalizing timeline and pricing.",
  },
  {
    q: "Do you also provide finishing services?",
    a: "Yes. Wallpaper removal, popcorn ceiling removal, drywall installation, and interior painting are available under Other Services.",
  },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({
  src: `/home/${i + 1}.webp`,
  alt: `GTA renovation project ${i + 1}`,
}));

const keywordLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/locations/", label: "Keyword Location Pages" },
  { href: "/other-services/", label: "Other Services" },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Bathroom, Basement & Home Renovation"
      description="Elegant, practical renovation solutions for GTA homes with clear scope, clean execution, and predictable timelines."
      canonicalPath="/"
      kicker="EPF Pro Services"
      highlights={highlights}
      process={process}
      localCopy="We work across Toronto, Mississauga, Oakville, Burlington, Hamilton, Milton, Etobicoke, and North York with keyword-focused local pages and unique content for each location."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
