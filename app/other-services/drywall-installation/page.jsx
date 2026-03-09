import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Drywall Installation | EPF Pro Services",
  description:
    "Drywall installation and repair services for renovation projects, including finishing prep and paint-ready results.",
  alternates: { canonical: "/other-services/drywall-installation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  { title: "Install + Repair", text: "New board installation and patch work coordinated to renovation scope." },
  { title: "Finish Preparation", text: "Joint treatment, correction, and surface refinement before paint." },
  { title: "Project Alignment", text: "Drywall sequencing aligned with plumbing, electrical, and finishing stages." },
];

const process = [
  "Assessment and measurement.",
  "Board installation and patch integration.",
  "Joint finishing and refinement.",
  "Primer-ready prep.",
  "Final cleanup and inspection.",
];

const faqItems = [
  { q: "Do you handle drywall for renovation additions?", a: "Yes. We provide drywall installation for remodels, reconfigurations, and repairs." },
  { q: "Can you match existing surfaces?", a: "Yes. We blend repairs and transitions to maintain visual consistency." },
  { q: "Is drywall included with bathroom and basement projects?", a: "Yes. It is often part of full-scope renovation work." },
  { q: "Do you leave the surface paint-ready?", a: "Yes. Final prep is completed for paint-ready handoff." },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({ src: `/services/drywall/${(i % 6) + 1}.webp`, alt: `Drywall installation project ${i + 1}` }));

const keywordLinks = [
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/other-services/interior-painting/", label: "Interior Painting" },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Drywall Installation"
      description="Drywall installation, patching, and finish preparation delivered as standalone or integrated renovation scope."
      canonicalPath="/other-services/drywall-installation/"
      kicker="Other Service"
      highlights={highlights}
      process={process}
      localCopy="Drywall work is sequenced to keep trade handoffs clean and help projects move smoothly to painting and final detailing."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
