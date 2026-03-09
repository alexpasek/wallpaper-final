import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Etobicoke Home Renovation | EPF Pro Services",
  description: "Keyword page for home renovation in Etobicoke. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/etobicoke-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in Etobicoke before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Etobicoke project."
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
    "q": "How is home renovation priced in Etobicoke?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with clear milestone updates."
  },
  {
    "q": "How long does home renovation take in Etobicoke?",
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
    "alt": "Home Renovation project in Etobicoke - photo 1"
  },
  {
    "src": "/home/3.webp",
    "alt": "Home Renovation project in Etobicoke - photo 2"
  },
  {
    "src": "/home/4.webp",
    "alt": "Home Renovation project in Etobicoke - photo 3"
  },
  {
    "src": "/home/5.webp",
    "alt": "Home Renovation project in Etobicoke - photo 4"
  },
  {
    "src": "/home/6.webp",
    "alt": "Home Renovation project in Etobicoke - photo 5"
  },
  {
    "src": "/home/7.webp",
    "alt": "Home Renovation project in Etobicoke - photo 6"
  }
];
const keywordLinks = [
  {
    "href": "/locations/etobicoke-bathroom-renovation/",
    "label": "Etobicoke Bathroom Renovation"
  },
  {
    "href": "/locations/etobicoke-basement-renovation/",
    "label": "Etobicoke Basement Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Etobicoke Home Renovation"}
      description={"Keyword page for home renovation in Etobicoke. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/etobicoke-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in Etobicoke is planned around real site conditions and practical sequencing. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
