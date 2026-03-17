const BATHROOM_BASE = "/bathrooms%20";

export const CURATED_BATHROOM_GALLERY = [
  {
    src: `${BATHROOM_BASE}/IMG_4127-optimized.jpg`,
    badge: "Featured Room",
    alt: "finished bathroom with corner shower, vanity, and gray floor tile",
  },
  {
    src: `${BATHROOM_BASE}/IMG_4126-optimized.jpg`,
    badge: "Frameless Shower",
    alt: "frameless glass shower enclosure with niche and large-format wall tile",
  },
  {
    src: `${BATHROOM_BASE}/IMG_1098-optimized.jpg`,
    badge: "Vanity Detail",
    alt: "modern vanity wall with vessel sink, illuminated mirror, and textured tile",
  },
  {
    src: `${BATHROOM_BASE}/IMG_1046-optimized.jpg`,
    badge: "Shower Upgrade",
    alt: "walk-in shower with large-format tile and polished chrome fixtures",
  },
  {
    src: `${BATHROOM_BASE}/IMG_4256-optimized.jpg`,
    badge: "Tile Finish",
    alt: "walk-in shower floor with pebble mosaic and black shower panel",
  },
  {
    src: `${BATHROOM_BASE}/IMG_1041-optimized.jpg`,
    badge: "Fixture Detail",
    alt: "glass shower with marble-look wall tile and rainfall shower head",
  },
  {
    src: `${BATHROOM_BASE}/IMG_4906-optimized.jpg`,
    badge: "Tub Surround",
    alt: "bathtub surround with marble-look wall tile and black plumbing trim",
  },
  {
    src: `${BATHROOM_BASE}/IMG_4245-optimized.jpg`,
    badge: "Bath Conversion",
    alt: "bathtub and glass screen with gray tile walls and recessed niche",
  },
];

export function buildBathroomGallery(title = "Bathroom Renovation") {
  return CURATED_BATHROOM_GALLERY.map((item) => ({
    ...item,
    alt: `${title} - ${item.alt}`,
  }));
}

export function hasPlaceholderHomeGallery(gallery = []) {
  return (
    Array.isArray(gallery) &&
    gallery.length > 0 &&
    gallery.every((item) => typeof item?.src === "string" && item.src.startsWith("/home/"))
  );
}
