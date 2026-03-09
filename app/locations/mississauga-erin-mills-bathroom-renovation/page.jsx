import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Erin Mills Mississauga Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Erin Mills, Mississauga. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/mississauga-erin-mills-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Erin Mills, Mississauga before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Erin Mills, Mississauga project."
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
    "q": "How is bathroom renovation priced in Erin Mills, Mississauga?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does bathroom renovation take in Erin Mills, Mississauga?",
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
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 1"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 2"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 3"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 4"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 5"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Erin Mills-Mississauga - photo 6"
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
      title={"Erin Mills Mississauga Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Erin Mills, Mississauga. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/mississauga-erin-mills-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Erin Mills, Mississauga is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
