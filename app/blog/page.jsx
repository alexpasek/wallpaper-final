import Link from "next/link";

import { MISSISSAUGA_BLOG_POSTS } from "@/data/mississaugaBathroomCluster";

export const metadata = {
  title: "Blog | EPF Reno",
  description:
    "Renovation articles and local planning guides from EPF Reno, including Mississauga bathroom cost, resale, and layout content.",
  alternates: { canonical: "/blog/" },
  robots: { index: true, follow: true },
};

const posts = Object.values(MISSISSAUGA_BLOG_POSTS);

function estimateReadingTime(post) {
  const wordCount = [post.intro, ...post.sections.map((section) => section.body)]
    .join(" ")
    .trim()
    .split(/\s+/).length;

  return Math.max(3, Math.ceil(wordCount / 170));
}

export default function BlogIndexPage() {
  return (
    <div className="bg-[#f4efe5] pb-16 text-[#21402a] md:pb-20">
      <section className="container-x pt-8 md:pt-10">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-medium tracking-[0.02em] text-[#3a7043]">
            Renovation Blog
          </p>
          <h1 className="mt-3 max-w-[12ch] text-[clamp(2.6rem,4.8vw,4.7rem)] font-black leading-[0.94] text-[#236f2c]">
            Simple Bathroom Renovation Guides For Mississauga
          </h1>
          <p className="mt-4 max-w-[42rem] text-[18px] leading-8 text-[#334b37]">
            Straightforward articles about pricing, resale decisions, and small-bathroom
            planning. The layout is lighter, more compact, and easier to scan.
          </p>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-12">
        <div className="mx-auto grid max-w-[1240px] gap-x-10 gap-y-14 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.path}>
              <Link href={post.path} className="block">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="h-[260px] w-full rounded-[40px] object-cover md:h-[320px]"
                />
              </Link>
              <div className="mt-6">
                <p className="text-[13px] font-medium text-[#2f7b36]">{post.category}</p>
                <h2 className="mt-3 max-w-[12ch] text-[clamp(2.2rem,4vw,3.8rem)] font-black leading-[0.96] text-[#236f2c]">
                  <Link href={post.path} className="transition hover:text-[#1a5521]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-[38rem] text-[16px] leading-8 text-[#26372a]">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-[13px] text-[#4d644f]">
                  <span>{estimateReadingTime(post)} min read</span>
                  <span className="h-1 w-1 rounded-full bg-[#7d8f7f]" />
                  <Link href={post.path} className="font-medium text-[#236f2c] transition hover:text-[#1a5521]">
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-14 md:mt-16">
        <div className="mx-auto max-w-[1240px] rounded-[28px] border border-[#dfd6c4] bg-[#f8f3ea] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:px-7 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
            <p className="text-[15px] leading-7 text-[#334b37]">
              Looking for the service pages behind these articles?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/locations/bathroom-renovation-mississauga/" className="text-[14px] font-medium text-[#236f2c] transition hover:text-[#1a5521]">
                Bathroom renovation Mississauga
              </Link>
              <Link href="/locations/bathroom-renovation-mississauga/cost/" className="text-[14px] font-medium text-[#236f2c] transition hover:text-[#1a5521]">
                Cost guide
              </Link>
              <Link href="/projects/mrs-olga-bathroom-renovation-mississauga/" className="text-[14px] font-medium text-[#236f2c] transition hover:text-[#1a5521]">
                Mrs. Olga case study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
