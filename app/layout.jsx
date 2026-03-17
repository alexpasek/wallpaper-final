import "./globals.css";
import StickyCTA from "@/components/StickyCTA";
import LightboxGlobal from "@/components/LightboxGlobal";
import SEOJsonLd from "@/components/SEOJsonLd";
import ChatWidgetAgent from "@/components/ChatWidgetAgent";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "EPF Pro Services | GTA Renovations",
    template: "%s | EPF Pro Services",
  },
  description:
    "Bathroom renovation, basement renovation, home renovation, and finishing services across GTA locations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <SEOJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--reno-bg)] text-[var(--reno-band-ink)]">
        <ChatWidgetAgent />
        <HeaderNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <LightboxGlobal />
      </body>
    </html>
  );
}
