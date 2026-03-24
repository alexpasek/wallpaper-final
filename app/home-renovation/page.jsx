import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Home Renovation | EPF Reno",
  description:
    "Full home renovation services across GTA cities with practical planning, phased execution, and quality finishing.",
  alternates: { canonical: "/home-renovation/" },
  robots: { index: true, follow: true },
};

const keywordLinks = [
  { href: "/locations/toronto-home-renovation/", label: "Toronto Home Renovation" },
  { href: "/locations/mississauga-home-renovation/", label: "Mississauga Home Renovation" },
  { href: "/locations/oakville-home-renovation/", label: "Oakville Home Renovation" },
  { href: "/locations/burlington-home-renovation/", label: "Burlington Home Renovation" },
  { href: "/locations/hamilton-home-renovation/", label: "Hamilton Home Renovation" },
  { href: "/locations/milton-home-renovation/", label: "Milton Home Renovation" },
  { href: "/locations/etobicoke-home-renovation/", label: "Etobicoke Home Renovation" },
  { href: "/locations/north-york-home-renovation/", label: "North York Home Renovation" },
];

const highlights = [
  {
    title: "Whole-Home Scope",
    text: "Kitchen-adjacent, bath-adjacent, and general interior upgrades are sequenced under one plan.",
  },
  {
    title: "Phased Execution",
    text: "Work stages are scheduled to keep the home safe and manageable through renovation.",
  },
  {
    title: "Finish Coordination",
    text: "Drywall, paint, trim, and final detail work are aligned for consistent quality.",
  },
];

const process = [
  "Project goals, scope priorities, and measurement.",
  "Comprehensive quoting and schedule mapping.",
  "Pre-construction setup and protections.",
  "Construction and finishing by staged zones.",
  "Final quality review and turnover.",
];

const faqItems = [
  {
    q: "What is included in a home renovation project?",
    a: "Scope can include bathrooms, basement sections, drywall/paint upgrades, and layout improvements based on your priorities.",
  },
  {
    q: "Can work be phased by floor or zone?",
    a: "Yes. We can sequence the project to reduce disruption and keep key areas accessible.",
  },
  {
    q: "Do you provide written scope and timeline?",
    a: "Yes. Every project includes documented deliverables and milestone scheduling.",
  },
  {
    q: "Do you still provide wallpaper and popcorn removal?",
    a: "Yes. Those are available under Other Services with dedicated service pages.",
  },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({
  src: `/home/${((i + 6) % 8) + 1}.webp`,
  alt: `Home renovation project ${i + 1}`,
}));

export default function Page() {
  return (
    <RenoLandingPage
      title="Home Renovation"
      description="End-to-end home renovation planning and execution for GTA properties with transparent scope and reliable project control."
      canonicalPath="/home-renovation/"
      kicker="Core Service"
      highlights={highlights}
      process={process}
      localCopy="Whole-home renovations require sequencing discipline. We plan by work zone, coordinate dependencies, and keep communication clear from start to handover."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
