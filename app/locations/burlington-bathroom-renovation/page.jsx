import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Burlington Bathroom Renovation | EPF Pro Services",
  description: "Keyword page for bathroom renovation in Burlington. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/burlington-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in Burlington before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Burlington project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with a written scope and timeline."
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
    "q": "How is bathroom renovation priced in Burlington?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does bathroom renovation take in Burlington?",
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
    "src": "/home/4.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 1"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 2"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 3"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 4"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 5"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in Burlington - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/burlington-basement-renovation/",
    "label": "Burlington Basement Renovation"
  },
  {
    "href": "/locations/burlington-home-renovation/",
    "label": "Burlington Home Renovation"
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
      title={"Burlington Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in Burlington. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/burlington-bathroom-renovation/"}
      kicker={"Bathroom Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in Burlington is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
