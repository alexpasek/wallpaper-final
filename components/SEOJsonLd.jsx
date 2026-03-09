import { BRAND_NAME, SERVICE_AREAS, CONTACT } from "@/app/config";

export default function SEOJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BRAND_NAME,
    areaServed: SERVICE_AREAS,
    telephone: CONTACT.phone,
    email: CONTACT.email || undefined,
    url: "https://epfproservices.com",
    image: "https://epfproservices.com/android-chrome-512x512.png",
    address: CONTACT.address || undefined,
    description:
      "Bathroom renovation, basement renovation, home renovation, and interior finishing services across the GTA.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
