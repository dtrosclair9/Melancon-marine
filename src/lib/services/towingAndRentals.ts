import type { ServicePage } from './types'

export const towingAndRentals: ServicePage[] = [
  {
    slug: 'marine-towing-and-transportation-louisiana',
    navLabel: 'Marine Towing & Transportation',
    h1: 'Marine Towing & Transportation in Louisiana',
    title: 'Tug & Barge Towing in Louisiana',
    description:
      'Inland tug and barge towing and marine transportation on the ICW, Bayou Lafourche, and the Port Fourchon corridor. Two 1,200 HP tugs based in Larose, LA.',
    heroImage: '/images/hero-towing.jpg',
    heroAlt: 'Push tugboat moving a loaded deck barge down a South Louisiana bayou at dusk',
    kicker: 'Tug & Barge Towing',
    intro: [
      "Melancon Marine runs two 1,200 HP tugboats out of Larose, on Bayou Lafourche. We tow and shift barges on the Intracoastal Waterway, Bayou Lafourche, and the canals across Lafourche and Terrebonne Parishes, and we move equipment down the LA-1 corridor to Port Fourchon.",
      "We handle barge moves, equipment transportation, dredge and construction support, and standby tow work for contractors who don't run their own boats. Our spud barges, excavators, crew boats, and airboats stage at the same yard, so if the job needs more than a tow, we can send the rest of the equipment with it.",
    ],
    specChips: ['2× 1,200 HP TUGS', 'ICW + BAYOU LAFOURCHE', 'FOURCHON CORRIDOR', 'FLEET EXPANDING'],
    whyUs: [
      {
        heading: 'Based where the work is',
        body: "Larose sits where Bayou Lafourche crosses the Intracoastal Waterway, about half an hour up LA-1 from Port Fourchon. Most of the jobs we tow for are a short run from our dock, so you're paying for the tow, not for the boat to get to you.",
      },
      {
        heading: 'The right size boats for inland work',
        body: "1,200 HP is a good fit for this water. The boats have enough push for loaded deck and spud barges, and they're small enough to work the narrow bayous and canals where bigger tugs can't go.",
      },
      {
        heading: 'Towing plus the equipment behind it',
        body: "Most tows are part of a bigger job. There are piles to drive, material to move, or a dock to build. We own the barges, excavators, crew boats, and airboats too, so the tow and the equipment can come from the same place.",
      },
      {
        heading: 'You talk to the person running the boats',
        body: "Melancon Marine is owner-operated. When you call about a tow, you're talking to someone who knows where the boats are, what they can handle, and what the water is doing this week. Scope, timing, and rate get settled in one call.",
      },
    ],
    included: [
      { title: 'Barge towing & shifting', detail: 'Deck barges, spud barges, and hopper barges moved from point to point or repositioned on the job.' },
      { title: 'Equipment transportation', detail: "Excavators, cranes, and construction equipment delivered by water when there's no road to the site." },
      { title: 'Dredge & construction support', detail: 'Tender work, material barge rotation, and standby support for dredging and construction crews.' },
      { title: 'Fleet work', detail: 'Short shifts, staging, and harbor moves along Bayou Lafourche and the ICW.' },
      { title: 'Project mobilization', detail: 'Tug, barge, and equipment delivered together and set up to work.' },
      { title: 'Standby & support towing', detail: 'A tug on call for jobs where weather and water set the schedule.' },
    ],
    process: [
      { title: 'Tell us the move', detail: 'What needs to go where, what it weighs, and when it needs to be there.' },
      { title: 'We check the route', detail: 'Water depth, bridge clearances, and lock timing between the two points.' },
      { title: 'You get a price', detail: 'A written quote for the tow before anything moves.' },
      { title: 'We move it', detail: 'The tug picks up, runs the route, and delivers. We keep you posted along the way.' },
    ],
    extraSection: {
      heading: 'Marine equipment brokering',
      body: [
        "We also broker marine equipment: tugs, barges, workboats, and support gear. If you're looking to buy or sell, or you need a piece of equipment we don't have in the fleet, we'll work our contacts across the Gulf Coast to track it down or find it a buyer.",
        "Call with what you have or what you need and we'll tell you what we can do.",
      ],
    },
    serviceArea:
      'Tug and barge service on the Intracoastal Waterway, Bayou Lafourche, and connecting waters across Lafourche Parish, Terrebonne Parish, Port Fourchon, Houma, Morgan City, and South Louisiana.',
    faqs: [
      {
        q: 'What size tows can your tugboats handle?',
        a: "Our tugs are 1,200 HP inland pushboats, sized for deck barges, spud barges, and hopper barges on the ICW and bayou systems. Give us the barge dimensions, the load, and the route, and we'll tell you quickly whether our boats fit the tow.",
      },
      {
        q: 'How much does tug and barge towing cost in Louisiana?',
        a: "Towing is usually priced by the day or by the move. The main factors are distance, transit time, the size of the tow, and whether the tug stays on site. Call (985) 691-4591 with the origin, destination, and load and we'll quote it.",
      },
      {
        q: 'What waterways do you operate on?',
        a: "The Gulf Intracoastal Waterway, Bayou Lafourche, and the connected canals and bayous across Lafourche and Terrebonne Parishes, including the run down to Port Fourchon and over to Houma and Morgan City. If your job is on water we haven't named, call and ask.",
      },
      {
        q: 'Can you move construction equipment to a site without road access?',
        a: "Yes. We load excavators and other equipment on our barges and deliver them by water. For a lot of bayou and marsh jobs it's the only practical way in, and the barge can stay on site as a work platform.",
      },
      {
        q: 'Do you tow for other marine companies, or only for your own projects?',
        a: 'Both. Most of our towing is hire work for contractors, dredging companies, and equipment owners. The same tugs also deliver our own rental barges and construction equipment.',
      },
      {
        q: 'How far in advance do I need to schedule a tow?',
        a: "For planned moves, the earlier the better. We keep room for short-notice work too, so if a barge has to move this week, call today and we'll tell you what's available.",
      },
    ],
    related: [
      { href: '/services/spud-barge-rental-louisiana', label: 'Spud Barge Rental' },
      { href: '/services/equipment-rentals-louisiana', label: 'Marine Equipment Rentals' },
      { href: '/services/marine-construction-louisiana', label: 'Marine Construction' },
    ],
    serviceType: 'Marine towing and transportation',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Port Fourchon', 'Houma', 'Morgan City'],
    gallery: [
      { src: '/images/tug-transport-lowboy.jpg', alt: 'Melancon Marine tugboat in transport on a lowboy trailer in South Louisiana' },
      { src: '/images/bayou-waterfront-spud-barge.jpg', alt: 'Working waterfront on Bayou Lafourche with barge and tug traffic' },
      { src: '/images/tug-pushing-spud-barge.jpg', alt: 'Tugboat pushing a spud barge along a Louisiana waterway' },
    ],
  },
  {
    slug: 'equipment-rentals-louisiana',
    navLabel: 'Equipment Rentals',
    h1: 'Marine Equipment Rentals in Louisiana',
    title: 'Marine Equipment Rentals in Louisiana',
    description:
      'Spud barges, tugboats, crew boats, airboats, and long-reach excavators for rent from Larose, LA. Delivered by our own tugs to job sites across South Louisiana.',
    heroImage: '/images/hero-fleet.jpg',
    heroAlt: 'Marine fleet staging dock in South Louisiana with spud barge, crew boats, and tugboat at golden hour',
    kicker: 'The Rental Fleet',
    intro: [
      "Melancon Marine rents marine equipment out of Larose: spud barges with excavators on deck, 1,200 HP tugboats, aluminum crew boats built by Hanko's, and airboats. We deliver rentals to your job site with our own tugs.",
      "You can rent one piece or a full setup. A common package is a spud barge with a long-reach excavator on deck, towed to your site and spudded down. The fleet is still growing, so if you need something that isn't listed here, ask.",
    ],
    specChips: ['2× SPUD BARGES', '2× 1,200 HP TUGS', "2× HANKO'S CREW BOATS", '2× AIRBOATS', 'LONG-REACH ABOARD'],
    whyUs: [
      {
        heading: 'Delivery is in the quote',
        body: "Getting a barge to the job site is usually the hard part of a rental. Our tugs deliver what we rent, and the delivery is priced in the same quote. The equipment stays our responsibility from our dock to your site and back.",
      },
      {
        heading: 'Packages that match real jobs',
        body: 'Most water jobs need a platform, a machine with reach, and a way to move people. We rent that combination because we use that combination on our own construction work.',
      },
      {
        heading: 'Maintained by the crew that runs it',
        body: "This equipment works our own jobs between rentals. It's maintained by the people who depend on it, and it goes out ready to work.",
      },
      {
        heading: 'Set up for Louisiana water',
        body: 'Shallow bayous, soft bottom, narrow canals, and tides that change the plan. The fleet is sized for the water down here because this is where it works every week.',
      },
    ],
    included: [
      { title: 'Spud barges', detail: 'Work platforms that hold position without anchors, for pile driving, dredge support, and waterside construction.' },
      { title: 'Tugboats', detail: '1,200 HP pushboats for tows, shifts, and on-site support.' },
      { title: 'Long-reach excavators', detail: 'Barge-mounted reach for canal, marsh, and shoreline work.' },
      { title: "Hanko's crew boats", detail: 'Aluminum crew boats with twin Yamaha outboards for crew and light-cargo runs.' },
      { title: 'Airboats', detail: "Access to marsh and flooded ground that conventional boats can't reach." },
      { title: 'Full packages', detail: 'Barge, excavator, tug, and crew boat delivered together.' },
    ],
    process: [
      { title: 'Describe the job', detail: 'The work, the water, the dates, and anything unusual about the site.' },
      { title: 'Pick the equipment', detail: 'We match equipment to the job and flag anything the site will fight you on.' },
      { title: 'We deliver', detail: 'Our tugs bring the equipment to your job site, positioned and ready.' },
      { title: 'Work and return', detail: 'Run it for the term you need. We pick it up when the job wraps.' },
    ],
    serviceArea:
      'Rental equipment delivered by water across South Louisiana: Lafourche and Terrebonne Parishes, Port Fourchon, Houma, Morgan City, the ICW corridor, and coastal project sites statewide.',
    faqs: [
      {
        q: 'What marine equipment do you rent?',
        a: "Spud barges (with long-reach excavators available on deck), 1,200 HP tugboats, aluminum crew boats built by Hanko's with twin Yamaha outboards, and airboats. Everything rents individually or as a package, and the fleet is expanding.",
      },
      {
        q: 'How much does marine equipment rental cost?',
        a: "Rates depend on the equipment, the rental term, delivery distance, and whether you need it bare or with support. Daily, weekly, and monthly terms all work. Call (985) 691-4591 with the job and dates and we'll quote it.",
      },
      {
        q: 'Do you deliver rental equipment to the job site?',
        a: "Yes. Delivery by our own tugboats is how most of our barge and equipment rentals go out, and it's quoted up front with the rental. The equipment stays our responsibility from our dock to your site and back.",
      },
      {
        q: 'Can I rent equipment with an operator?',
        a: "Depends on the equipment and the job. We can talk through a bare rental or supplying it with support. Tell us what your crew is set up to run and we'll figure out what makes sense.",
      },
      {
        q: 'What projects is your rental fleet used for?',
        a: 'Dredging support, coastal restoration, pile driving and bulkhead jobs, dock construction, pipeline and right-of-way work, surveys, and marsh access. If your project touches the water in South Louisiana, this equipment has probably done a similar job.',
      },
      {
        q: 'What is the minimum rental period?',
        a: "It depends on the equipment and the mobilization involved. A short local job and a three-month standing rental are both realistic. Call with your dates and we'll tell you what makes sense for the piece you need.",
      },
    ],
    related: [
      { href: '/services/spud-barge-rental-louisiana', label: 'Spud Barge Rental' },
      { href: '/services/crew-boat-rental-louisiana', label: 'Crew Boat Rental' },
      { href: '/services/long-reach-excavator-rental-louisiana', label: 'Long-Reach Excavator Rental' },
    ],
    serviceType: 'Marine equipment rental',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Port Fourchon', 'Houma', 'Morgan City'],
    gallery: [
      { src: '/images/airboat-crew-boat-boathouse.jpg', alt: 'Airboat and aluminum crew boat staged under the boathouse in Larose Louisiana' },
      { src: '/images/excavator-barge-bayou.jpg', alt: 'Excavator working from a deck barge on a Louisiana bayou' },
      { src: '/images/excavator-hopper-barge.jpg', alt: 'Excavator loading a hopper barge on a South Louisiana job site' },
    ],
  },
  {
    slug: 'spud-barge-rental-louisiana',
    navLabel: 'Spud Barge Rentals',
    h1: 'Spud Barge Rental in Louisiana',
    title: 'Spud Barge Rental in Louisiana',
    description:
      'Spud barge rentals with long-reach excavators available aboard, delivered by our own tugs from Larose, LA. Serving marine contractors and dredging crews statewide.',
    heroImage: '/images/hero-pile-driving.jpg',
    heroAlt: 'Spud barge with crane working on a South Louisiana bayou at golden hour',
    kicker: 'The Working Platform',
    intro: [
      'A spud barge is a deck barge with steel spuds that drop to the bottom and hold it in place without anchors. It gives excavators, cranes, and pile-driving rigs a stable platform, it holds position in current, and it can be repositioned in minutes as the work moves.',
      "We rent spud barges out of Larose, bare or with a long-reach excavator already on deck, and we deliver them with our own 1,200 HP tugs. One quote covers the barge, the machine, and the tow.",
    ],
    specChips: ['2× SPUD BARGES', 'EXCAVATORS ABOARD', 'TUG DELIVERY', 'STATEWIDE'],
    whyUs: [
      {
        heading: 'Barge, machine, and tug in one quote',
        body: "A lot of yards rent you a bare barge and leave the tug and excavator to you. We own all three, so we quote them together.",
      },
      {
        heading: 'Close to the coastal work',
        body: 'From Larose our tugs can reach most of Lafourche and Terrebonne Parishes and the ICW corridor in a short run. That keeps mobilization cost down on coastal restoration, dredge support, and bulkhead jobs.',
      },
      {
        heading: 'We work off these barges ourselves',
        body: 'Our own pile-driving and construction crews use the same barges we rent out. The decks, spud winches, and rigging stay maintained because our own work depends on them.',
      },
      {
        heading: 'A straight answer on fit',
        body: "A spud barge isn't right for every job. Tell us the water depth, the bottom, and the load, and we'll tell you whether ours fit the work or whether you need something we'd have to source for you.",
      },
    ],
    included: [
      { title: 'Spudded positioning', detail: 'Steel spuds hold the barge on station without anchor spreads or constant repositioning.' },
      { title: 'Long-reach excavator option', detail: 'Rent the barge with the machine already loaded and rigged.' },
      { title: 'Tug delivery & pickup', detail: 'Our 1,200 HP tugs deliver, shift, and retrieve the barge on your schedule.' },
      { title: 'Crane & rig support', detail: 'A stable deck for pile hammers, cranes, and drilling rigs.' },
      { title: 'Dredge support duty', detail: 'Material handling and equipment staging alongside dredging operations.' },
      { title: 'On-site shifts', detail: 'Need the barge walked down the bulkhead line? The tug that delivered it can stay.' },
    ],
    process: [
      { title: 'Scope the platform', detail: 'Water depth, load, and what sits on deck: excavator, hammer, crane, or material.' },
      { title: 'Get a quote', detail: 'Barge, equipment aboard, and tug delivery quoted together.' },
      { title: 'Spud down on site', detail: 'We deliver and position the barge where the work is.' },
      { title: 'Shift or retrieve', detail: 'We move the barge as the job advances and pull it when you finish.' },
    ],
    serviceArea:
      'Spud barges delivered across South Louisiana: Bayou Lafourche, the ICW, Port Fourchon, Houma, Morgan City, and coastal restoration and dredging sites statewide.',
    faqs: [
      {
        q: 'What is a spud barge used for?',
        a: "A spud barge is a deck barge with vertical steel spuds that drop into the bottom and hold it in place. Contractors use them as floating work platforms for pile driving, bulkhead and dock construction, dredge support, crane work, and equipment staging where you can't work from land.",
      },
      {
        q: 'How much does it cost to rent a spud barge in Louisiana?',
        a: 'Pricing depends on the rental term, whether an excavator or other equipment rides on deck, and the tow distance to your site. Day, week, and month terms are available. Call (985) 691-4591 with the job location and dates for a package quote covering barge, equipment, and delivery.',
      },
      {
        q: 'Do your spud barges come with an excavator?',
        a: 'They can. We rent bare spud barges, and we rent them with a long-reach excavator already loaded and rigged. Taking the package saves you a separate equipment mobilization.',
      },
      {
        q: 'How is the barge delivered to my job site?',
        a: 'Our own 1,200 HP tugboats tow the barge from Larose to your site, position it, and set the spuds. When the job moves down the shoreline, the same tug can shift the barge, and when the job ends we retrieve it.',
      },
      {
        q: 'Can a spud barge work in shallow bayous and marsh?',
        a: "Shallow, protected water is what these barges are for. Draft depends on the load aboard, so give us the water depths on your site and we'll confirm the fit before anything mobilizes.",
      },
      {
        q: 'Who rents spud barges?',
        a: "Marine construction contractors, dredging companies, coastal restoration crews, pipeline and utility contractors, and pile-driving crews. If you're not sure whether the job needs a spud barge or a different setup, call and describe the work.",
      },
    ],
    related: [
      { href: '/services/long-reach-excavator-rental-louisiana', label: 'Long-Reach Excavator Rental' },
      { href: '/services/marine-towing-and-transportation-louisiana', label: 'Marine Towing & Transportation' },
      { href: '/services/marine-construction-louisiana', label: 'Marine Construction' },
    ],
    serviceType: 'Spud barge rental',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Port Fourchon', 'Houma', 'Morgan City'],
    gallery: [
      { src: '/images/tug-pushing-spud-barge.jpg', alt: 'Tug positioning a spud barge on a Lafourche Parish waterway' },
      { src: '/images/excavator-barge-bayou.jpg', alt: 'Barge-mounted excavator working a bayou job site in South Louisiana' },
      { src: '/images/barge-deck-marsh.jpg', alt: 'Spud barge deck working close against Louisiana marsh vegetation' },
    ],
  },
]
