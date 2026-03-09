import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Roseland Burlington Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Roseland, Burlington. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/burlington-roseland-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Roseland, Burlington before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Roseland, Burlington project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope while keeping the site clean each day."
  }
];
const process = [
  "Initial estimate and site measurement.",
  "Fixed scope definition with permit/trade coordination.",
  "Protection setup and selective demolition.",
  "Construction, finishing, and quality control checks.",
  "Client walkthrough with completion notes."
];
const faqItems = [
  {
    "q": "How is bathroom renovation priced in Roseland, Burlington?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity while keeping the site clean each day."
  },
  {
    "q": "How long does bathroom renovation take in Roseland, Burlington?",
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
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 1"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 2"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 3"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 4"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 5"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Roseland-Burlington - photo 6"
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
      title={"Roseland Burlington Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Roseland, Burlington. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/burlington-roseland-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Roseland, Burlington is planned around real site conditions and practical sequencing. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
