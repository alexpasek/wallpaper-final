import ReviewScroller from "@/components/ReviewScroller";
import { SERVICE_AREAS } from "@/app/config";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t border-[#b9d3ca] bg-[#e4f2ed] text-[#315a50]"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <section id="reviews" className="mt-10 md:mt-14 scroll-mt-24">
        <ReviewScroller
          className="py-4 md:py-6"
          brand="213 108 72"
          accent="77 160 142"
          bg="vivid"
          bgAlpha={0.12}
          cardAlpha={0.1}
          hoverAlpha={0.2}
          mobileTall
        />
      </section>

      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-[#174b40]" itemProp="name">
            EPF Pro Services
          </div>
          <p className="mt-2 text-sm">Serving {SERVICE_AREAS.join(" · ")}</p>
          <p className="mt-3 text-sm" itemProp="openingHours">
            Mon-Sun: 8:00 AM - 9:00 PM
          </p>
          <p className="mt-3 text-sm text-[#64877f]">© {new Date().getFullYear()}</p>
        </div>

        <div className="md:text-center">
          <div className="font-semibold text-[#174b40]">Core Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/bathroom-renovation/" className="hover:text-[#174b40]">
                Bathroom Renovation
              </a>
            </li>
            <li>
              <a href="/basement-renovation/" className="hover:text-[#174b40]">
                Basement Renovation
              </a>
            </li>
            <li>
              <a href="/home-renovation/" className="hover:text-[#174b40]">
                Home Renovation
              </a>
            </li>
            <li>
              <a href="/locations/" className="hover:text-[#174b40]">
                Locations
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-center">
          <div className="font-semibold text-[#174b40]">Other Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/other-services/wallpaper-removal/" className="hover:text-[#174b40]">
                Wallpaper Removal
              </a>
            </li>
            <li>
              <a href="/other-services/popcorn-ceiling-removal/" className="hover:text-[#174b40]">
                Popcorn Ceiling Removal
              </a>
            </li>
            <li>
              <a href="/other-services/drywall-installation/" className="hover:text-[#174b40]">
                Drywall Installation
              </a>
            </li>
            <li>
              <a href="/other-services/interior-painting/" className="hover:text-[#174b40]">
                Interior Painting
              </a>
            </li>
            <li>
              <a href="/quote/" className="hover:text-[#174b40]">
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
