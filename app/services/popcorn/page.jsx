import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
export const metadata={title:"Popcorn Ceiling Removal — Wallpaper Removal Pro"};
export default function Page(){
 const images=Array.from({length:6},(_,i)=>`/services/popcorn/${i+1}.webp`);
 return(<div className="container-x py-10">
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Popcorn Ceiling Removal</h1>
  <p className="mt-3 text-gray-700">Dust-contained scraping, repairs, skim-coat, prime and paint for bright smooth ceilings.</p>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{images.map((s,i)=>(<img key={i} src={s} alt="Popcorn Ceiling Removal project" className="w-full h-56 object-cover rounded-2xl border shadow"/>))}</div>
  <div className="mt-6 flex gap-3"><a className="btn-cta" href={CONTACT.phoneHref}>📞 (647) 923-6784</a><a className="btn-cta" href="/quote/">Get my quote</a></div>
  <ServiceCopy service="Popcorn Ceiling Removal"/>
 </div>);
}
