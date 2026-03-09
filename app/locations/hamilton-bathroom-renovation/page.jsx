import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Hamilton Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Hamilton. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/hamilton-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Hamilton before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Hamilton project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with clear milestone updates."
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
    "q": "How is bathroom renovation priced in Hamilton?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does bathroom renovation take in Hamilton?",
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
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 1"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 2"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 3"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 4"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 5"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Hamilton - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/hamilton-basement-renovation/",
    "label": "Hamilton Basement Renovation"
  },
  {
    "href": "/locations/hamilton-home-renovation/",
    "label": "Hamilton Home Renovation"
  },
  {
    "href": "/locations/hamilton-ancaster-bathroom-renovation/",
    "label": "Ancaster Bathroom Renovation"
  },
  {
    "href": "/locations/hamilton-dundas-bathroom-renovation/",
    "label": "Dundas Bathroom Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Hamilton Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Hamilton. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/hamilton-bathroom-renovation/"}
      kicker={"Bathroom Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Hamilton is planned around real site conditions and practical sequencing. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
