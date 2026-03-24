import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Toronto Home Renovation | EPF Reno",
  description: "Keyword page for home renovation in Toronto. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/toronto-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in Toronto before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Toronto project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with clear milestone updates."
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
    "q": "How is home renovation priced in Toronto?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does home renovation take in Toronto?",
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
    "alt": "Home Renovation project in Toronto - photo 1"
  },
  {
    "src": "/home/7.webp",
    "alt": "Home Renovation project in Toronto - photo 2"
  },
  {
    "src": "/home/8.webp",
    "alt": "Home Renovation project in Toronto - photo 3"
  },
  {
    "src": "/home/1.webp",
    "alt": "Home Renovation project in Toronto - photo 4"
  },
  {
    "src": "/home/2.webp",
    "alt": "Home Renovation project in Toronto - photo 5"
  },
  {
    "src": "/home/3.webp",
    "alt": "Home Renovation project in Toronto - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/toronto-bathroom-renovation/",
    "label": "Toronto Bathroom Renovation"
  },
  {
    "href": "/locations/toronto-basement-renovation/",
    "label": "Toronto Basement Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Toronto Home Renovation"}
      description={"Keyword page for home renovation in Toronto. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/toronto-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in Toronto is planned around real site conditions and practical sequencing. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
