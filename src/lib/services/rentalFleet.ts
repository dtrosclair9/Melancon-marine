import type { ServicePage } from './types'

export const rentalFleet: ServicePage[] = [
  {
    slug: 'crew-boat-rental-louisiana',
    navLabel: 'Crew Boat Rentals',
    h1: 'Crew Boat Rental in Louisiana',
    title: 'Crew Boat Rental in Louisiana',
    description:
      "Aluminum crew boats built by Hanko's with twin Yamaha outboards, for crew transport, survey support, and light cargo runs from Larose, LA to South Louisiana job sites.",
    heroImage: '/images/crew-boat-deck.jpg',
    heroAlt: 'Aluminum crew boat deck and cabin at the Melancon Marine dock in Larose Louisiana',
    kicker: 'Crew on the Water',
    intro: [
      "A marine job only moves as fast as the people getting to it. Melancon Marine rents aluminum crew boats built by Hanko's, the Berwick, Louisiana boat builder whose heavy-duty workboats are a fixture on this coast, each running twin Yamaha outboards and rigged for the daily grind of moving crews, tools, and light cargo across South Louisiana water.",
      'These are working boats for working jobs: shallow-draft aluminum hulls that handle bayou and near-coastal runs, cabins that keep a crew dry in weather, and open deck space for the gear that rides along. They support dredging operations, construction crews, survey teams, and projects staging out of the Port Fourchon corridor.',
    ],
    specChips: ["2× HANKO'S BUILT", 'TWIN YAMAHA OUTBOARDS', 'ALUMINUM HULL', 'SHALLOW DRAFT'],
    whyUs: [
      {
        heading: 'Louisiana-built for Louisiana water',
        body: "Hanko's aluminum hulls are built one parish over in Berwick for exactly this coast: skinny water, oyster bottoms, chop on the open stretches, and daily hard use. Twin Yamaha outboards mean straightforward maintenance and dependable starts at 5 a.m., which is when crew boats earn their keep.",
      },
      {
        heading: 'Positioned on the Fourchon corridor',
        body: 'From Larose, our boats reach the LA-1 corridor, Bayou Lafourche, the ICW, and the job sites of Lafourche and Terrebonne Parishes in short order. When a project needs crew moved daily, short transit from the dock is the difference the schedule feels.',
      },
      {
        heading: 'Part of a bigger fleet',
        body: 'Crew boats rarely work alone. Ours rent alongside spud barges, tugs, excavators, and airboats, so the boat that moves your crew can be quoted with the platform they will work on and the tug that positions it, all from one yard.',
      },
      {
        heading: 'Straight answers on fit',
        body: 'Passenger counts, gear loads, and run distances all change which boat suits a job. Tell us what the day actually looks like on your project and we will tell you plainly whether our boats fit it, and how the arrangement should be set up.',
      },
    ],
    included: [
      { title: 'Crew transport', detail: 'Daily runs moving workers between docks, barges, and remote job sites.' },
      { title: 'Survey support', detail: 'A stable, maneuverable platform for hydrographic and coastal survey teams.' },
      { title: 'Light cargo runs', detail: 'Tools, parts, groceries, and small equipment delivered to crews on the water.' },
      { title: 'Dredge & project support', detail: 'Tender duty alongside dredging and construction operations.' },
      { title: 'Cabin comfort', detail: 'Enclosed cabins that keep crews dry and out of the sun between runs.' },
      { title: 'Open deck space', detail: 'Room aft for gear, coolers, and the cargo every job hauls along.' },
    ],
    process: [
      { title: 'Describe the runs', detail: 'Where crews stage, where they work, and how many trips a day the job takes.' },
      { title: 'Match the boat', detail: 'We confirm capacity, draft, and rigging against your project.' },
      { title: 'Set the term', detail: 'Day, week, or month arrangements with the support level the job needs.' },
      { title: 'Boats on station', detail: 'The boat positions where your project needs it, on your schedule.' },
    ],
    serviceArea:
      'Crew boat service from Larose across Bayou Lafourche, the ICW, Port Fourchon, Houma, Grand Isle, and job sites throughout coastal Louisiana.',
    faqs: [
      {
        q: 'What crew boats do you rent?',
        a: "Aluminum crew boats built by Hanko's in Berwick, Louisiana, each powered by twin Yamaha outboards, with enclosed cabins and open working decks. They are rigged for crew transport, survey work, and light cargo on inland and near-coastal water.",
      },
      {
        q: 'How much does crew boat rental cost in Louisiana?',
        a: 'Rates depend on the term, the run schedule, and the support arrangement the job needs. Daily through monthly terms are available. Call (985) 691-4591 with your project location and crew schedule and we will quote it directly.',
      },
      {
        q: 'How many people can your crew boats carry?',
        a: 'Capacity depends on the boat, the gear aboard, and the nature of the run, so we confirm it against your specific job rather than quoting one number for every situation. Tell us your crew size and daily schedule and we will tell you exactly what the boats can do for it.',
      },
      {
        q: 'Can your crew boats work shallow bayous and marsh edges?',
        a: 'Shallow-draft aluminum hulls with outboard power are made for that water. For true marsh interiors where even an outboard cannot follow, we pair crew boats with our airboats so personnel can get all the way to the work.',
      },
      {
        q: 'Do you serve Port Fourchon projects?',
        a: 'Yes. Larose sits about half an hour up LA-1 from Port Fourchon, and supporting work along that corridor is a core part of what this fleet does, alongside jobs across Lafourche and Terrebonne Parishes.',
      },
      {
        q: 'Can I rent a crew boat together with a barge or tug?',
        a: 'That is the way most of our rentals go out. Crew boat, spud barge, excavator, and tug can be quoted as one package from one yard, which keeps mobilization simple and puts one phone number behind the whole spread.',
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
      { src: '/images/airboat-crew-boat-boathouse.jpg', alt: "Hanko's aluminum crew boat staged in the Larose boathouse" },
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
    heroImage: '/images/long-reach-excavator-marsh.jpg',
    heroAlt: 'Long-reach excavator working a marsh shoreline from a spoil bank in South Louisiana',
    kicker: 'Reach Where It Counts',
    intro: [
      'Water-side excavation is a reach problem. A standard machine parked on a bank or a barge runs out of arm long before the work runs out, and repositioning eats the day. A long-reach excavator solves it with an extended boom and stick that puts the bucket far beyond a conventional machine, from a single set-up.',
      'Melancon Marine rents long-reach excavators the way South Louisiana jobs actually use them: mounted on our spud barges and delivered by our own tugs, so the machine arrives floating, positioned, and ready to dig. Canal cleaning, shoreline shaping, marsh work, and dredge support all run through this pairing.',
    ],
    specChips: ['LONG-REACH BOOM', 'BARGE-MOUNTED', 'SPUD BARGE PAIRING', 'TUG DELIVERED'],
    whyUs: [
      {
        heading: 'The barge and the machine, together',
        body: 'A long-reach excavator without a floating platform is half an answer on this coast. We quote the machine on the spud barge with tug delivery as one package, so you are mobilizing a working spread, not assembling one from three vendors.',
      },
      {
        heading: 'Sized for bayou and marsh jobs',
        body: 'Extended reach matters most on narrow canals, soft banks, and marsh edges where the machine cannot walk closer to the work. That is the terrain our fleet lives in, and the combination is set up for it: shallow-draft barge, stable spuds, and reach that covers the cut from mid-channel.',
      },
      {
        heading: 'Working iron, not lot iron',
        body: 'These machines clean canals and shape shorelines on our own construction and maintenance jobs between rentals. They are maintained by the crew that runs them, and the same crew preps them before your rental goes out.',
      },
      {
        heading: 'One call scales the spread',
        body: 'If the job grows: add a second barge for material, a tug to rotate hopper barges, an airboat to move spotters, or a crew boat for personnel. The whole spread comes from one yard in Larose with one point of contact.',
      },
    ],
    included: [
      { title: 'Extended reach digging', detail: 'Boom and stick configured to work far beyond a standard excavator arm.' },
      { title: 'Spud barge platform', detail: 'A pinned, stable deck that holds grade while the machine works.' },
      { title: 'Canal & ditch cleaning', detail: 'Vegetation, spoil, and sediment pulled from channels and drainage canals.' },
      { title: 'Shoreline & bank work', detail: 'Grading, shaping, and armoring along bayou and canal banks.' },
      { title: 'Marsh restoration support', detail: 'Material placement and excavation on coastal restoration sites.' },
      { title: 'Material handling', detail: 'Loading hopper barges and moving spoil alongside dredge operations.' },
    ],
    process: [
      { title: 'Walk the water', detail: 'Channel widths, depths, spoil plans, and what the machine must reach.' },
      { title: 'Package the spread', detail: 'Machine, barge, and tug delivery quoted as one number.' },
      { title: 'Float it in', detail: 'The excavator arrives on the barge, spuds down, and starts digging.' },
      { title: 'Advance the cut', detail: 'Our tug shifts the barge along the job as the work progresses.' },
    ],
    serviceArea:
      'Barge-mounted excavation across South Louisiana: Lafourche and Terrebonne Parish canals and bayous, coastal restoration sites, and ICW-connected job sites statewide.',
    faqs: [
      {
        q: 'What is a long-reach excavator?',
        a: 'A long-reach excavator is a standard excavator fitted with an extended boom and stick, trading some bucket size for much greater horizontal and vertical reach. On water jobs, that reach is what lets one set-up dig a full canal section or shoreline slope without constant repositioning.',
      },
      {
        q: 'How much does long-reach excavator rental cost in Louisiana?',
        a: 'The rate depends on the term, whether the machine goes out barge-mounted, and the tow distance to your site. Most of our rentals go out as a machine-plus-spud-barge package with tug delivery quoted in the same number. Call (985) 691-4591 with the scope and we will price it.',
      },
      {
        q: 'Can I rent the excavator on a barge?',
        a: 'That is our specialty. The long-reach machine loads onto one of our spud barges, our tug delivers and positions the spread, and the spuds hold it on station while the machine digs. It is the practical way to excavate where land access does not exist.',
      },
      {
        q: 'What jobs use a barge-mounted long-reach excavator?',
        a: 'Canal and ditch cleaning, shoreline grading and protection, marsh and coastal restoration work, dredge support, dock and bulkhead demolition, and material handling on water. If the dig site is surrounded by water or soft marsh, this is usually the machine that reaches it.',
      },
      {
        q: 'Do you rent long-reach excavators with an operator?',
        a: 'Depending on the job we can talk through a bare rental or supplying the machine with support. Tell us what your crew runs day to day and we will set up the arrangement that fits.',
      },
      {
        q: 'How does the excavator get to a site with no road access?',
        a: 'By water, on our barge, behind our tug. That is the point of the package: sites that a lowboy cannot reach are the sites this spread was assembled for.',
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
      { src: '/images/excavator-waterside.jpg', alt: 'Tracked excavator staged at the water edge on a Louisiana job site' },
    ],
  },
  {
    slug: 'airboat-rental-louisiana',
    navLabel: 'Airboat Rentals',
    h1: 'Airboat Rental in Louisiana',
    title: 'Airboat Rental & Services in Louisiana',
    description:
      'Working airboat rentals for marsh access, pipeline and ROW support, surveys, and wetland crew transport across South Louisiana, based in Larose on Bayou Lafourche.',
    heroImage: '/images/hero-airboat.jpg',
    heroAlt: 'Airboat crossing a shallow Louisiana marsh flat at golden hour',
    kicker: 'Access Anything',
    intro: [
      'Half of coastal Louisiana is water too thin to float a hull and ground too soft to walk. Airboats exist for exactly that half. Melancon Marine runs a pair of working airboats out of Larose for the jobs that have to get into the marsh: pipeline and right-of-way support, survey crews, environmental work, and crew transport to sites nothing else can reach.',
      'These are not tour boats. They are rigged for work, sized for gear and personnel, and run by a company whose barges, tugs, and excavators are often working the same project. When the job site is a GPS point in the grass, this is how your people and tools get there.',
    ],
    specChips: ['2× AIRBOATS', 'MARSH ACCESS', 'ROW SUPPORT', 'CREW + GEAR'],
    whyUs: [
      {
        heading: 'Built around real marsh work',
        body: 'Our airboats support pipelines, surveys, spraying, and construction jobs, so they are rigged for hauling people and equipment, not sightseeing. Deck space, tie-downs, and the patience to work a slow grid line all come standard.',
      },
      {
        heading: 'Local water, local grass',
        body: "Marsh running is a learned skill: water levels change daily, and the difference between a clean run and a stuck boat is knowing this week's conditions. We run these marshes year-round from Larose and plan routes accordingly.",
      },
      {
        heading: 'Part of the full spread',
        body: 'Airboats often work as the access leg of a bigger job: spotting for a barge-mounted excavator, ferrying crew to a spraying operation, or supporting a survey ahead of construction. Renting from the same yard that owns the rest of the spread keeps the whole job coordinated.',
      },
      {
        heading: 'Honest about conditions',
        body: 'Wind, water level, and load all decide what an airboat can safely do on a given day. We will tell you straight when conditions call for a different plan, because getting your crew there and back matters more than logging hours.',
      },
    ],
    included: [
      { title: 'Marsh & wetland access', detail: 'Crew and equipment transport across flooded grass, mud flats, and shallow ponds.' },
      { title: 'Pipeline & ROW support', detail: 'Inspection, maintenance, and construction support along wetland rights-of-way.' },
      { title: 'Survey crew transport', detail: 'Getting instruments and technicians to stations no truck or hull can reach.' },
      { title: 'Environmental & restoration work', detail: 'Support for sampling, monitoring, and coastal restoration crews.' },
      { title: 'Spray platform duty', detail: 'The same boats carry our herbicide spraying rigs for vegetation control work.' },
      { title: 'Emergency access', detail: 'Reaching camps, equipment, and infrastructure when high water cuts them off.' },
    ],
    process: [
      { title: 'Map the access', detail: 'Where crews start, where they must get to, and what rides along.' },
      { title: 'Check conditions', detail: 'Water levels and marsh conditions on your dates, checked by people who run them.' },
      { title: 'Set the arrangement', detail: 'Boat, term, and support level matched to the job.' },
      { title: 'Run the marsh', detail: 'Your crew and gear get to the work and back, every day of the job.' },
    ],
    serviceArea:
      'Airboat operations across the marshes of Lafourche and Terrebonne Parishes, the Barataria Basin, and wetland job sites throughout coastal Louisiana.',
    faqs: [
      {
        q: 'What do contractors use airboat rentals for?',
        a: 'Pipeline and right-of-way inspection and support, survey crew transport, environmental sampling, marsh herbicide spraying, hunting-lease and land-management access, and moving crews to wetland construction sites. If the destination is marsh, an airboat is usually the only vehicle for the job.',
      },
      {
        q: 'How much does airboat rental cost in Louisiana?',
        a: 'It depends on the term, the running distance, and whether the boat goes out with support. Call (985) 691-4591 with the job location and schedule and we will give you a straight number for the work.',
      },
      {
        q: 'How shallow can an airboat run?',
        a: 'Airboats are pushed by air, not a submerged propeller, so they run across inches of water and slide over wet grass and mud that would strand any conventional hull. Load and conditions still matter, which is why we confirm routes against current water levels before a job.',
      },
      {
        q: 'Can your airboats carry equipment as well as people?',
        a: 'Yes. Our boats are working platforms with open deck space for tools, instruments, spray rigs, and supplies. Tell us the load and we will confirm the configuration that carries it.',
      },
      {
        q: 'Do you rent airboats for herbicide spraying work?',
        a: 'Spraying is its own service with our own rigs. If your project involves marsh or canal vegetation control, see our airboat herbicide spraying page or call, and we will scope the treatment work directly.',
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
      { src: '/images/airboat-marsh.jpg', alt: 'Airboat working through Louisiana marsh grass' },
      { src: '/images/airboat-crew-boat-boathouse.jpg', alt: 'Airboat under the boathouse at the Melancon Marine yard' },
    ],
  },
]
