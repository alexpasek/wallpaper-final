import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Etobicoke Basement Renovation | EPF Pro Services",
  description: "Keyword page for basement renovation in Etobicoke. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/etobicoke-basement-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for basement renovation in Etobicoke before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Etobicoke project."
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
    "q": "How is basement renovation priced in Etobicoke?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does basement renovation take in Etobicoke?",
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
    "alt": "Basement Renovation project in Etobicoke - photo 1"
  },
  {
    "src": "/home/3.webp",
    "alt": "Basement Renovation project in Etobicoke - photo 2"
  },
  {
    "src": "/home/4.webp",
    "alt": "Basement Renovation project in Etobicoke - photo 3"
  },
  {
    "src": "/home/5.webp",
    "alt": "Basement Renovation project in Etobicoke - photo 4"
  },
  {
    "src": "/home/6.webp",
    "alt": "Basement Renovation project in Etobicoke - photo 5"
  },
  {
    "src": "/home/7.webp",
    "alt": "Basement Renovation project in Etobicoke - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/etobicoke-bathroom-renovation/",
    "label": "Etobicoke Bathroom Renovation"
  },
  {
    "href": "/locations/etobicoke-home-renovation/",
    "label": "Etobicoke Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Etobicoke Basement Renovation"}
      description={"Keyword page for basement renovation in Etobicoke. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/etobicoke-basement-renovation/"}
      kicker={"Basement Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Basement Renovation in Etobicoke is planned around real site conditions and practical sequencing. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
