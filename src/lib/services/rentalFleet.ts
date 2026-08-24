import type { ServicePage } from './types'

export const rentalFleet: ServicePage[] = [
  {
    slug: 'crew-boat-rental-louisiana',
    navLabel: 'Crew Boat Rentals',
    h1: 'Crew Boat Rental in Louisiana',
    title: 'Crew Boat Rental in Louisiana',
    description:
      "Aluminum crew boats built by Hanko's with twin Yamaha outboards, for crew transport, survey support, and light cargo runs from Larose, LA to South Louisiana job sites.",
    heroImage: '/images/airboat-crew-boat-boathouse.jpg',
    heroAlt: "Hanko's-built aluminum crew boat staged in the boathouse at Larose Louisiana",
    kicker: 'Crew Boats',
    intro: [
      "We rent aluminum crew boats built by Hanko's in Berwick, Louisiana, each with twin Yamaha outboards, an enclosed cabin, and open deck space. They're set up for moving crews, tools, and light cargo on inland and near-coastal water.",
      'The boats support dredging crews, construction jobs, survey teams, and work along the Port Fourchon corridor. They rent by the day, week, or month, on their own or alongside our barges and tugs.',
    ],
    specChips: ["2× HANKO'S BUILT", 'TWIN YAMAHA OUTBOARDS', 'ALUMINUM HULL', 'SHALLOW DRAFT'],
    whyUs: [
      {
        heading: 'Built for this coast',
        body: "Hanko's builds heavy-duty aluminum workboats one parish over in Berwick, and they hold up to daily use in shallow, rough water. Twin Yamaha outboards keep maintenance simple and the boats dependable.",
      },
      {
        heading: 'Short runs from Larose',
        body: "We're on Bayou Lafourche near the ICW, about half an hour from Port Fourchon. For projects in Lafourche and Terrebonne Parishes, the boat isn't spending half the day getting to you.",
      },
      {
        heading: 'Rents with the rest of the fleet',
        body: 'Crew boats usually work alongside a barge or a tug. We can quote the boat, the barge, and the tow together.',
      },
      {
        heading: 'Matched to the job',
        body: "Crew size, gear, and run distance decide which boat works. Tell us what a normal day looks like on your job and we can confirm which boat fits and how to set up the rental.",
      },
    ],
    included: [
      { title: 'Crew transport', detail: 'Daily runs moving workers between docks, barges, and remote job sites.' },
      { title: 'Survey support', detail: 'A stable, maneuverable platform for hydrographic and coastal survey teams.' },
      { title: 'Light cargo runs', detail: 'Tools, parts, groceries, and small equipment delivered to crews on the water.' },
      { title: 'Dredge & project support', detail: 'Tender duty alongside dredging and construction operations.' },
      { title: 'Enclosed cabins', detail: 'Crews stay dry and out of the sun between runs.' },
      { title: 'Open deck space', detail: 'Room aft for gear, coolers, and whatever else the job hauls along.' },
    ],
    process: [
      { title: 'Describe the runs', detail: 'Where crews stage, where they work, and how many trips a day the job takes.' },
      { title: 'Match the boat', detail: 'We confirm capacity, draft, and rigging against your project.' },
      { title: 'Set the term', detail: 'Day, week, or month, with the support level the job needs.' },
      { title: 'Boat on station', detail: 'The boat positions where your project needs it, on your schedule.' },
    ],
    serviceArea:
      'Crew boat service from Larose across Bayou Lafourche, the ICW, Port Fourchon, Houma, Grand Isle, and job sites throughout coastal Louisiana.',
    faqs: [
      {
        q: 'What crew boats do you rent?',
        a: "Aluminum crew boats built by Hanko's in Berwick, Louisiana, each powered by twin Yamaha outboards, with enclosed cabins and open working decks. They're rigged for crew transport, survey work, and light cargo on inland and near-coastal water.",
      },
      {
        q: 'How much does crew boat rental cost in Louisiana?',
        a: "Rates depend on the term, the run schedule, and the support the job needs. Daily through monthly terms are available. Call (985) 691-4591 with your project location and crew schedule and we'll quote it.",
      },
      {
        q: 'How many people can your crew boats carry?',
        a: "It depends on the boat, the gear aboard, and the kind of run, so we confirm capacity against your specific job before quoting it. Tell us your crew size and daily schedule and we'll tell you what the boats can do.",
      },
      {
        q: 'Can your crew boats work shallow bayous and marsh edges?',
        a: "Yes. Shallow-draft aluminum hulls with outboard power are made for that water. For marsh interiors where even an outboard can't follow, we pair crew boats with our airboats so your people can get all the way to the work.",
      },
      {
        q: 'Do you serve Port Fourchon projects?',
        a: 'Yes. Larose is a 30-minute run down LA-1 from Port Fourchon, and work along that corridor is a big part of what these boats do, along with jobs across Lafourche and Terrebonne Parishes.',
      },
      {
        q: 'Can I rent a crew boat together with a barge or tug?',
        a: 'Yes, and most rentals go out that way. Crew boat, spud barge, excavator, and tug can be quoted together, which keeps mobilization simple.',
      },
    ],
    related: [
      { href: '/services/equipment-rentals-louisiana', label: 'Marine Equipment Rentals' },
      { href: '/services/airboat-rental-louisiana', label: 'Airboat Rental' },
      { href: '/services/marine-services-port-fourchon-la', label: 'Port Fourchon Services' },
    ],
    serviceType: 'Crew boat rental',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Port Fourchon', 'Grand Isle', 'Houma'],
    gallery: [
      { src: '/images/crew-boat-deck.jpg', alt: "Deck and cabin of a Hanko's-built aluminum crew boat at the Larose dock" },
      { src: '/images/bayou-waterfront-spud-barge.jpg', alt: 'Bayou Lafourche working waterfront near the Melancon Marine dock' },
      { src: '/images/tugs-lift-bridge.jpg', alt: 'Workboats passing the lift bridge on a South Louisiana waterway' },
    ],
  },
  {
    slug: 'long-reach-excavator-rental-louisiana',
    navLabel: 'Long-Reach Excavator Rentals',
    h1: 'Long-Reach Excavator Rental in Louisiana',
    title: 'Long Reach Excavator Rental in Louisiana',
    description:
      'Barge-mounted long-reach excavator rentals for canal cleaning, marsh work, and shoreline projects. Delivered on our spud barges by our own tugs from Larose, LA.',
    heroImage: '/images/excavator-waterside.jpg',
    heroAlt: 'Long-reach excavator working at the water edge on a South Louisiana job site',
    heroPosition: 'object-[center_75%]',
    kicker: 'Long-Reach Work',
    intro: [
      "A long-reach excavator has an extended boom and stick that let it dig well past a standard machine's reach. On water jobs that means one setup can cover a full canal section or shoreline slope without repositioning all day.",
      'We rent long-reach excavators mounted on our spud barges and delivered by our own tugs, so the machine shows up floating, positioned, and ready to dig. Common uses are canal cleaning, shoreline work, marsh restoration, and dredge support.',
    ],
    specChips: ['LONG-REACH BOOM', 'BARGE-MOUNTED', 'SPUD BARGE PAIRING', 'TUG DELIVERED'],
    whyUs: [
      {
        heading: 'The machine and the barge together',
        body: "On this coast a long-reach excavator usually needs a floating platform under it. We quote the machine, the spud barge, and the tug delivery together, with no separate barge and tow for you to arrange.",
      },
      {
        heading: 'Sized for bayou and marsh jobs',
        body: "Extended reach matters most on narrow canals, soft banks, and marsh edges where the machine can't walk closer to the work. The barge draft is shallow, the spuds hold it steady, and the boom covers the cut from mid-channel.",
      },
      {
        heading: 'These machines work our own jobs',
        body: 'These excavators clean canals and shape shorelines on our own jobs between rentals. The crew that runs them maintains them and preps them before your rental goes out.',
      },
      {
        heading: 'Easy to scale up',
        body: 'If the job grows, we can add a second barge for material, a tug to rotate hopper barges, an airboat for spotters, or a crew boat for personnel.',
      },
    ],
    included: [
      { title: 'Extended reach digging', detail: 'Boom and stick configured to work well beyond a standard excavator arm.' },
      { title: 'Spud barge platform', detail: 'A pinned, stable deck that holds grade while the machine works.' },
      { title: 'Canal & ditch cleaning', detail: 'Vegetation, spoil, and sediment pulled from channels and drainage canals.' },
      { title: 'Shoreline & bank work', detail: 'Grading, shaping, and armoring along bayou and canal banks.' },
      { title: 'Marsh restoration support', detail: 'Material placement and excavation on coastal restoration sites.' },
      { title: 'Material handling', detail: 'Loading hopper barges and moving spoil alongside dredge operations.' },
    ],
    process: [
      { title: 'Walk the water', detail: 'Channel widths, depths, spoil plans, and what the machine has to reach.' },
      { title: 'Get a quote', detail: 'Machine, barge, and tug delivery priced together.' },
      { title: 'Float it in', detail: 'The excavator arrives on the barge, spuds down, and starts digging.' },
      { title: 'Advance the cut', detail: 'Our tug shifts the barge along the job as the work moves.' },
    ],
    serviceArea:
      'Barge-mounted excavation across South Louisiana: Lafourche and Terrebonne Parish canals and bayous, coastal restoration sites, and ICW-connected job sites statewide.',
    faqs: [
      {
        q: 'What is a long-reach excavator?',
        a: 'A long-reach excavator is a standard excavator fitted with an extended boom and stick. It trades some bucket size for a lot more horizontal and vertical reach, which is what lets one setup dig a full canal section or shoreline slope without constant repositioning.',
      },
      {
        q: 'How much does long-reach excavator rental cost in Louisiana?',
        a: "The rate depends on the term, whether the machine goes out barge-mounted, and the tow distance to your site. Most rentals go out as a machine-plus-barge package with delivery in the same quote. Call (985) 691-4591 with the scope and we'll price it.",
      },
      {
        q: 'Can I rent the excavator on a barge?',
        a: "Yes, and that's how most of ours go out. The machine loads onto one of our spud barges, our tug delivers and positions it, and the spuds hold it while the machine digs. It's the practical way to excavate where there's no land access.",
      },
      {
        q: 'What jobs use a barge-mounted long-reach excavator?',
        a: 'Canal and ditch cleaning, shoreline grading and protection, marsh and coastal restoration, dredge support, dock and bulkhead demolition, and material handling on the water. If the dig site is surrounded by water or soft marsh, this is usually the machine that reaches it.',
      },
      {
        q: 'Do you rent long-reach excavators with an operator?',
        a: "Depends on the job. We can talk through a bare rental or supplying the machine with support. Tell us what your crew runs day to day and we'll set it up accordingly.",
      },
      {
        q: 'How does the excavator get to a site with no road access?',
        a: "The machine loads on our barge and our tug tows it in. Water delivery is the point of the package for sites without road access.",
      },
    ],
    related: [
      { href: '/services/spud-barge-rental-louisiana', label: 'Spud Barge Rental' },
      { href: '/services/marine-construction-louisiana', label: 'Marine Construction' },
      { href: '/services/equipment-rentals-louisiana', label: 'Marine Equipment Rentals' },
    ],
    serviceType: 'Long-reach excavator rental',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Houma', 'Morgan City'],
    gallery: [
      { src: '/images/excavator-barge-bayou.jpg', alt: 'Excavator on a barge working a narrow Louisiana bayou' },
      { src: '/images/excavator-hopper-barge.jpg', alt: 'Excavator loading spoil into a hopper barge in South Louisiana' },
      { src: '/images/pile-driving-barge.jpg', alt: 'Long-reach excavator on a spud barge alongside a pile-driving rig in South Louisiana' },
    ],
  },
  {
    slug: 'airboat-rental-louisiana',
    navLabel: 'Airboat Rentals',
    h1: 'Airboat Rental in Louisiana',
    title: 'Airboat Rental & Services in Louisiana',
    description:
      'Working airboat rentals for marsh access, pipeline and ROW support, surveys, and wetland crew transport across South Louisiana, based in Larose on Bayou Lafourche.',
    heroImage: '/images/airboat-parked.jpg',
    heroAlt: 'Melancon Marine working airboat staged at the yard in Larose Louisiana',
    kicker: 'Marsh Access',
    intro: [
      "Much of coastal Louisiana is too shallow for a regular boat and too soft to drive on. Our airboats cover that terrain. We run two working airboats out of Larose for pipeline and right-of-way support, survey crews, environmental work, and crew transport into the marsh.",
      "The boats are rigged for work, carrying crews and equipment, and they often serve as the access leg of a bigger job alongside our barges and excavators.",
    ],
    specChips: ['2× AIRBOATS', 'MARSH ACCESS', 'ROW SUPPORT', 'CREW + GEAR'],
    whyUs: [
      {
        heading: 'Rigged for work',
        body: 'Our airboats support pipelines, surveys, spraying, and construction jobs. They carry crews, instruments, spray rigs, and supplies, with deck space and tie-downs for the load.',
      },
      {
        heading: 'We run these marshes year-round',
        body: 'Water levels out here change daily. We run these marshes year-round and plan routes off current conditions.',
      },
      {
        heading: 'Works with the rest of the fleet',
        body: 'Airboats often spot for a barge-mounted excavator, ferry crews to a spray job, or support a survey ahead of construction. Renting from the yard that owns the rest of the equipment keeps the job coordinated.',
      },
      {
        heading: 'Weather and water calls',
        body: "Wind, water level, and load decide what an airboat can safely do on a given day. If conditions call for a different plan, we make that call before your crew is standing at the launch.",
      },
    ],
    included: [
      { title: 'Marsh & wetland access', detail: 'Crew and equipment transport across flooded grass, mud flats, and shallow ponds.' },
      { title: 'Pipeline & ROW support', detail: 'Inspection, maintenance, and construction support along wetland rights-of-way.' },
      { title: 'Survey crew transport', detail: 'Getting instruments and technicians to stations no truck or boat can reach.' },
      { title: 'Environmental & restoration work', detail: 'Support for sampling, monitoring, and coastal restoration crews.' },
      { title: 'Spray platform duty', detail: 'The same boats carry our herbicide spray rigs for vegetation control work.' },
      { title: 'Emergency access', detail: 'Reaching camps, equipment, and infrastructure when high water cuts them off.' },
    ],
    process: [
      { title: 'Map the access', detail: 'Where crews start, where they need to get to, and what rides along.' },
      { title: 'Check conditions', detail: 'We check water levels and marsh conditions for your dates.' },
      { title: 'Set the arrangement', detail: 'Boat, term, and support level matched to the job.' },
      { title: 'Run the marsh', detail: 'Your crew and gear get to the work and back, every day of the job.' },
    ],
    serviceArea:
      'Airboat operations across the marshes of Lafourche and Terrebonne Parishes, the Barataria Basin, and wetland job sites throughout coastal Louisiana.',
    faqs: [
      {
        q: 'What do contractors use airboat rentals for?',
        a: 'Pipeline and right-of-way inspection and support, survey crew transport, environmental sampling, marsh spraying, hunting-lease and land-management access, and moving crews to wetland construction sites. If the destination is marsh, an airboat is usually the only way in.',
      },
      {
        q: 'How much does airboat rental cost in Louisiana?',
        a: "It depends on the term, the running distance, and whether the boat goes out with support. Call (985) 691-4591 with the job location and schedule and we'll give you a number.",
      },
      {
        q: 'How shallow can an airboat run?',
        a: 'Airboats are pushed by air instead of a submerged propeller, so they run across inches of water and slide over wet grass and mud that would strand any regular boat. Load and conditions still matter, so we confirm routes against current water levels before a job.',
      },
      {
        q: 'Can your airboats carry equipment as well as people?',
        a: "Yes. The boats have open deck space for tools, instruments, spray rigs, and supplies. Tell us the load and we'll confirm the setup that carries it.",
      },
      {
        q: 'Do you rent airboats for herbicide spraying work?',
        a: 'Spraying is its own service with our own rigs. If your project involves marsh or canal vegetation control, see our airboat herbicide spraying page or call and we can scope the treatment work directly.',
      },
      {
        q: 'What areas do your airboats cover?',
        a: 'We stage from Larose and work the marshes of Lafourche and Terrebonne Parishes, the Barataria Basin, and wetland sites across coastal Louisiana. For distant jobs, the boats trailer to the nearest launch and run from there.',
      },
    ],
    related: [
      { href: '/services/airboat-herbicide-spraying-louisiana', label: 'Airboat Herbicide Spraying' },
      { href: '/services/crew-boat-rental-louisiana', label: 'Crew Boat Rental' },
      { href: '/services/equipment-rentals-louisiana', label: 'Marine Equipment Rentals' },
    ],
    serviceType: 'Airboat rental and marsh access services',
    areaServed: ['Louisiana', 'Lafourche Parish', 'Terrebonne Parish', 'Barataria Basin'],
    gallery: [
      { src: '/images/airboat-parked.jpg', alt: 'Melancon Marine working airboat staged on the grass in Larose' },
      { src: '/images/airboat-trailer.jpg', alt: 'Melancon Marine airboat on its trailer ready to mobilize from Larose' },
      { src: '/images/airboat-crew-boat-boathouse.jpg', alt: 'Airboat under the boathouse at the Melancon Marine yard' },
    ],
  },
]
