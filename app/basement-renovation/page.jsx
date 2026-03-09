import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Basement Renovation | EPF Pro Services",
  description:
    "Basement renovation in GTA homes with moisture-aware planning, practical layouts, and full finishing coordination.",
  alternates: { canonical: "/basement-renovation/" },
  robots: { index: true, follow: true },
};

const keywordLinks = [
  { href: "/locations/toronto-basement-renovation/", label: "Toronto Basement Renovation" },
  { href: "/locations/mississauga-basement-renovation/", label: "Mississauga Basement Renovation" },
  { href: "/locations/oakville-basement-renovation/", label: "Oakville Basement Renovation" },
  { href: "/locations/burlington-basement-renovation/", label: "Burlington Basement Renovation" },
  { href: "/locations/hamilton-basement-renovation/", label: "Hamilton Basement Renovation" },
  { href: "/locations/milton-basement-renovation/", label: "Milton Basement Renovation" },
  { href: "/locations/etobicoke-basement-renovation/", label: "Etobicoke Basement Renovation" },
  { href: "/locations/north-york-basement-renovation/", label: "North York Basement Renovation" },
];

const highlights = [
  {
    title: "Moisture-Aware Scope",
    text: "Basement finishes are planned around airflow, insulation approach, and moisture risk controls.",
  },
  {
    title: "Usable Layout",
    text: "We prioritize circulation, storage, utility access, and lighting in lower-level spaces.",
  },
  {
    title: "Complete Finishing",
    text: "From framing coordination to drywall and paint-ready handover, sequencing stays controlled.",
  },
];

const process = [
  "Site review and existing-condition checks.",
  "Scope confirmation with layout priorities.",
  "Preparation and construction staging.",
  "Framing, mechanical coordination, and finishing.",
  "Final inspection and completion walkthrough.",
];

const faqItems = [
  {
    q: "Can you renovate basements in older homes?",
    a: "Yes. We evaluate existing conditions first and adapt scope for practical long-term performance.",
  },
  {
    q: "Do you build legal secondary units?",
    a: "When applicable, we can coordinate scope around permit and code requirements.",
  },
  {
    q: "How do you keep dust controlled in basement projects?",
    a: "We use containment, protected pathways, and daily cleanup routines.",
  },
  {
    q: "Are your local pages static with unique content?",
    a: "Yes. Location pages are manually generated static routes with unique keyword-focused copy.",
  },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({
  src: `/home/${((i + 4) % 8) + 1}.webp`,
  alt: `Basement renovation project ${i + 1}`,
}));

export default function Page() {
  return (
    <RenoLandingPage
      title="Basement Renovation"
      description="Functional and finish-focused basement renovations with clear milestones, clean execution, and reliable handover."
      canonicalPath="/basement-renovation/"
      kicker="Core Service"
      highlights={highlights}
      process={process}
      localCopy="Basement renovations are scheduled to reduce disruption, with clear communication around access, utilities, and staging in lived-in homes."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
