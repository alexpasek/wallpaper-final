import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
export const metadata={title:"Drywall Installation — Wallpaper Removal Pro"};
export default function Page(){
 const images=Array.from({length:6},(_,i)=>`/services/drywall/${i+1}.webp`);
 return(<div className="container-x py-10">
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Drywall Installation</h1>
  <p className="mt-3 text-gray-700">Studs-to-finish installation: layout checks, moisture-resistant boards in wet zones, proper fastening, taped seams, multi-coat compound, HEPA extraction sanding, and primer to paint-ready.</p>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{images.map((s,i)=>(<img key={i} src={s} alt="Drywall Installation project" className="w-full h-56 object-cover rounded-2xl border shadow"/>))}</div>
  <div className="mt-6 flex gap-3"><a className="btn-cta" href={CONTACT.phoneHref}>📞 (647) 923-6784</a><a className="btn-cta" href="/quote/">Get my quote</a></div>
  <ServiceCopy service="Drywall Installation"/>
 </div>);
}
