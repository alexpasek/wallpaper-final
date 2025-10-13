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