import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Iroquois Ridge North Oakville Bathroom Renovation | EPF Reno",
  description: "Keyword page for bathroom renovation in Iroquois Ridge North, Oakville. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/oakville-iroquois-ridge-north-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Iroquois Ridge North, Oakville before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Iroquois Ridge North, Oakville project."
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
    "q": "How is bathroom renovation priced in Iroquois Ridge North, Oakville?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity while keeping the site clean each day."
  },
  {
    "q": "How long does bathroom renovation take in Iroquois Ridge North, Oakville?",
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
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 1"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 2"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 3"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 4"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 5"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Iroquois Ridge North-Oakville - photo 6"
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
      title={"Iroquois Ridge North Oakville Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Iroquois Ridge North, Oakville. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/oakville-iroquois-ridge-north-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Iroquois Ridge North, Oakville is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
