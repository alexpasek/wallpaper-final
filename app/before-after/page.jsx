import CompareSlider from "@/components/CompareSlider";

export const metadata = {
  title: "Before & After | EPF Pro Services",
  description:
    "Before-and-after renovation comparisons for bathroom, basement, and home improvement work.",
  alternates: { canonical: "/before-after/" },
  robots: { index: true, follow: true },
};

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

  return (
    <div className="container-x py-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Before & After
      </h1>
      <p className="mt-3 text-slate-700">
        Slide to compare renovation results.
      </p>
      <div className="mt-8 grid gap-8">
        {pairs.map((p, i) => (
          <CompareSlider key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
