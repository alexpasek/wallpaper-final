import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: "City Centre Mississauga Bathroom Renovation | EPF Reno",
  description: "Keyword page for bathroom renovation in City Centre, Mississauga. Unique local process notes, scope guidance, and renovation FAQ.",
  alternates: { canonical: "/locations/mississauga-city-centre-bathroom-renovation/" },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    "title": "Scope Clarity",
    "text": "We define deliverables for bathroom renovation in City Centre, Mississauga before construction starts, so decisions stay controlled."
  },
  {
    "title": "Site Protection",
    "text": "Dust control, floor protection, and daily cleanup are standard on every City Centre, Mississauga project."
  },
  {
    "title": "Quality Handover",
    "text": "Final checks are completed against scope with transparent pricing factors."
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
    "q": "How is bathroom renovation priced in City Centre, Mississauga?",
    "a": "Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity with transparent pricing factors."
  },
  {
    "q": "How long does bathroom renovation take in City Centre, Mississauga?",
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
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 1"
  },
  {
    "src": "/home/5.webp",
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 2"
  },
  {
    "src": "/home/6.webp",
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 3"
  },
  {
    "src": "/home/7.webp",
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 4"
  },
  {
    "src": "/home/8.webp",
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 5"
  },
  {
    "src": "/home/1.webp",
    "alt": "Bathroom Renovation project in City Centre-Mississauga - photo 6"
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
      title={"City Centre Mississauga Bathroom Renovation"}
      description={"Keyword page for bathroom renovation in City Centre, Mississauga. Unique local process notes, scope guidance, and renovation FAQ."}
      canonicalPath={"/locations/mississauga-city-centre-bathroom-renovation/"}
      kicker={"Neighborhood Bathroom Renovation"}
      highlights={highlights}
      process={process}
      localCopy={"Bathroom Renovation in City Centre, Mississauga is planned around real site conditions and practical sequencing. Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional. Open-concept layouts need precise leveling and finish checks under natural light before final handover. Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough."}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
