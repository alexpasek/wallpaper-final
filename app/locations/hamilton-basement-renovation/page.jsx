import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Hamilton Basement Renovation | EPF Reno",
  description: "Keyword page for basement renovation in Hamilton. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/hamilton-basement-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for basement renovation in Hamilton before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Hamilton project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with transparent pricing factors."
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
    "q": "How is basement renovation priced in Hamilton?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does basement renovation take in Hamilton?",
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
    "src": "/home/1.webp",
    "alt": "Basement Renovation project in Hamilton - photo 1"
  },
  {
    "src": "/home/2.webp",
    "alt": "Basement Renovation project in Hamilton - photo 2"
  },
  {
    "src": "/home/3.webp",
    "alt": "Basement Renovation project in Hamilton - photo 3"
  },
  {
    "src": "/home/4.webp",
    "alt": "Basement Renovation project in Hamilton - photo 4"
  },
  {
    "src": "/home/5.webp",
    "alt": "Basement Renovation project in Hamilton - photo 5"
  },
  {
    "src": "/home/6.webp",
    "alt": "Basement Renovation project in Hamilton - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/hamilton-bathroom-renovation/",
    "label": "Hamilton Bathroom Renovation"
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
      title={"Hamilton Basement Renovation"}
      description={"Keyword page for basement renovation in Hamilton. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/hamilton-basement-renovation/"}
      kicker={"Basement Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Basement Renovation in Hamilton is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
