import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "North York Home Renovation | EPF Reno",
  description: "Keyword page for home renovation in North York. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/north-york-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in North York before construction starts, so decisions stay controlled."
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
  "Photo review and budgeting call.",
  "Onsite validation and schedule confirmation.",
  "Procurement, staging, and prep work.",
  "Renovation execution with clear milestone tracking.",
  "Closeout inspection and maintenance guidance."
];
const faqItems = [
  {
    "q": "How is home renovation priced in North York?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does home renovation take in North York?",
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
    "alt": "Home Renovation project in North York - photo 1"
  },
  {
    "src": "/home/8.webp",
    "alt": "Home Renovation project in North York - photo 2"
  },
  {
    "src": "/home/1.webp",
    "alt": "Home Renovation project in North York - photo 3"
  },
  {
    "src": "/home/2.webp",
    "alt": "Home Renovation project in North York - photo 4"
  },
  {
    "src": "/home/3.webp",
    "alt": "Home Renovation project in North York - photo 5"
  },
  {
    "src": "/home/4.webp",
    "alt": "Home Renovation project in North York - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/north-york-bathroom-renovation/",
    "label": "North York Bathroom Renovation"
  },
  {
    "href": "/locations/north-york-basement-renovation/",
    "label": "North York Basement Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"North York Home Renovation"}
      description={"Keyword page for home renovation in North York. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/north-york-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in North York is planned around real site conditions and practical sequencing. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
