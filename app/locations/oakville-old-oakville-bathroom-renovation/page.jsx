import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Old Oakville Oakville Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Old Oakville, Oakville. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/oakville-old-oakville-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Old Oakville, Oakville before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Old Oakville, Oakville project."
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
    "q": "How is bathroom renovation priced in Old Oakville, Oakville?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does bathroom renovation take in Old Oakville, Oakville?",
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
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 1"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 2"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 3"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 4"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 5"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Old Oakville-Oakville - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/oakville-bathroom-renovation/",
    "label": "Oakville Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-basement-renovation/",
    "label": "Oakville Basement Renovation"
  },
  {
    "href": "/locations/oakville-home-renovation/",
    "label": "Oakville Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Old Oakville Oakville Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Old Oakville, Oakville. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/oakville-old-oakville-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Old Oakville, Oakville is planned around real site conditions and practical sequencing. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
