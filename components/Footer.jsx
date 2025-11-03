// components/Footer.jsx
import ReviewScroller from "@/components/ReviewScroller";
import { SERVICE_AREAS } from "@/app/config"; // adjust path if your config lives elsewhere

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t bg-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Reviews strip */}
      <section id="reviews" className="mt-10 md:mt-16 scroll-mt-24">
        <ReviewScroller
          className="py-4 md:py-6"
          brand="30 64 175"
          accent="16 185 129"
          bg="vivid"
          bgAlpha={0.12}
          cardAlpha={0.1}
          hoverAlpha={0.2}
          mobileTall
        />
      </section>

      {/* Footer cols */}
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold" itemProp="name">
            Wallpaper Removal Pro
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Serving {SERVICE_AREAS.join(" · ")}
          </p>

          {/* Address */}
          <address
            className="mt-3 not-italic text-sm text-gray-700"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <div className="font-medium text-gray-900">📍 Address</div>
            <a
              className="mt-1 block hover:underline"
              href="https://maps.google.com/?q=2394+Haines+Rd,+Mississauga,+ON+L4Y+1Y6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
            >
              <span itemProp="streetAddress">2394 Haines Rd</span>,{" "}
              <span itemProp="addressLocality">Mississauga</span>,{" "}
              <span itemProp="addressRegion">ON</span>{" "}
              <span itemProp="postalCode">L4Y 1Y6</span>
            </a>
            <meta itemProp="addressCountry" content="CA" />
          </address>

          <p className="mt-3 text-sm text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/contact/" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/about-us/" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/blog/" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/before-after/" className="hover:underline">
                Before &amp; After
              </a>
            </li>
            <li>
              <a href="/quote/" className="hover:underline">
                Get Quote
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Legal</div>
          <p className="mt-3 text-sm text-gray-600">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
