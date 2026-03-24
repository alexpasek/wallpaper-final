import { PHONE_HREF, PHONE_NUMBER } from "../config";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Thank You | EPF Reno",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
        Thank you. We received your request.
      </h1>
      <p className="mt-4 text-slate-700">We will contact you shortly.</p>
      <div className="mt-6">
        <TrustBar />
      </div>
      <div className="mt-10">
        <a href={PHONE_HREF} className="btn-cta">
          Call {PHONE_NUMBER}
        </a>
      </div>
    </main>
  );
}
