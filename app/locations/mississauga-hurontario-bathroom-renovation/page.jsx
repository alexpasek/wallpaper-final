import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Hurontario Mississauga Bathroom Renovation | EPF Reno",
  description: "Keyword page for bathroom renovation in Hurontario, Mississauga. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/mississauga-hurontario-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Hurontario, Mississauga before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Hurontario, Mississauga project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope while keeping the site clean each day."
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
    "q": "How is bathroom renovation priced in Hurontario, Mississauga?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity while keeping the site clean each day."
  },
  {
    "q": "How long does bathroom renovation take in Hurontario, Mississauga?",
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
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 1"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 2"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 3"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 4"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 5"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Hurontario-Mississauga - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/bathroom-renovation-mississauga/",
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
      title={"Hurontario Mississauga Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Hurontario, Mississauga. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/mississauga-hurontario-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Hurontario, Mississauga is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
