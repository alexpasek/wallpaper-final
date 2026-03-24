import fs from "node:fs";
import path from "node:path";
import { cities } from "../data/cities.js";

const root = process.cwd();
const locationsDir = path.join(root, "app", "locations");
const oldPopcornBase = path.join(
  root,
  "app",
  "service-areas",
  "popcorn-ceiling-removal"
);

const cityMap = new Map(cities.map((c) => [c.slug, c.name]));

const coreServices = [
  {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    short: "bathroom renovation",
    kicker: "Bathroom Renovation Contractor",
  },
  {
    slug: "basement-renovation",
    name: "Basement Renovation",
    short: "basement renovation",
    kicker: "Basement Renovation Contractor",
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    short: "home renovation",
    kicker: "Home Renovation Contractor",
  },
];

const localAngles = [
  "Older housing stock often needs scope updates after opening walls, so we plan contingencies before demolition.",
  "Busy family homes need staged work, daily cleanup, and practical access plans so the house stays functional.",
  "Condo and townhome projects require strict protection, noise windows, and clean corridor protocols.",
  "Open-concept layouts need precise leveling and finish checks under natural light before final handover.",
  "Projects with multiple trades succeed when scheduling and sequencing are locked before material delivery.",
];

const processVariants = [
  [
    "Discovery call, photos, and onsite scope review.",
    "Detailed quote with exclusions, timeline, and milestone schedule.",
    "Material confirmation and pre-construction checklist.",
    "Build phase with daily updates and site protection.",
    "Final walkthrough, deficiency fixes, and handover package.",
  ],
  [
    "Initial estimate and site measurement.",
    "Fixed scope definition with permit/trade coordination.",
    "Protection setup and selective demolition.",
    "Construction, finishing, and quality control checks.",
    "Client walkthrough with completion notes.",
  ],
  [
    "Photo review and budgeting call.",
    "Onsite validation and schedule confirmation.",
    "Procurement, staging, and prep work.",
    "Renovation execution with clear milestone tracking.",
    "Closeout inspection and maintenance guidance.",
  ],
];

const faqEnds = [
  "with a written scope and timeline.",
  "with transparent pricing factors.",
  "with clear milestone updates.",
  "while keeping the site clean each day.",
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function hash(input) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pick(arr, key, offset = 0) {
  return arr[(hash(`${key}-${offset}`) + offset) % arr.length];
}

function titleCaseSlug(slug) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function makeHighlights(areaName, serviceName, key) {
  return [
    {
      title: "Scope Clarity",
      text: `We define deliverables for ${serviceName.toLowerCase()} in ${areaName} before construction starts, so decisions stay controlled.`,
    },
    {
      title: "Site Protection",
      text: `Dust control, floor protection, and daily cleanup are standard on every ${areaName} project.`,
    },
    {
      title: "Quality Handover",
      text: `Final checks are completed against scope ${pick(faqEnds, key, 1)}`,
    },
  ];
}

function makeLocalCopy(areaName, serviceName, key) {
  const a = pick(localAngles, key, 1);
  const b = pick(localAngles, key, 2);
  return `${serviceName} in ${areaName} is planned around real site conditions and practical sequencing. ${a} ${b} Our team keeps communication direct, confirms milestones before each stage, and closes with a documented walkthrough.`;
}

function makeFaq(areaName, serviceName, key) {
  return [
    {
      q: `How is ${serviceName.toLowerCase()} priced in ${areaName}?`,
      a: `Pricing depends on scope depth, finishes, access, and mechanical/electrical updates. We provide line-item clarity ${pick(
        faqEnds,
        key,
        1
      )}`,
    },
    {
      q: `How long does ${serviceName.toLowerCase()} take in ${areaName}?`,
      a: `Most timelines are set after onsite verification. We publish start-to-finish milestones and update progress daily.`,
    },
    {
      q: `Do you handle permits and trade coordination?`,
      a: `When required, we coordinate permitting and licensed trade sequencing as part of project planning.`,
    },
    {
      q: `Can I live in the home during the renovation?`,
      a: `In many cases yes. We plan phased access, containment, and cleanup to reduce disruption throughout the job.`,
    },
  ];
}

function makeGallery(area, serviceSlug) {
  const seed = hash(`${area}-${serviceSlug}`);
  const list = [];
  for (let i = 0; i < 6; i += 1) {
    const n = ((seed + i) % 8) + 1;
    list.push({
      src: `/home/${n}.webp`,
      alt: `${titleCaseSlug(serviceSlug)} project in ${area} - photo ${i + 1}`,
    });
  }
  return list;
}

function pageContent({ slug, title, description, canonicalPath, kicker, highlights, process, localCopy, faqItems, gallery, keywordLinks }) {
  return `import RenoLandingPage from "@/components/RenoLandingPage";

export const metadata = {
  title: ${JSON.stringify(`${title} | EPF Reno`)},
  description: ${JSON.stringify(description)},
  alternates: { canonical: ${JSON.stringify(canonicalPath)} },
  robots: { index: true, follow: true },
};

const highlights = ${JSON.stringify(highlights, null, 2)};
const process = ${JSON.stringify(process, null, 2)};
const faqItems = ${JSON.stringify(faqItems, null, 2)};
const gallery = ${JSON.stringify(gallery, null, 2)};
const keywordLinks = ${JSON.stringify(keywordLinks, null, 2)};

export default function Page() {
  return (
    <RenoLandingPage
      title={${JSON.stringify(title)}}
      description={${JSON.stringify(description)}}
      canonicalPath={${JSON.stringify(canonicalPath)}}
      kicker={${JSON.stringify(kicker)}}
      highlights={highlights}
      process={process}
      localCopy={${JSON.stringify(localCopy)}}
      faqItems={faqItems}
      gallery={gallery}
      keywordLinks={keywordLinks}
    />
  );
}
`;
}

function getStaticNeighborhoodsFromCurrentSite() {
  const out = new Map();
  if (!fs.existsSync(oldPopcornBase)) return out;

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === "page.jsx") {
        const rel = path.relative(oldPopcornBase, full).split(path.sep);
        if (rel.length === 3 && rel[2] === "page.jsx") {
          const [citySlug, hoodSlug] = rel;
          if (citySlug.startsWith("[")) continue;
          if (hoodSlug === "page.jsx") continue;
          if (!out.has(citySlug)) out.set(citySlug, []);
          out.get(citySlug).push(hoodSlug);
        }
      }
    }
  }

  walk(oldPopcornBase);

  for (const [citySlug, hoods] of out.entries()) {
    out.set(citySlug, Array.from(new Set(hoods)).sort());
  }

  return out;
}

function buildCityServicePages(cityNeighborhoods) {
  const entries = [];

  for (const c of cities) {
    for (const service of coreServices) {
      const slug = `${c.slug}-${service.slug}`;
      const canonicalPath = `/locations/${slug}/`;
      const areaName = c.name;
      const title = `${c.name} ${service.name}`;
      const description = `Keyword page for ${service.short} in ${c.name}. Unique local scope, process, pricing factors, and quote support.`;
      const highlights = makeHighlights(areaName, service.name, slug);
      const process = pick(processVariants, slug, 3);
      const localCopy = makeLocalCopy(areaName, service.name, slug);
      const faqItems = makeFaq(areaName, service.name, slug);
      const gallery = makeGallery(areaName, service.slug);
      const neighborhoodLinks = (cityNeighborhoods.get(c.slug) || []).slice(0, 8).map((n) => ({
        href: `/locations/${c.slug}-${n}-bathroom-renovation/`,
        label: `${titleCaseSlug(n)} Bathroom Renovation`,
      }));
      const siblingLinks = coreServices
        .filter((s) => s.slug !== service.slug)
        .map((s) => ({
          href: `/locations/${c.slug}-${s.slug}/`,
          label: `${c.name} ${s.name}`,
        }));
      const keywordLinks = [...siblingLinks, ...neighborhoodLinks].slice(0, 9);

      const content = pageContent({
        slug,
        title,
        description,
        canonicalPath,
        kicker: service.kicker,
        highlights,
        process,
        localCopy,
        faqItems,
        gallery,
        keywordLinks,
      });

      writeFile(path.join(locationsDir, slug, "page.jsx"), content);
      entries.push({ city: c.name, citySlug: c.slug, slug, title, kind: "city", service: service.name });
    }
  }

  return entries;
}

function buildNeighborhoodBathroomPages(cityNeighborhoods) {
  const entries = [];

  for (const c of cities) {
    const hoods = cityNeighborhoods.get(c.slug) || [];
    for (const hoodSlug of hoods) {
      const hoodName = titleCaseSlug(hoodSlug);
      const slug = `${c.slug}-${hoodSlug}-bathroom-renovation`;
      const canonicalPath = `/locations/${slug}/`;
      const title = `${hoodName} ${c.name} Bathroom Renovation`;
      const description = `Keyword page for bathroom renovation in ${hoodName}, ${c.name}. Unique local process notes, scope guidance, and renovation FAQ.`;
      const highlights = makeHighlights(`${hoodName}, ${c.name}`, "Bathroom Renovation", slug);
      const process = pick(processVariants, slug, 2);
      const localCopy = makeLocalCopy(`${hoodName}, ${c.name}`, "Bathroom Renovation", slug);
      const faqItems = makeFaq(`${hoodName}, ${c.name}`, "Bathroom Renovation", slug);
      const gallery = makeGallery(`${hoodName}-${c.name}`, "bathroom-renovation");
      const keywordLinks = [
        {
          href: `/locations/${c.slug}-bathroom-renovation/`,
          label: `${c.name} Bathroom Renovation`,
        },
        {
          href: `/locations/${c.slug}-basement-renovation/`,
          label: `${c.name} Basement Renovation`,
        },
        {
          href: `/locations/${c.slug}-home-renovation/`,
          label: `${c.name} Home Renovation`,
        },
      ];

      const content = pageContent({
        slug,
        title,
        description,
        canonicalPath,
        kicker: "Neighborhood Bathroom Renovation",
        highlights,
        process,
        localCopy,
        faqItems,
        gallery,
        keywordLinks,
      });

      writeFile(path.join(locationsDir, slug, "page.jsx"), content);
      entries.push({ city: c.name, citySlug: c.slug, slug, title, kind: "neighborhood", service: "Bathroom Renovation" });
    }
  }

  return entries;
}

function buildLocationsIndex(entries) {
  const byCity = cities.map((c) => {
    const cityEntries = entries.filter((e) => e.citySlug === c.slug);
    return {
      cityName: c.name,
      citySlug: c.slug,
      core: cityEntries.filter((e) => e.kind === "city"),
      neighborhoods: cityEntries.filter((e) => e.kind === "neighborhood"),
    };
  });

  const content = `import Link from "next/link";

export const metadata = {
  title: "Locations | EPF Reno",
  description: "Keyword-focused renovation location pages with unique content across GTA service areas.",
  alternates: { canonical: "/locations/" },
  robots: { index: true, follow: true },
};

const groups = ${JSON.stringify(byCity, null, 2)};

export default function LocationsPage() {
  return (
    <div className="container-x py-10">
      <header className="max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          GTA Renovation Locations
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Every location page targets a specific keyword and contains unique local copy.
        </p>
      </header>

      <section className="mt-10 space-y-8">
        {groups.map((g) => (
          <div key={g.citySlug} className="card p-6 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900">{g.cityName}</h2>

            <h3 className="mt-5 font-semibold text-slate-900">Core Service Keywords</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.core.map((p) => (
                <Link key={p.slug} href={"/locations/" + p.slug + "/"} className="pill text-center">
                  {p.title}
                </Link>
              ))}
            </div>

            {g.neighborhoods.length > 0 && (
              <>
                <h3 className="mt-6 font-semibold text-slate-900">
                  Neighborhood Bathroom Renovation Keywords
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.neighborhoods.map((p) => (
                    <Link key={p.slug} href={"/locations/" + p.slug + "/"} className="pill">
                      {p.title}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
`;

  writeFile(path.join(locationsDir, "page.jsx"), content);
}

function run() {
  if (fs.existsSync(locationsDir)) {
    fs.rmSync(locationsDir, { recursive: true, force: true });
  }

  const cityNeighborhoods = getStaticNeighborhoodsFromCurrentSite();
  const cityEntries = buildCityServicePages(cityNeighborhoods);
  const hoodEntries = buildNeighborhoodBathroomPages(cityNeighborhoods);
  const all = [...cityEntries, ...hoodEntries];
  buildLocationsIndex(all);

  const report = {
    cityPages: cityEntries.length,
    neighborhoodPages: hoodEntries.length,
    totalLocationPages: all.length,
  };

  console.log(JSON.stringify(report, null, 2));
}

run();
