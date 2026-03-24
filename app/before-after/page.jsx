import { readdirSync } from "fs";
import path from "path";

import CompareSlider from "@/components/CompareSlider";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Before & After | EPF Reno",
  description:
    "Browse bathroom renovation, home renovation, and transformation photos from EPF Reno projects across Mississauga and the GTA.",
  alternates: { canonical: "/before-after/" },
  robots: { index: true, follow: true },
};

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const PROJECT_FOLDERS = [
  {
    dir: "bathrooms al",
    title: "Mississauga Bathroom Projects",
    description:
      "Recent bathroom renovation photos including powder rooms, tub surrounds, tile walls, and upgraded finish details.",
    eyebrow: "Newest Photos",
  },
  {
    dir: "bathrooms ",
    title: "Bathroom Renovation Archive",
    description:
      "A broader bathroom gallery with shower upgrades, vanity details, tile work, and finished renovation shots.",
    eyebrow: "Project Library",
  },
  {
    dir: "home",
    title: "Renovation Transformations",
    description:
      "Before-and-after source images and renovation transformations used throughout the site.",
    eyebrow: "Transformations",
  },
];

function encodePublicPath(...segments) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function normalizeImageKey(file) {
  return file
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/-optimized/g, "")
    .replace(/\scopy/g, "")
    .replace(/copy/g, "")
    .replace(/[\s_-]+/g, "");
}

function buildAltText(sectionTitle, index, file) {
  const cleaned = file
    .replace(/\.[^.]+$/, "")
    .replace(/-optimized/gi, "")
    .replace(/copy/gi, "")
    .replace(/mississuaga/gi, "Mississauga")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (/^img\s*\d+/i.test(cleaned)) {
    return `${sectionTitle} photo ${index + 1}`;
  }

  return `${sectionTitle} - ${cleaned}`;
}

function loadSectionImages(section) {
  const folderPath = path.join(process.cwd(), "public", section.dir);
  const seen = new Set();

  return readdirSync(folderPath)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .flatMap((file, index) => {
      const key = normalizeImageKey(file);

      if (seen.has(key)) {
        return [];
      }

      seen.add(key);

      return [
        {
          src: encodePublicPath(section.dir, file),
          alt: buildAltText(section.title, index, file),
        },
      ];
    });
}

function tileSpan(index) {
  const pattern = index % 10;

  if (pattern === 0 || pattern === 7) {
    return "col-span-2 row-span-2";
  }

  if (pattern === 3 || pattern === 8) {
    return "row-span-2";
  }

  if (pattern === 5) {
    return "md:col-span-2";
  }

  return "";
}

export default function Page() {
  const pairs = [
    {
      before: "/home/1.webp",
      after: "/home/2.webp",
      caption: "Bathroom renovation detail update",
    },
    {
      before: "/home/3.webp",
      after: "/home/4.webp",
      caption: "Basement renovation finish transformation",
    },
  ];

  const sections = PROJECT_FOLDERS.map((section) => ({
    ...section,
    images: loadSectionImages(section),
  })).filter((section) => section.images.length > 0);

  const totalImages = sections.reduce(
    (sum, section) => sum + section.images.length,
    0,
  );

  return (
    <div className="container-x py-8 md:py-12">
      <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#181b21_0%,#0f1318_100%)] px-6 py-8 shadow-[0_26px_56px_rgba(0,0,0,0.3)] md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Project Gallery
            </p>
            <h1 className="mt-3 max-w-[10ch] text-[clamp(2.8rem,5vw,5.2rem)] font-black uppercase leading-[0.9] text-white display-title">
              Before, After, And Full Renovation Photos
            </h1>
            <p className="mt-5 max-w-[44rem] text-[16px] leading-8 text-white/72">
              Explore recent bathroom renovation images, finished project
              details, and transformation photos from EPF Reno work across
              Mississauga and the GTA. Click any image to open it full size.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-5">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                Total Photos
              </p>
              <p className="mt-3 text-[42px] font-black leading-none text-white display-title">
                {totalImages}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-5">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                Collections
              </p>
              <p className="mt-3 text-[42px] font-black leading-none text-white display-title">
                {sections.length}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-5">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[var(--reno-accent-soft)]">
                Viewing
              </p>
              <p className="mt-3 text-[20px] font-black uppercase leading-[1.05] text-white">
                Lightbox Ready
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <TrustBar />
      </div>

      <section className="mt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
              Compare Projects
            </p>
            <h2 className="mt-2 text-[clamp(2.1rem,4vw,3.8rem)] font-black uppercase leading-[0.92] text-white display-title">
              Before And After Sliders
            </h2>
          </div>
          <p className="max-w-[34rem] text-[15px] leading-7 text-white/66">
            Use the sliders to compare renovation transformations, then scroll
            through the full image gallery below.
          </p>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {pairs.map((pair, index) => (
            <CompareSlider key={pair.caption + index} {...pair} />
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.dir} className="mt-12" data-lightbox-scope>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-2 text-[clamp(2rem,3.8vw,3.5rem)] font-black uppercase leading-[0.94] text-white display-title">
                {section.title}
              </h2>
            </div>
            <p className="max-w-[38rem] text-[15px] leading-7 text-white/66">
              {section.description}
            </p>
          </div>

          <div className="mt-6 grid auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3 xl:grid-cols-4">
            {section.images.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#12151b] shadow-[0_18px_34px_rgba(0,0,0,0.24)] ${tileSpan(index)}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  data-lightbox="true"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.02)_20%,rgba(10,12,16,0.72)_100%)] opacity-90 transition duration-300 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-4">
                  <span className="inline-flex rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm">
                    {section.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
