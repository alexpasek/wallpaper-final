import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Milton Home Renovation | EPF Reno",
  description: "Keyword page for home renovation in Milton. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/milton-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in Milton before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Milton project."
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
    "q": "How is home renovation priced in Milton?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does home renovation take in Milton?",
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
    "src": "/home/8.webp",
    "alt": "Home Renovation project in Milton - photo 1"
  },
  {
    "src": "/home/1.webp",
    "alt": "Home Renovation project in Milton - photo 2"
  },
  {
    "src": "/home/2.webp",
    "alt": "Home Renovation project in Milton - photo 3"
  },
  {
    "src": "/home/3.webp",
    "alt": "Home Renovation project in Milton - photo 4"
  },
  {
    "src": "/home/4.webp",
    "alt": "Home Renovation project in Milton - photo 5"
  },
  {
    "src": "/home/5.webp",
    "alt": "Home Renovation project in Milton - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/milton-bathroom-renovation/",
    "label": "Milton Bathroom Renovation"
  },
  {
    "href": "/locations/milton-basement-renovation/",
    "label": "Milton Basement Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Milton Home Renovation"}
      description={"Keyword page for home renovation in Milton. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/milton-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in Milton is planned around real site conditions and practical sequencing. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
