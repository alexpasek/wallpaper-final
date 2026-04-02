import Link from "next/link";

import {
  MISSISSAUGA_BATHROOM_PATHS,
  MISSISSAUGA_BLOG_POSTS,
} from "@/data/mississaugaBathroomCluster";

const SITE_URL = "https://epfproservices.com";

function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

function BlogJsonLd({ post, breadcrumbs }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.label,
                item: absoluteUrl(item.href),
              })),
            },
            {
              "@type": "Article",
              headline: post.title,
              description: post.description,
              mainEntityOfPage: absoluteUrl(post.path),
            },
          ],
        }),
      }}
    />
  );
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function estimateReadingTime(post) {
  const wordCount = [post.intro, ...post.sections.map((section) => section.body)]
    .join(" ")
    .trim()
    .split(/\s+/).length;

  return Math.max(3, Math.ceil(wordCount / 170));
}

export default function MississaugaBlogPage({ post }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/blog/", label: "Blog" },
    { href: MISSISSAUGA_BATHROOM_PATHS.hub, label: "Bathroom Renovation Mississauga" },
    { href: post.path, label: post.title },
  ];

  const relatedPosts = Object.values(MISSISSAUGA_BLOG_POSTS).filter(
    (item) => item.path !== post.path,
  );

  return (
    <div className="bg-[#f4efe5] pb-16 text-[#21402a] md:pb-20">
      <BlogJsonLd post={post} breadcrumbs={breadcrumbs} />

      <section className="container-x pt-8 md:pt-10">
        <div className="mx-auto max-w-[1100px]">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[12px] text-[#55705a]"
          >
            {breadcrumbs.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <Link href={item.href} className="transition hover:text-[#236f2c]">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
          <div className="mt-6 overflow-hidden rounded-[40px]">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="h-[280px] w-full object-cover md:h-[420px]"
            />
          </div>
          <div className="mt-7 max-w-[760px]">
            <p className="text-[14px] font-medium text-[#2f7b36]">{post.category}</p>
            <h1 className="mt-3 text-[clamp(2.6rem,4.8vw,4.8rem)] font-black leading-[0.95] text-[#236f2c]">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-[#5c735f]">
              <span>{estimateReadingTime(post)} min read</span>
              <span className="h-1 w-1 rounded-full bg-[#849786]" />
              <span>{post.sections.length} sections</span>
            </div>
            <p className="mt-5 text-[18px] leading-8 text-[#334b37]">
              {post.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-8 md:mt-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {post.sections.map((section, index) => {
                const id = slugify(section.title);

                return (
                  <a
                    key={section.title}
                    href={`#${id}`}
                    className="rounded-full border border-[#d9d1bf] bg-[#f8f3ea] px-4 py-2.5 text-[13px] font-medium text-[#355339] transition hover:border-[#236f2c] hover:text-[#236f2c]"
                  >
                    <span className="mr-2 text-[11px] text-[#6f866f]">
                      0{index + 1}
                    </span>
                    {section.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x mt-8 md:mt-10">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <div className="grid gap-9">
                {post.sections.map((section, index) => {
                  const id = slugify(section.title);

                  return (
                    <section
                      key={section.title}
                      id={id}
                      className="scroll-mt-[120px]"
                    >
                      <p className="text-[12px] font-medium text-[#6d836f]">
                        Section 0{index + 1}
                      </p>
                      <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,3.2vw,3rem)] font-black leading-[0.98] text-[#236f2c]">
                        {section.title}
                      </h2>
                      <p className="mt-4 max-w-[44rem] text-[17px] leading-9 text-[#26372a]">
                        {section.body}
                      </p>
                    </section>
                  );
                })}
            </div>
          </article>

          <aside className="grid gap-5 lg:sticky lg:top-[110px] lg:self-start">
            <div className="rounded-[28px] border border-[#ddd4c2] bg-[#f8f3ea] p-5">
              <p className="text-[13px] font-medium text-[#2f7b36]">Related Pages</p>
              <div className="mt-4 space-y-3">
              {post.ctaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[15px] leading-7 text-[#2d4731] transition hover:text-[#236f2c]"
                >
                  {item.label}
                </Link>
              ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#ddd4c2] bg-[#f8f3ea] p-5">
              <p className="text-[13px] font-medium text-[#2f7b36]">More From The Blog</p>
              <div className="mt-4 space-y-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block text-[15px] leading-7 text-[#2d4731] transition hover:text-[#236f2c]"
                >
                  {item.title}
                </Link>
              ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x mt-12 md:mt-14">
        <div className="mx-auto max-w-[1100px] rounded-[28px] border border-[#ddd4c2] bg-[#f8f3ea] px-5 py-5 md:px-7 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
            <p className="text-[15px] leading-7 text-[#334b37]">
              Ready to move from reading to planning?
            </p>
            <div className="flex flex-wrap gap-3">
              {post.ctaLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-[14px] font-medium text-[#236f2c] transition hover:text-[#1a5521]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
