import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Quote | EPF Pro Services",
  alternates: { canonical: "/quote/" },
};

export default function Page() {
  return (
    <div className="container-x py-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Get a Quote
      </h1>
      <p className="mt-3 text-slate-700">
        Share project details and photos. We respond with scope, timeline, and estimate guidance.
      </p>
      <QuoteForm />
    </div>
  );
}
