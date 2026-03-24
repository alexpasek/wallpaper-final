import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "Mississauga Home Renovation | EPF Reno",
  description: "Keyword page for home renovation in Mississauga. Unique local scope, process, pricing factors, and quote support.",
  alternates: { canonical: "/locations/mississauga-home-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for home renovation in Mississauga before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every Mississauga project."
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
    "q": "How is home renovation priced in Mississauga?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with a written scope and timeline."
  },
  {
    "q": "How long does home renovation take in Mississauga?",
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
    "alt": "Home Renovation project in Mississauga - photo 1"
  },
  {
    "src": "/home/1.webp",
    "alt": "Home Renovation project in Mississauga - photo 2"
  },
  {
    "src": "/home/2.webp",
    "alt": "Home Renovation project in Mississauga - photo 3"
  },
  {
    "src": "/home/3.webp",
    "alt": "Home Renovation project in Mississauga - photo 4"
  },
  {
    "src": "/home/4.webp",
    "alt": "Home Renovation project in Mississauga - photo 5"
  },
  {
    "src": "/home/5.webp",
    "alt": "Home Renovation project in Mississauga - photo 6"
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
    "href": "/locations/mississauga-applewood-bathroom-renovation/",
    "label": "Applewood Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-churchill-meadows-bathroom-renovation/",
    "label": "Churchill Meadows Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-city-centre-bathroom-renovation/",
    "label": "City Centre Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-clarkson-bathroom-renovation/",
    "label": "Clarkson Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-cooksville-bathroom-renovation/",
    "label": "Cooksville Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-east-credit-bathroom-renovation/",
    "label": "East Credit Bathroom Renovation"
  },
  {
    "href": "/locations/mississauga-erin-mills-bathroom-renovation/",
    "label": "Erin Mills Bathroom Renovation"
  }
];

export default function Page() {
  return (
    <RenoLandingPage
      title={"Mississauga Home Renovation"}
      description={"Keyword page for home renovation in Mississauga. Unique local scope, process, pricing factors, and quote support."}
      canonicalPath={"/locations/mississauga-home-renovation/"}
      kicker={"Home Renovation Contractor"}
      highlights={highlights}
      process={process}
      localCopy={"Home Renovation in Mississauga is planned around real site conditions and practical sequencing. Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
