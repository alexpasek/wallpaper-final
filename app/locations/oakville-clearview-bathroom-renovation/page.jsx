import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Clearview Oakville Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Clearview, Oakville. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/oakville-clearview-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Clearview, Oakville before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Clearview, Oakville project."
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
    "q": "How is bathroom renovation priced in Clearview, Oakville?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does bathroom renovation take in Clearview, Oakville?",
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
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 1"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 2"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 3"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 4"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 5"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Clearview-Oakville - photo 6"
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
      title={"Clearview Oakville Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Clearview, Oakville. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/oakville-clearview-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Clearview, Oakville is planned around real site conditions and practical sequencing. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
