// lib/seoCopy.js
function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function pick(seed, arr) {
    if (!arr.length) return "";
    const idx = seed % arr.length;
    return arr[idx];
}

export function buildCityCopy(citySlug) {
    const s = hashSeed(citySlug);
    const openings = [
        "We remove wallpaper the right way for a smooth, paint-ready result.",
        "From condos to character homes, we deliver neat, paint-ready walls.",
        "Wallpaper gone, glue removed, repairs done — ready for new paint.",
    ];
    const housing = [
        "Many homes here have mixed substrates (old plaster + newer drywall). We test first and choose a safe removal method.",
        "A lot of local walls were painted over wallpaper in the past — we fully wash adhesive so primer bonds properly.",
        "We see multi-layer wallpaper often; our adhesive wash and skim-coat process leaves a uniform surface.",
    ];
    const trust = [
        "HEPA dust control, floor protection, and daily tidy-ups keep your home usable.",
        "Level 4/5 skim-coat where needed, checked under raking light before primer.",
        "We coordinate with condo rules (elevators, protection) and keep management happy.",
    ];
    return {
        opening: pick(s, openings),
        housing: pick(s >> 1, housing),
        trust: pick(s >> 2, trust),
    };
}

export function buildNeighborhoodCopy(citySlug, hoodSlug) {
    const s = hashSeed(citySlug + ":" + hoodSlug);
    const angles = [
        "Tight timelines? We phase rooms so you can keep living at home.",
        "Older walls? We feather repairs so seams and gouges disappear.",
        "Fresh paint after? We can prime and finish with premium coatings.",
    ];
    const extras = [
        "If previous paint was rolled over glue, we sand and seal before skim-coat.",
        "For vinyl wallpapers, we score carefully and control steam to protect the substrate.",
        "Grasscloth or fabric? We evaluate and propose the safest approach.",
    ];
    return {
        angle: pick(s, angles),
        extra: pick(s >> 1, extras),
    };
}

// app/lib/seoCopy.jsx
import { cities } from "@/data/cities";

export function buildPopcornCopy(slug) {
    const c = cities.find((x) => x.slug === slug);
    const name = (c && c.name) ? c.name : "your area"; // ← no optional chaining

    // Per-city overrides (expand anytime)
    const MAP = {
        toronto: {
            opening: "Toronto homes—from High Park semis to Bay Street condos—need true Level 5 smoothing so strong daylight doesn’t reveal waves or seams.",
            housing: "We work clean in condos and houses: sealed rooms, protected halls/elevators, and vacuum-assist sanding to keep {CITY} homes livable.",
            trust: "Clear scope, reliable schedule, and a written warranty. Photos/updates daily so you always know progress.",
        },
        mississauga: {
            opening: "Mississauga’s Port Credit condos and Lorne Park homes often have multiple paint layers over texture—best handled with controlled removal or encapsulation.",
            housing: "Elevator bookings and condo rules respected. We isolate rooms, vent-mask, and deliver a Level 5 skim that reads flat in {CITY} light.",
            trust: "Fast photo estimates, tidy crews, and a smooth handover so you can paint immediately or have us finish it.",
        },
        oakville: {
            opening: "In Oakville, big windows and critical light make Level 5 a must so ceilings look perfectly flat and premium.",
            housing: "We repair pot-light cutouts, stains, and waves; then skim, prime, and leave a paint-ready ceiling for your {CITY} home.",
            trust: "Insured & WSIB. 3-year workmanship warranty. Clean daily wrap-ups to keep the house usable.",
        },
        // add more city overrides as needed...
    };

    const fallback = {
        opening: "Popcorn ceiling removal in {CITY}: dust-contained removal or safe encapsulation, Level 5 skim-coat, prime & paint.",
        housing: "We protect floors & vents, set up containment, and keep your {CITY} home or condo clean throughout.",
        trust: "Clear scope, reliable schedule, and a written warranty—plus photo updates for full transparency.",
    };

    const tpl = MAP[slug] || fallback;

    // replace {CITY} with the resolved name (no replaceAll for compatibility)
    const rep = (s) => String(s).replace(/\{CITY\}/g, name);

    return {
        opening: rep(tpl.opening),
        housing: rep(tpl.housing),
        trust: rep(tpl.trust),
    };
}