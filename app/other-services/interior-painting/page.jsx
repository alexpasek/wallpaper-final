import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Interior Painting | EPF Pro Services",
  description:
    "Interior painting for renovation projects with prep discipline, clean lines, and durable finish systems.",
  alternates: { canonical: "/other-services/interior-painting/" },
  robots: { index: true, follow: true },
};

const highlights = [
  { title: "Prep Discipline", text: "Sanding, patching, and masking are completed before finish coats." },
  { title: "Consistent Finish", text: "Product and sheen choices are aligned to room use and lighting." },
  { title: "Final Detailing", text: "Cut lines, touchups, and closeout checks are part of handover." },
];

const process = [
  "Scope and substrate review.",
  "Protection and preparation.",
  "Primer and coating sequence.",
  "Detail pass and consistency checks.",
  "Final cleanup and walkthrough.",
];

const faqItems = [
  { q: "Do you paint after renovation finishing?", a: "Yes. Interior painting is commonly the final stage after drywall and surface prep." },
  { q: "Can you match existing color systems?", a: "Yes. We can match or re-specify finishes based on desired durability and look." },
  { q: "Do you handle ceilings and trim as well?", a: "Yes. Walls, ceilings, trim, and doors are included as needed." },
  { q: "Is this available for all GTA service areas?", a: "Yes. Interior painting support is available throughout our listed locations." },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({ src: `/services/painting/${(i % 6) + 1}.webp`, alt: `Interior painting project ${i + 1}` }));

const keywordLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/other-services/wallpaper-removal/", label: "Wallpaper Removal" },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Interior Painting"
      description="Interior painting delivered with proper prep and finish coordination for renovation-ready results."
      canonicalPath="/other-services/interior-painting/"
      kicker="Other Service"
      highlights={highlights}
      process={process}
      localCopy="Painting is planned around project completion windows so rooms are delivered clean, consistent, and ready for use."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
