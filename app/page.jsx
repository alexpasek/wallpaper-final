import Link from "next/link";
import { cities } from "@/data/cities";
import { PHONE_HREF, PHONE_NUMBER } from "./config";
export const metadata={title:"Wallpaper • Popcorn Ceiling • Drywall • Painting — GTA"};
export default function Page(){
 const imgs=Array.from({length:8},(_,i)=>`/home/${i+1}.webp`);
 return(<div className="container-x py-10">
  <h1 className="text-4xl font-bold">Wallpaper • Popcorn Ceiling • Drywall • Painting</h1>
  <p className="mt-3 text-lg text-gray-700">Clean, dust‑controlled work with a 3‑year warranty.</p>
  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">{cities.map(c=><Link key={c.slug} href={`/${c.slug}/`} className="pill">{c.name}</Link>)}</div>
  <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{imgs.map((s,i)=><img data-lightbox="true" key={i} src={s} alt={`GTA project ${i+1}`} className="w-full h-56 object-cover rounded-2xl border shadow"/>)}</div>
  <div className="card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div><h3 className="text-xl font-semibold">Ready for a guaranteed, dust‑controlled job?</h3><p className="text-gray-600">Get a clear scope, schedule, and warranty—fast.</p></div>
    <div className="flex gap-3"><a href={PHONE_HREF} className="btn-cta">📞 {PHONE_NUMBER}</a><a href="/quote/" className="btn-cta">Get My Quote</a></div>
  </div>
 </div>);
}
