import { CONTACT } from "@/app/config";

export const metadata = {
  title: "Contact | EPF Pro Services",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <div className="container-x py-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="mt-4 text-slate-700">
        Call or text: <a className="underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
      <p className="mt-2 text-slate-700">
        Email: <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
    </div>
  );
}
