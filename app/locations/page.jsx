import Link from "next/link";

export const metadata = {
  title: "Locations | EPF Pro Services",
  description: "Keyword-focused renovation location pages with unique content across GTA service areas.",
  alternates: { canonical: "/locations/" },
  robots: { index: true, follow: true },
};

const groups = [
  {
    "cityName": "Toronto",
    "citySlug": "toronto",
    "core": [
      {
        "city": "Toronto",
        "citySlug": "toronto",
        "slug": "toronto-bathroom-renovation",
        "title": "Toronto Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Toronto",
        "citySlug": "toronto",
        "slug": "toronto-basement-renovation",
        "title": "Toronto Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Toronto",
        "citySlug": "toronto",
        "slug": "toronto-home-renovation",
        "title": "Toronto Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": []
  },
  {
    "cityName": "Mississauga",
    "citySlug": "mississauga",
    "core": [
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-bathroom-renovation",
        "title": "Mississauga Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-basement-renovation",
        "title": "Mississauga Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-home-renovation",
        "title": "Mississauga Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": [
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-applewood-bathroom-renovation",
        "title": "Applewood Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-churchill-meadows-bathroom-renovation",
        "title": "Churchill Meadows Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-city-centre-bathroom-renovation",
        "title": "City Centre Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-clarkson-bathroom-renovation",
        "title": "Clarkson Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-cooksville-bathroom-renovation",
        "title": "Cooksville Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-east-credit-bathroom-renovation",
        "title": "East Credit Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-erin-mills-bathroom-renovation",
        "title": "Erin Mills Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-hurontario-bathroom-renovation",
        "title": "Hurontario Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-lakeview-bathroom-renovation",
        "title": "Lakeview Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-lorne-park-bathroom-renovation",
        "title": "Lorne Park Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-malton-bathroom-renovation",
        "title": "Malton Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-meadowvale-bathroom-renovation",
        "title": "Meadowvale Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-meadowvale-village-bathroom-renovation",
        "title": "Meadowvale Village Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-mineola-bathroom-renovation",
        "title": "Mineola Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-port-credit-bathroom-renovation",
        "title": "Port Credit Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-sheridan-bathroom-renovation",
        "title": "Sheridan Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Mississauga",
        "citySlug": "mississauga",
        "slug": "mississauga-streetsville-bathroom-renovation",
        "title": "Streetsville Mississauga Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      }
    ]
  },
  {
    "cityName": "Oakville",
    "citySlug": "oakville",
    "core": [
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-bathroom-renovation",
        "title": "Oakville Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-basement-renovation",
        "title": "Oakville Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-home-renovation",
        "title": "Oakville Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": [
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-bronte-bathroom-renovation",
        "title": "Bronte Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-bronte-creek-bathroom-renovation",
        "title": "Bronte Creek Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-clearview-bathroom-renovation",
        "title": "Clearview Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-college-park-bathroom-renovation",
        "title": "College Park Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-downtown-oakville-bathroom-renovation",
        "title": "Downtown Oakville Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-falgarwood-bathroom-renovation",
        "title": "Falgarwood Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-glen-abbey-bathroom-renovation",
        "title": "Glen Abbey Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-iroquois-ridge-north-bathroom-renovation",
        "title": "Iroquois Ridge North Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-kerr-village-bathroom-renovation",
        "title": "Kerr Village Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-old-oakville-bathroom-renovation",
        "title": "Old Oakville Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-palermo-west-bathroom-renovation",
        "title": "Palermo West Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-river-oaks-bathroom-renovation",
        "title": "River Oaks Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-uptown-core-bathroom-renovation",
        "title": "Uptown Core Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Oakville",
        "citySlug": "oakville",
        "slug": "oakville-west-oak-trails-bathroom-renovation",
        "title": "West Oak Trails Oakville Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      }
    ]
  },
  {
    "cityName": "Burlington",
    "citySlug": "burlington",
    "core": [
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-bathroom-renovation",
        "title": "Burlington Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-basement-renovation",
        "title": "Burlington Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-home-renovation",
        "title": "Burlington Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": [
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-aldershot-bathroom-renovation",
        "title": "Aldershot Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-alton-village-bathroom-renovation",
        "title": "Alton Village Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-brant-bathroom-renovation",
        "title": "Brant Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-brant-hills-bathroom-renovation",
        "title": "Brant Hills Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-elizabeth-gardens-bathroom-renovation",
        "title": "Elizabeth Gardens Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-headon-forest-bathroom-renovation",
        "title": "Headon Forest Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-millcroft-bathroom-renovation",
        "title": "Millcroft Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-mountainside-bathroom-renovation",
        "title": "Mountainside Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-orchard-bathroom-renovation",
        "title": "Orchard Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-palmer-bathroom-renovation",
        "title": "Palmer Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-roseland-bathroom-renovation",
        "title": "Roseland Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-shoreacres-bathroom-renovation",
        "title": "Shoreacres Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-tansley-bathroom-renovation",
        "title": "Tansley Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Burlington",
        "citySlug": "burlington",
        "slug": "burlington-tyandaga-bathroom-renovation",
        "title": "Tyandaga Burlington Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      }
    ]
  },
  {
    "cityName": "Hamilton",
    "citySlug": "hamilton",
    "core": [
      {
        "city": "Hamilton",
        "citySlug": "hamilton",
        "slug": "hamilton-bathroom-renovation",
        "title": "Hamilton Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Hamilton",
        "citySlug": "hamilton",
        "slug": "hamilton-basement-renovation",
        "title": "Hamilton Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Hamilton",
        "citySlug": "hamilton",
        "slug": "hamilton-home-renovation",
        "title": "Hamilton Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": [
      {
        "city": "Hamilton",
        "citySlug": "hamilton",
        "slug": "hamilton-ancaster-bathroom-renovation",
        "title": "Ancaster Hamilton Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Hamilton",
        "citySlug": "hamilton",
        "slug": "hamilton-dundas-bathroom-renovation",
        "title": "Dundas Hamilton Bathroom Renovation",
        "kind": "neighborhood",
        "service": "Bathroom Renovation"
      }
    ]
  },
  {
    "cityName": "Milton",
    "citySlug": "milton",
    "core": [
      {
        "city": "Milton",
        "citySlug": "milton",
        "slug": "milton-bathroom-renovation",
        "title": "Milton Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Milton",
        "citySlug": "milton",
        "slug": "milton-basement-renovation",
        "title": "Milton Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Milton",
        "citySlug": "milton",
        "slug": "milton-home-renovation",
        "title": "Milton Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": []
  },
  {
    "cityName": "Etobicoke",
    "citySlug": "etobicoke",
    "core": [
      {
        "city": "Etobicoke",
        "citySlug": "etobicoke",
        "slug": "etobicoke-bathroom-renovation",
        "title": "Etobicoke Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "Etobicoke",
        "citySlug": "etobicoke",
        "slug": "etobicoke-basement-renovation",
        "title": "Etobicoke Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "Etobicoke",
        "citySlug": "etobicoke",
        "slug": "etobicoke-home-renovation",
        "title": "Etobicoke Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": []
  },
  {
    "cityName": "North York",
    "citySlug": "north-york",
    "core": [
      {
        "city": "North York",
        "citySlug": "north-york",
        "slug": "north-york-bathroom-renovation",
        "title": "North York Bathroom Renovation",
        "kind": "city",
        "service": "Bathroom Renovation"
      },
      {
        "city": "North York",
        "citySlug": "north-york",
        "slug": "north-york-basement-renovation",
        "title": "North York Basement Renovation",
        "kind": "city",
        "service": "Basement Renovation"
      },
      {
        "city": "North York",
        "citySlug": "north-york",
        "slug": "north-york-home-renovation",
        "title": "North York Home Renovation",
        "kind": "city",
        "service": "Home Renovation"
      }
    ],
    "neighborhoods": []
  }
];

export default function LocationsPage() {
  return (
    <div className="container-x py-8 md:py-10">
      <header className="dark-card px-6 py-7 md:px-8 md:py-8">
        <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[var(--reno-accent-soft)]">
          GTA Location Pages
        </p>
        <h1 className="mt-3 max-w-[12ch] text-[38px] font-black uppercase leading-[0.92] text-white display-title md:text-[60px]">
          Renovation Service Areas Across The GTA
        </h1>
        <p className="mt-5 max-w-[48rem] text-[17px] leading-8 text-white/74">
          Browse city and neighbourhood pages for bathroom renovation, basement
          renovation, and home renovation coverage across Mississauga, Toronto,
          Oakville, Burlington, Hamilton, Milton, Etobicoke, and North York.
        </p>
      </header>

      <section className="mt-8 space-y-6">
        {groups.map((g) => (
          <div key={g.citySlug} className="card px-6 py-6 md:px-7">
            <h2 className="text-[30px] font-black uppercase leading-[0.95] text-[var(--reno-ink)] display-title md:text-[38px]">
              {g.cityName}
            </h2>

            <h3 className="mt-5 text-[13px] font-black uppercase tracking-[0.16em] text-[var(--reno-accent-dark)]">
              Core Service Pages
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.core.map((p) => (
                <Link
                  key={p.slug}
                  href={"/locations/" + p.slug + "/"}
                  className="border border-black/10 bg-[var(--reno-paper-soft)] px-4 py-4 text-center text-[14px] font-bold leading-6 text-[var(--reno-ink)] transition hover:bg-white"
                >
                  {p.title}
                </Link>
              ))}
            </div>

            {g.neighborhoods.length > 0 && (
              <>
                <h3 className="mt-6 text-[13px] font-black uppercase tracking-[0.16em] text-[var(--reno-accent-dark)]">
                  Neighbourhood Bathroom Renovation Pages
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.neighborhoods.map((p) => (
                    <Link
                      key={p.slug}
                      href={"/locations/" + p.slug + "/"}
                      className="border border-black/10 bg-[var(--reno-paper-soft)] px-3 py-2 text-[13px] font-bold leading-6 text-[var(--reno-ink)] transition hover:bg-white"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
