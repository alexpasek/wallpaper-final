import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Toronto Basement Renovation | EPF Pro Services",
  description: "Keyword page for basement renovation in Toronto. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/toronto-basement-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for basement renovation in Toronto before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Toronto project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with clear milestone updates."
  }
];
const process = [
  "Photo review and budgeting call.",
  "Onsite validation and schedule confirmation.",
  "Procurement, staging, and prep work.",
  "Renovation execution with clear milestone tracking.",
  "Closeout inspection and maintenance guidance."
];
const faqItems = [
  {
    "q": "How is basement renovation priced in Toronto?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does basement renovation take in Toronto?",
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
    "src": "/home/6.webp",
    "alt": "Basement Renovation project in Toronto - photo 1"
  },
  {
    "src": "/home/7.webp",
    "alt": "Basement Renovation project in Toronto - photo 2"
  },
  {
    "src": "/home/8.webp",
    "alt": "Basement Renovation project in Toronto - photo 3"
  },
  {
    "src": "/home/1.webp",
    "alt": "Basement Renovation project in Toronto - photo 4"
  },
  {
    "src": "/home/2.webp",
    "alt": "Basement Renovation project in Toronto - photo 5"
  },
  {
    "src": "/home/3.webp",
    "alt": "Basement Renovation project in Toronto - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/toronto-bathroom-renovation/",
    "label": "Toronto Bathroom Renovation"
  },
  {
    "href": "/locations/toronto-home-renovation/",
    "label": "Toronto Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Toronto Basement Renovation"}
      description={"Keyword page for basement renovation in Toronto. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/toronto-basement-renovation/"}
      kicker={"Basement Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Basement Renovation in Toronto is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
