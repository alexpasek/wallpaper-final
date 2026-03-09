import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Wallpaper Removal | EPF Pro Services",
  description:
    "Wallpaper removal with adhesive cleanup, surface correction, and paint-ready finishing across GTA homes.",
  alternates: { canonical: "/other-services/wallpaper-removal/" },
  robots: { index: true, follow: true },
};

const highlights = [
  { title: "Controlled Removal", text: "Method selection based on substrate and adhesive condition." },
  { title: "Surface Recovery", text: "Residual adhesive cleanup and localized repairs before priming." },
  { title: "Paint-Ready Finish", text: "Final prep leaves walls ready for repainting or further renovation." },
];

const process = [
  "Site protection and wallpaper testing.",
  "Removal with adhesive control.",
  "Washdown, repairs, and skim where needed.",
  "Primer-ready finishing.",
  "Final cleanup and handover.",
];

const faqItems = [
  { q: "Can you remove multiple wallpaper layers?", a: "Yes. We test and select the right removal method based on layers and substrate condition." },
  { q: "Do you repair damaged drywall after removal?", a: "Yes. We patch and skim where needed before primer-ready handoff." },
  { q: "Is this service available with larger renovations?", a: "Yes. Wallpaper removal is frequently integrated into home and room renovation scopes." },
  { q: "Do you clean up adhesive residue fully?", a: "Yes. Adhesive washdown is part of the process before finishing." },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({ src: `/services/wallpaper/${(i % 6) + 1}.webp`, alt: `Wallpaper removal project ${i + 1}` }));

const keywordLinks = [
  { href: "/bathroom-renovation/", label: "Bathroom Renovation" },
  { href: "/basement-renovation/", label: "Basement Renovation" },
  { href: "/home-renovation/", label: "Home Renovation" },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Wallpaper Removal"
      description="Wallpaper stripping and substrate prep completed with clean process control and paint-ready finishing."
      canonicalPath="/other-services/wallpaper-removal/"
      kicker="Other Service"
      highlights={highlights}
      process={process}
      localCopy="Wallpaper removal is often the first stage before repainting, drywall upgrades, or larger interior renovation work."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
