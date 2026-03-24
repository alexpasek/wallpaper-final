import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Millcroft Burlington Bathroom Renovation | EPF Reno",
  description: "Keyword page for bathroom renovation in Millcroft, Burlington. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/burlington-millcroft-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Millcroft, Burlington before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Millcroft, Burlington project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with transparent pricing factors."
  }
];
const process = [
  "Discovery call, photos, and onsite scope review.",
  "Detailed quote with exclusions, timeline, and milestone schedule.",
  "Material confirmation and pre-construction checklist.",
  "Build phase with daily updates and site protection.",
  "Final walkthrough, deficiency fixes, and handover package."
];
const faqItems = [
  {
    "q": "How is bathroom renovation priced in Millcroft, Burlington?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does bathroom renovation take in Millcroft, Burlington?",
    "a": "Most timelines are set after onsite verification. We publish start-to-finish milestones and update progress daily."
  },
  {
    "q": "Do you handle permits and trade coordination?",
    "a": "When required, we coordinate permitting and licensed trade sequencing as part of project planning."
  },
  {
    "q": "Can I live in the home during the renovation?",
    "a": "In many cases yes. We plan phased access, containment, and cleanup to reduce disruption throughout the job."
  }
];
const gallery = [
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 1"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 2"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 3"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 4"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 5"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Millcroft-Burlington - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/burlington-bathroom-renovation/",
    "label": "Burlington Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-basement-renovation/",
    "label": "Burlington Basement Renovation"
  },
  {
    "href": "/locations/burlington-home-renovation/",
    "label": "Burlington Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Millcroft Burlington Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Millcroft, Burlington. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/burlington-millcroft-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Millcroft, Burlington is planned around real site conditions and practical sequencing. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
