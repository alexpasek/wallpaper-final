import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Oakville Basement Renovation | EPF Reno",
  description: "Keyword page for basement renovation in Oakville. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/oakville-basement-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for basement renovation in Oakville before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Oakville project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with clear milestone updates."
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
    "q": "How is basement renovation priced in Oakville?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does basement renovation take in Oakville?",
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
    "src": "/home/6.webp",
    "alt": "Basement Renovation project in Oakville - photo 1"
  },
  {
    "src": "/home/7.webp",
    "alt": "Basement Renovation project in Oakville - photo 2"
  },
  {
    "src": "/home/8.webp",
    "alt": "Basement Renovation project in Oakville - photo 3"
  },
  {
    "src": "/home/1.webp",
    "alt": "Basement Renovation project in Oakville - photo 4"
  },
  {
    "src": "/home/2.webp",
    "alt": "Basement Renovation project in Oakville - photo 5"
  },
  {
    "src": "/home/3.webp",
    "alt": "Basement Renovation project in Oakville - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/oakville-bathroom-renovation/",
    "label": "Oakville Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-home-renovation/",
    "label": "Oakville Home Renovation"
  },
  {
    "href": "/locations/oakville-bronte-bathroom-renovation/",
    "label": "Bronte Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-bronte-creek-bathroom-renovation/",
    "label": "Bronte Creek Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-clearview-bathroom-renovation/",
    "label": "Clearview Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-college-park-bathroom-renovation/",
    "label": "College Park Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-downtown-oakville-bathroom-renovation/",
    "label": "Downtown Oakville Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-falgarwood-bathroom-renovation/",
    "label": "Falgarwood Bathroom Renovation"
  },
  {
    "href": "/locations/oakville-glen-abbey-bathroom-renovation/",
    "label": "Glen Abbey Bathroom Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Oakville Basement Renovation"}
      description={"Keyword page for basement renovation in Oakville. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/oakville-basement-renovation/"}
      kicker={"Basement Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Basement Renovation in Oakville is planned around real site conditions and practical sequencing. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
