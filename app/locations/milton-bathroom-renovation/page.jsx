import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Milton Bathroom Renovation | EPF Reno",
  description: "Keyword page for bathroom renovation in Milton. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/milton-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Milton before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Milton project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with transparent pricing factors."
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
    "q": "How is bathroom renovation priced in Milton?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does bathroom renovation take in Milton?",
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
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Milton - photo 1"
  },
  {
    "src": "/home/2.webp",
    "alt": "Bathroom Renovation project in Milton - photo 2"
  },
  {
    "src": "/home/3.webp",
    "alt": "Bathroom Renovation project in Milton - photo 3"
  },
  {
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Milton - photo 4"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Milton - photo 5"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Milton - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/milton-basement-renovation/",
    "label": "Milton Basement Renovation"
  },
  {
    "href": "/locations/milton-home-renovation/",
    "label": "Milton Home Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Milton Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Milton. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/milton-bathroom-renovation/"}
      kicker={"Bathroom Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Milton is planned around real site conditions and practical sequencing. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
