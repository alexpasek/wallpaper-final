import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Mineola Mississauga Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Mineola, Mississauga. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/mississauga-mineola-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Mineola, Mississauga before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Mineola, Mississauga project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with transparent pricing factors."
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
    "q": "How is bathroom renovation priced in Mineola, Mississauga?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does bathroom renovation take in Mineola, Mississauga?",
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
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 1"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 2"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 3"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 4"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 5"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Mineola-Mississauga - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/mississauga-bathroom-renovation/",
    "label": "Mississauga Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-basement-renovation/",
    "label": "Mississauga Basement Renovation"
  },
  {
    "href": "/locations/mississauga-home-renovation/",
    "label": "Mississauga Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Mineola Mississauga Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Mineola, Mississauga. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/mississauga-mineola-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Mineola, Mississauga is planned around real site conditions and practical sequencing. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
