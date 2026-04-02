import RenoLandingPage from "@/components/RenoLandingPage";
import { buildBathroomGallery } from "@/data/bathroomGallery";

export const metadata = {
  title: "Bathroom Renovation | EPF Reno",
  description:
    "Bathroom renovation across GTA cities with clear scope, waterproof detailing, quality fixtures, and clean project management.",
  alternates: { canonical: "/bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const keywordLinks = [
  { href: "/locations/toronto-bathroom-renovation/", label: "Toronto Bathroom Renovation" },
  { href: "/locations/bathroom-renovation-mississauga/", label: "Mississauga Bathroom Renovation" },
  { href: "/locations/oakville-bathroom-renovation/", label: "Oakville Bathroom Renovation" },
  { href: "/locations/burlington-bathroom-renovation/", label: "Burlington Bathroom Renovation" },
  { href: "/locations/hamilton-bathroom-renovation/", label: "Hamilton Bathroom Renovation" },
  { href: "/locations/milton-bathroom-renovation/", label: "Milton Bathroom Renovation" },
  { href: "/locations/etobicoke-bathroom-renovation/", label: "Etobicoke Bathroom Renovation" },
  { href: "/locations/north-york-bathroom-renovation/", label: "North York Bathroom Renovation" },
];

const highlights = [
  {
    title: "Waterproofing First",
    text: "Shower systems, transitions, and wet-area details are planned before tile and fixture installation.",
  },
  {
    title: "Functional Layout",
    text: "We balance storage, circulation, and fixture placement for daily usability.",
  },
  {
    title: "Finish Quality",
    text: "Clean lines, stable substrates, and final fit-and-finish checks before handover.",
  },
];

const process = [
  "Measure and scope review with fixture targets.",
  "Detailed quote and finish schedule.",
  "Demo, prep, and substrate corrections.",
  "Installation and finishing sequence.",
  "Final testing, cleanup, and walkthrough.",
];

const faqItems = [
  {
    q: "Do you help with bathroom layout planning?",
    a: "Yes. We review fixture locations, storage, and practical spacing before build starts.",
  },
  {
    q: "How long does a bathroom renovation usually take?",
    a: "Timeline depends on scope and material choices, but we provide milestone dates before construction starts.",
  },
  {
    q: "Can you handle older bathroom upgrades?",
    a: "Yes. We plan for substrate correction and hidden-condition contingencies common in older homes.",
  },
  {
    q: "Do you offer location-specific pages?",
    a: "Yes. Every location keyword page is static and has unique copy tailored to that area.",
  },
];

const gallery = buildBathroomGallery("Bathroom Renovation");

export default function Page() {
  return (
    <RenoLandingPage
      title="Bathroom Renovation"
      description="From layout planning to waterproof finishing, we deliver bathroom renovations with clear scope and clean execution across GTA cities."
      canonicalPath="/bathroom-renovation/"
      kicker="Core Service"
      highlights={highlights}
      process={process}
      localCopy="Bathroom projects are coordinated for sequencing efficiency, with practical scheduling for families living in the home during renovation."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
