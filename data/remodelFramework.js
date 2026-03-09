export const TRUST_ITEMS = [
  {
    title: "Free Same-Day Quote",
    text: "Fast estimate guidance based on your scope and timeline.",
    icon: "💬",
  },
  {
    title: "Fully Licensed & Insured",
    text: "Professional crews with documented coverage and clean process control.",
    icon: "🛡️",
  },
  {
    title: "Top Rated by Customers",
    text: "Consistent service quality, clear communication, and reliable handover.",
    icon: "⭐",
  },
];

export const SERVICE_LIBRARY = {
  bathroom: [
    {
      title: "Custom Design",
      text: "Layouts and finish plans aligned to how your household uses the space.",
      image: "/home/1.webp",
    },
    {
      title: "Bathtubs & Showers",
      text: "Practical fixture upgrades with waterproofing-first detailing.",
      image: "/home/2.webp",
    },
    {
      title: "Vanities & Countertops",
      text: "Storage-focused vanity and counter combinations with clean installation.",
      image: "/home/3.webp",
    },
    {
      title: "Flooring & Tiling",
      text: "Durable, stylish tile systems with accurate leveling and alignment.",
      image: "/home/4.webp",
    },
  ],
  basement: [
    {
      title: "Space Planning",
      text: "Basement zoning for living, storage, utility access, and circulation.",
      image: "/home/5.webp",
    },
    {
      title: "Moisture-Smart Finishing",
      text: "Lower-level finishing decisions made around durability and performance.",
      image: "/home/6.webp",
    },
    {
      title: "Drywall & Paint Systems",
      text: "Smooth finishing and interior coatings for clean, usable basement spaces.",
      image: "/home/7.webp",
    },
    {
      title: "Lighting & Comfort",
      text: "Balanced lighting plans and finish selections for welcoming basement rooms.",
      image: "/home/8.webp",
    },
  ],
  home: [
    {
      title: "Whole-Home Planning",
      text: "Scope sequencing that keeps the renovation predictable across multiple zones.",
      image: "/home/1.webp",
    },
    {
      title: "Kitchen & Bath Integration",
      text: "Coordinated upgrades across key living areas with one project rhythm.",
      image: "/home/2.webp",
    },
    {
      title: "Interior Finish Upgrades",
      text: "Drywall, paint, trim, and detail work aligned for consistent results.",
      image: "/home/3.webp",
    },
    {
      title: "Project Coordination",
      text: "Clear milestone communication from initial scope to final walkthrough.",
      image: "/home/4.webp",
    },
  ],
  general: [
    {
      title: "Project Scoping",
      text: "Written deliverables and timeline structure before construction starts.",
      image: "/home/5.webp",
    },
    {
      title: "Build Execution",
      text: "Daily cleanup, site protection, and milestone updates through each phase.",
      image: "/home/6.webp",
    },
    {
      title: "Quality Control",
      text: "Detail checks and deficiency closeout before project handover.",
      image: "/home/7.webp",
    },
    {
      title: "Final Delivery",
      text: "Documentation, walkthrough, and practical completion support.",
      image: "/home/8.webp",
    },
  ],
};

export const FRAMEWORK_PILLARS = [
  {
    title: "Design & Scope First",
    text: "We define deliverables, materials, and priorities before construction begins.",
  },
  {
    title: "Transparent Pricing",
    text: "Cost guidance is tied to real scope details, not vague allowances.",
  },
  {
    title: "Milestone Execution",
    text: "Each stage is scheduled and communicated so progress stays predictable.",
  },
  {
    title: "Quality Handover",
    text: "Final walkthrough and issue resolution are part of our completion standard.",
  },
];

export function detectServiceFamily(title = "", canonicalPath = "") {
  var t = (title + " " + canonicalPath).toLowerCase();
  if (t.indexOf("bathroom") > -1) return "bathroom";
  if (t.indexOf("basement") > -1) return "basement";
  if (t.indexOf("home renovation") > -1 || t.indexOf("home-renovation") > -1)
    return "home";
  return "general";
}
