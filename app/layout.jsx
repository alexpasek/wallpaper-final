import "./globals.css";
import Link from "next/link";
import StickyCTA from "@/components/StickyCTA";
import TrustBar from "@/components/TrustBar";
import LightboxGlobal from "@/components/LightboxGlobal";
import SEOJsonLd from "@/components/SEOJsonLd";
import { cities } from "@/data/cities";
import { BRAND_NAME, CONTACT, SERVICE_AREAS, PHONE_NUMBER, PHONE_HREF } from "./config";



export const metadata={title:{default:"Wallpaper Removal Pro — GTA",template:"%s — Wallpaper Removal Pro"},description:"Wallpaper removal, popcorn ceiling removal, drywall installation & repair, and interior painting across the GTA."};

export default function RootLayout({children}){
  return(<html lang="en"><head>
    <link rel="icon" href="/favicon.ico"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
      <SEOJsonLd/>
  </head><body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <Header/><TrustBar/><main className="flex-1">{children}</main><Footer/><StickyCTA/>
    <LightboxGlobal/>
</body></html>);
}

function Header(){
  const services=[
    {href:"/services/wallpaper/",label:"Wallpaper Removal"},
    {href:"/services/popcorn/",label:"Popcorn Ceiling"},
    {href:"/services/drywall-installation/",label:"Drywall Installation"},
    {href:"/services/interior-painting/",label:"Interior Painting"}
  ];
  return (
    <header className="bg-white border-b md:sticky md:top-0 md:z-40">
      <div className="container-x py-2 md:py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <img
            src="/logo.png"
            alt="Wallpaper Removal Pro"
            className="w-auto h-14 md:h-15 object-contain"
          />
          <span className="text-lg md:text-xl font-semibold leading-none whitespace-nowrap truncate">
            Wallpaper Removal Pro
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a href={PHONE_HREF} className="btn-cta whitespace-nowrap">
            📞 {PHONE_NUMBER}
          </a>
          <Link href="/quote/" className="btn-cta whitespace-nowrap">
            Get Quote
          </Link>
        </div>
      </div>
      <div className="hidden lg:block border-t">
        <div className="container-x py-2 flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline whitespace-nowrap">
            Home
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="hover:underline whitespace-nowrap"
            >
              {s.label}
            </Link>
          ))}
          <Link href="/blog/" className="hover:underline whitespace-nowrap">
            Blog
          </Link>
          <Link
            href="/before-after/"
            className="hover:underline whitespace-nowrap"
          >
            Before & After
          </Link>
        </div>
      </div>
      <div className="lg:hidden ">
        <div className="container-x py-2 space-y-2">
          <div className="flex items-center justify-between px-1">
            <a
              href={PHONE_HREF}
              className="btn-cta w-1/2 text-center flex gap-3"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="btn-cta max-w-screen-sm text-center flex gap-3"
            >
              Get Quote
            </Link>
          </div>
          <div className="scroller">
            <Link href="/">Home</Link>
            <Link href="/services/wallpaper/">Wallpaper</Link>
            <Link href="/services/popcorn/">Popcorn</Link>
            <Link href="/services/drywall-installation/">Drywall</Link>
            <Link href="/services/interior-painting/">Painting</Link>
          </div>
          {/* <div className="scroller">
            {cities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}/`}>
                {c.name}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </header>
  );
}

function Footer(){
  return(<footer className="mt-16 border-t bg-white">
    <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="font-semibold">Wallpaper Removal Pro</div>
        <p className="mt-2 text-sm text-gray-600">Serving {SERVICE_AREAS.join(' · ')}</p>
        <p className="mt-3 text-sm text-gray-600">© 2025</p>
      </div>
      <div>
        <div className="font-semibold">Company</div>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a href="/contact/" className="hover:underline">Contact</a></li>
          <li><a href="/blog/" className="hover:underline">Blog</a></li>
          <li><a href="/before-after/" className="hover:underline">Before & After</a></li>
          <li><a href="/quote/" className="hover:underline">Get Quote</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Legal</div>
        <p className="mt-3 text-sm text-gray-600">All rights reserved.</p>
      </div>
    </div>
  </footer>);
}
