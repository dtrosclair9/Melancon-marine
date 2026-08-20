import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import FaqSection from '@/components/FaqSection'
import CtaBand from '@/components/CtaBand'
import { BASE_URL, ogImage, site, serviceAreas } from '@/lib/site'
import { serviceBuckets } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Melancon Marine | Towing, Rentals & Marine Construction LA',
  description:
    'Tug and barge towing, spud barge and crew boat rentals, airboat spraying, and marine construction from Larose, LA, near Port Fourchon. (985) 691-4591.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Melancon Marine | Towing, Rentals & Marine Construction in Louisiana',
    description:
      'Tug and barge towing, marine equipment rentals, and marine construction from Larose, Louisiana.',
    url: BASE_URL,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const fleetStats = [
  { stat: '2×', label: '1,200 HP Tugboats' },
  { stat: '2×', label: 'Spud Barges w/ Excavators' },
  { stat: '2×', label: "Hanko's Crew Boats" },
  { stat: '2×', label: 'Working Airboats' },
]

const industries = [
  {
    title: 'Oilfield & Energy',
    body: 'Corridor support for contractors and operators working Port Fourchon and the inshore side of the energy business.',
  },
  {
    title: 'Dredging & Coastal Restoration',
    body: 'Barges, tugs, and support equipment for dredging crews and the coastal projects rebuilding this shoreline.',
  },
  {
    title: 'Marine Construction Contractors',
    body: 'Rental spreads and towing for GCs who need floating equipment without owning a fleet.',
  },
  {
    title: 'Pipeline & Right-of-Way',
    body: 'Airboat access, spraying, and barge support along wetland corridors and crossings.',
  },
  {
    title: 'Land Managers & Leases',
    body: 'Canal spraying, marsh access, and excavation for landowners and lease managers.',
  },
  {
    title: 'Waterfront Homeowners & Camps',
    body: 'Bulkheads, docks, and pilings for waterfront homes and camps.',
  },
]

const processSteps = [
  {
    title: 'Call with the job',
    detail: 'Tell us the work, the water, and the dates. You talk to the people who run the fleet, not a call center.',
  },
  {
    title: 'Get a straight scope',
    detail: 'We match equipment and crew to the job, flag the site problems early, and quote it clearly.',
  },
  {
    title: 'The fleet mobilizes',
    detail: 'Our own tugs deliver our own barges and equipment, so the schedule is ours to keep.',
  },
  {
    title: 'The job gets done',
    detail: 'The work gets done, the site gets cleaned up, and you know who to call next time.',
  },
]

const galleryPhotos = [
  { src: '/images/tug-pushing-spud-barge.jpg', alt: 'Melancon Marine tug pushing a spud barge along a Louisiana waterway' },
  { src: '/images/long-reach-excavator-marsh.jpg', alt: 'Long-reach excavator working a marsh shoreline in coastal Louisiana' },
  { src: '/images/airboat-crew-boat-boathouse.jpg', alt: 'Airboat and aluminum crew boat staged in the boathouse at Larose' },
  { src: '/images/excavator-hopper-barge.jpg', alt: 'Excavator working from a hopper barge on a South Louisiana job' },
  { src: '/images/marsh-mat-platform.jpg', alt: 'Timber mat platform staged for marsh construction work' },
  { src: '/images/crew-boat-deck.jpg', alt: 'Crew boat deck and cabin at the Melancon Marine dock' },
]

const homeFaqs = [
  {
    q: 'What services does Melancon Marine offer?',
    a: 'Three connected services: marine towing and transportation (including equipment brokering), marine equipment rentals (spud barges, tugboats, crew boats, airboats, and long-reach excavators), and marine construction (pile driving, bulkheads, dock building, and airboat herbicide spraying for marsh and canals).',
  },
  {
    q: 'Where is Melancon Marine located?',
    a: 'We are based in Larose, Louisiana, in Lafourche Parish, where Bayou Lafourche meets the Intracoastal Waterway, about half an hour up LA-1 from Port Fourchon. That junction lets the fleet move south to the coast, west toward Houma and Morgan City, or east along the ICW.',
  },
  {
    q: 'What equipment is in your fleet?',
    a: "Two 1,200 HP tugboats, two spud barges with excavators including long-reach machines, two aluminum crew boats built by Hanko's with twin Yamaha outboards, and two working airboats. The fleet is expanding, so if you need something you do not see here, call and ask.",
  },
  {
    q: 'Do you rent equipment to other contractors?',
    a: 'Yes. Rentals are a core part of the business, and every rental can include delivery by our own tugs. Contractors rent single pieces or complete spreads: a spud barge with a long-reach excavator aboard and a tug to position it is our signature package.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Lafourche and Terrebonne Parishes are home water: Larose, Cut Off, Galliano, Golden Meadow, Port Fourchon, Houma, and Grand Isle. The fleet works job sites across South Louisiana wherever the ICW and connecting waterways reach.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call (985) 691-4591 or send the request form on our contact page with the job, the location, and the dates. Quotes are written and itemized, and if our equipment is not the right fit for the job, we will say so.',
  },
  {
    q: 'Can you handle a full project, not just one piece of it?',
    a: 'Yes. We can supply the barge, the excavator on it, the tug that positions it, the crew boat that moves your people, and the construction crew that does the work, all on the same schedule.',
  },
  {
    q: 'Do you work with homeowners, or only companies?',
    a: 'Both. The same fleet that supports commercial and coastal work builds bulkheads, docks, and pilings for waterfront homeowners and camp owners, and sprays private canals and leases. No job is too small to get a straight answer.',
  },
  {
    q: 'Do you broker marine equipment?',
    a: 'Yes. Alongside our own fleet we broker tugs, barges, workboats, and marine equipment of all types, connecting buyers and sellers through our network across the Gulf Coast. Call with what you have or what you are looking for.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: BASE_URL,
  telephone: site.phoneRaw,
  image: `${BASE_URL}/images/og-image.jpg`,
  logo: `${BASE_URL}/images/logo-navy.png`,
  description:
    'Marine towing and transportation, marine equipment rentals, and marine construction company based in Larose, Louisiana, serving South Louisiana.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Lafourche Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Terrebonne Parish, LA' },
    { '@type': 'State', name: 'Louisiana' },
  ],
  founder: { '@id': `${BASE_URL}/#owner` },
  employee: { '@id': `${BASE_URL}/#owner` },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#owner`,
  name: site.owner,
  jobTitle: 'Owner',
  worksFor: { '@id': `${BASE_URL}/#business` },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: site.name,
  publisher: { '@id': `${BASE_URL}/#business` },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to put the Melancon Marine fleet on your job',
  step: processSteps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.detail,
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, personSchema, webSiteSchema, howToSchema]} />

      {/* 1 — Split editorial hero: headline on cream, crisp photo card right */}
      <section className="bg-cream overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-14 md:py-20 lg:py-24">
            <div>
              <p className="section-label mb-4">Larose, Louisiana · Bayou Lafourche</p>
              <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-semibold leading-[1.08] mb-6">
                Marine Towing, Equipment Rentals & Marine Construction in Larose, Louisiana
              </h1>
              <p className="text-lg text-earth-light leading-relaxed mb-8 max-w-xl">
                Melancon Marine runs tugs, spud barges, crew boats, and airboats out of Larose, where Bayou Lafourche meets the Intracoastal Waterway. We handle towing, equipment rentals, and marine construction with our own boats and barges.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary">Call {site.phoneDisplay}</a>
                <Link href="/contact" className="btn-outline">Request a Quote</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="spec-chip">Towing</span>
                <span className="spec-chip">Rentals</span>
                <span className="spec-chip">Construction</span>
                <span className="spec-chip">Brokering</span>
              </div>
            </div>
            <Reveal className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-line">
                <Image
                  src="/images/tug-transport-lowboy.jpg"
                  alt="Melancon Marine tugboat arriving by lowboy trailer in South Louisiana"
                  width={2000}
                  height={1500}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-5 -left-5 bg-ink text-cream rounded-lg px-5 py-4 shadow-xl">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-pale mb-1">Home Port</p>
                <p className="font-serif text-lg !text-cream">Bayou Lafourche × ICW</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — Fleet stat strip */}
      <section className="bg-ink" aria-label="Fleet at a glance">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetStats.map((f) => (
              <div key={f.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl !text-cream">{f.stat}</p>
                <p className="font-mono text-[0.68rem] md:text-xs uppercase tracking-widest text-accent-pale mt-1">{f.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-sand/60 mt-5">
            Fleet expanding
          </p>
        </div>
      </section>

      {/* 3 — The three service buckets */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Towing, rentals, and construction</h2>
            <p className="text-earth-light max-w-2xl mb-12">
              The same fleet covers all three. Rent a barge on its own, hire a tow, or have our crews build the job start to finish.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {serviceBuckets.map((b, i) => (
              <Reveal key={b.href} delay={i * 0.1}>
                <Link
                  href={b.href}
                  className="group block bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {b.chips.map((c) => (
                        <span key={c} className="spec-chip !text-[0.6rem]">{c}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                    <p className="text-earth-light text-sm leading-relaxed mb-4">{b.blurb}</p>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Featured: spud barge package (split color block) */}
      <section className="bg-cream-dark border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/images/hero-pile-driving.jpg"
              alt="Spud barge with crane working a South Louisiana bayou at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="py-14 md:py-20 px-6 sm:px-10 xl:px-16 flex flex-col justify-center">
            <Reveal>
              <p className="section-label mb-3">The Signature Package</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                Spud barge, excavator, and tug delivery in one quote
              </h2>
              <p className="text-earth-light leading-relaxed mb-4 max-w-xl">
                Most rental yards rent you a bare barge and leave you to find a tug and a machine. We own all three, so we quote them together: the barge, the excavator on deck, and the tow to your site.
              </p>
              <p className="text-earth-light leading-relaxed mb-7 max-w-xl">
                Contractors use this setup for dredge support, bulkhead lines, dock demolition, and pile work all over South Louisiana.
              </p>
              <div>
                <Link href="/services/spud-barge-rental-louisiana" className="btn-primary">
                  Spud Barge Rental →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — Industries served */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">Who We Work With</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Who we work for</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={Math.min(i * 0.06, 0.3)}>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-lg font-semibold mb-2">{ind.title}</h3>
                  <p className="text-earth-light text-sm leading-relaxed">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Process (HowTo schema emitted above) */}
      <section className="section-padding bg-ink">
        <div className="container-wide">
          <Reveal>
            <p className="section-label--light mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold !text-cream mb-12">From phone call to finished job</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div>
                  <p className="font-mono text-accent-pale text-sm mb-3">0{i + 1}</p>
                  <h3 className="text-xl font-semibold !text-cream mb-2">{s.title}</h3>
                  <p className="text-sand/85 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Fleet gallery */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">On the Water</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">The working fleet</h2>
            <p className="text-earth-light max-w-2xl mb-12">
              Our boats, barges, and machines on jobs around Lafourche and Terrebonne Parishes.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryPhotos.map((p, i) => (
              <Reveal key={p.src} delay={Math.min(i * 0.05, 0.25)}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-line">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Owner / why strip */}
      <section className="section-padding bg-cream-dark border-y border-line">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="section-label mb-3">Owner-Operated</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                When you call, you get the person who runs the boats
              </h2>
              <p className="text-earth-light leading-relaxed mb-4">
                Melancon Marine is owned and run by {site.owner} out of {site.city}. When you call, you&apos;re talking to the person who runs the fleet, so decisions about scope, equipment, timing, and price get made fast.
              </p>
              <p className="text-earth-light leading-relaxed mb-7">
                Whether it&apos;s a statewide mobilization or a camp dock across the bayou, you&apos;ll get a straight answer about what we can do and what it will cost.
              </p>
              <Link href="/about" className="btn-outline">About Melancon Marine</Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-line">
                <Image
                  src="/images/bayou-waterfront-spud-barge.jpg"
                  alt="The working waterfront on Bayou Lafourche in Larose Louisiana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 — Service area */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">South Louisiana is home water</h2>
            <p className="text-earth-light max-w-3xl leading-relaxed mb-8">
              From Larose the fleet runs Bayou Lafourche south to Port Fourchon, west along the
              Intracoastal to Houma and Morgan City, and out to coastal job sites across the
              state. If a tug, barge, or airboat can get there, we can work there.
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span key={a} className="spec-chip">{a}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 — FAQs */}
      <FaqSection
        faqs={homeFaqs}
        heading="Questions we hear before the first job"
        intro="Straight answers about the fleet, the coverage area, and how the work gets quoted."
      />

      <CtaBand />
    </>
  )
}
