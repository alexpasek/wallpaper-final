import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Popcorn Ceiling Removal | EPF Pro Services",
  description:
    "Popcorn ceiling removal with containment, smoothing, and finish-ready preparation for renovation projects.",
  alternates: { canonical: "/other-services/popcorn-ceiling-removal/" },
  robots: { index: true, follow: true },
};

const highlights = [
  { title: "Containment Workflow", text: "Protection and dust-control setup before ceiling work begins." },
  { title: "Smooth Finish Prep", text: "Texture removal, repairs, and skim-coat preparation where required." },
  { title: "Renovation Integration", text: "Ceiling work coordinated with lighting changes and full-room updates." },
];

const process = [
  "Protection and containment setup.",
  "Texture removal or controlled encapsulation.",
  "Repair and smoothing preparation.",
  "Prime-ready finish.",
  "Cleanup and final review.",
];

const faqItems = [
  { q: "Do you provide dust control for ceiling removal?", a: "Yes. Containment and cleanup are included in our standard workflow." },
  { q: "Can this be combined with pot-light upgrades?", a: "Yes. We coordinate ceiling finishing around fixture and cutout changes." },
  { q: "Do you paint after texture removal?", a: "Yes. We can leave paint-ready or complete final painting." },
  { q: "Is this service available across GTA locations?", a: "Yes. We provide service across all listed GTA areas." },
];

const gallery = Array.from({ length: 6 }, (_, i) => ({ src: `/services/popcorn/${(i % 6) + 1}.webp`, alt: `Popcorn ceiling removal project ${i + 1}` }));

const keywordLinks = [
  { href: "/home-renovation/", label: "Home Renovation" },
  { href: "/other-services/drywall-installation/", label: "Drywall Installation" },
  { href: "/other-services/interior-painting/", label: "Interior Painting" },
];

export default function Page() {
  return (
    <RenoLandingPage
      title="Popcorn Ceiling Removal"
      description="Ceiling texture removal and smooth finish preparation for renovation-ready interiors."
      canonicalPath="/other-services/popcorn-ceiling-removal/"
      kicker="Other Service"
      highlights={highlights}
      process={process}
      localCopy="Popcorn ceiling removal is commonly bundled with drywall correction, painting, and full-room renovation updates."
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
