import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Burlington Home Renovation | EPF Reno",
  description: "Keyword page for home renovation in Burlington. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/burlington-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in Burlington before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Burlington project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope while keeping the site clean each day."
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
    "q": "How is home renovation priced in Burlington?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity while keeping the site clean each day."
  },
  {
    "q": "How long does home renovation take in Burlington?",
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
    "alt": "Home Renovation project in Burlington - photo 1"
  },
  {
    "src": "/home/4.webp",
    "alt": "Home Renovation project in Burlington - photo 2"
  },
  {
    "src": "/home/5.webp",
    "alt": "Home Renovation project in Burlington - photo 3"
  },
  {
    "src": "/home/6.webp",
    "alt": "Home Renovation project in Burlington - photo 4"
  },
  {
    "src": "/home/7.webp",
    "alt": "Home Renovation project in Burlington - photo 5"
  },
  {
    "src": "/home/8.webp",
    "alt": "Home Renovation project in Burlington - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/burlington-bathroom-renovation/",
    "label": "Burlington Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-basement-renovation/",
    "label": "Burlington Basement Renovation"
  },
  {
    "href": "/locations/burlington-aldershot-bathroom-renovation/",
    "label": "Aldershot Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-alton-village-bathroom-renovation/",
    "label": "Alton Village Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-brant-bathroom-renovation/",
    "label": "Brant Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-brant-hills-bathroom-renovation/",
    "label": "Brant Hills Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-elizabeth-gardens-bathroom-renovation/",
    "label": "Elizabeth Gardens Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-headon-forest-bathroom-renovation/",
    "label": "Headon Forest Bathroom Renovation"
  },
  {
    "href": "/locations/burlington-millcroft-bathroom-renovation/",
    "label": "Millcroft Bathroom Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Burlington Home Renovation"}
      description={"Keyword page for home renovation in Burlington. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/burlington-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in Burlington is planned around real site conditions and practical sequencing. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Condo and townhome projects require strict protection, noise windows, and clean corridor protocols. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
