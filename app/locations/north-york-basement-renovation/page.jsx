import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "North York Basement Renovation | EPF Reno",
  description: "Keyword page for basement renovation in North York. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/north-york-basement-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for basement renovation in North York before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every North York project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with a written scope and timeline."
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
    "q": "How is basement renovation priced in North York?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does basement renovation take in North York?",
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
    "alt": "Basement Renovation project in North York - photo 1"
  },
  {
    "src": "/home/8.webp",
    "alt": "Basement Renovation project in North York - photo 2"
  },
  {
    "src": "/home/1.webp",
    "alt": "Basement Renovation project in North York - photo 3"
  },
  {
    "src": "/home/2.webp",
    "alt": "Basement Renovation project in North York - photo 4"
  },
  {
    "src": "/home/3.webp",
    "alt": "Basement Renovation project in North York - photo 5"
  },
  {
    "src": "/home/4.webp",
    "alt": "Basement Renovation project in North York - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/north-york-bathroom-renovation/",
    "label": "North York Bathroom Renovation"
  },
  {
    "href": "/locations/north-york-home-renovation/",
    "label": "North York Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"North York Basement Renovation"}
      description={"Keyword page for basement renovation in North York. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/north-york-basement-renovation/"}
      kicker={"Basement Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Basement Renovation in North York is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
