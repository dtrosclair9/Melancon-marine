import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import PageHero from '@/components/PageHero'
import { BASE_URL, ogImage, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Our Fleet & Company in Larose, LA',
  description:
    'Melancon Marine is an owner-operated marine company in Larose, Louisiana: two 1,200 HP tugs, spud barges, crew boats, and airboats working South Louisiana water.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: `About Melancon Marine | Larose, Louisiana`,
    description:
      'An owner-operated marine towing, rentals, and construction company on Bayou Lafourche.',
    url: `${BASE_URL}/about`,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${site.name}`,
    url: `${BASE_URL}/about`,
    about: { '@id': `${BASE_URL}/#business` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#owner`,
    name: site.owner,
    jobTitle: 'Owner',
    worksFor: { '@id': `${BASE_URL}/#business` },
  },
]

const fleet = [
  {
    name: 'Tugboats',
    spec: '2× 1,200 HP',
    body: 'Inland pushboats sized for the ICW and bayou systems: barge tows, shifts, deliveries, and project support.',
    image: '/images/tug-transport-lowboy.jpg',
    alt: 'Melancon Marine tugboat being transported by lowboy trailer',
  },
  {
    name: 'Spud Barges',
    spec: '2× with excavators',
    body: 'Pinned working platforms for pile driving, dredge support, and waterside construction, with long-reach machines available aboard.',
    image: '/images/excavator-barge-bayou.jpg',
    alt: 'Excavator working from a barge on a Louisiana bayou',
  },
  {
    name: 'Crew Boats',
    spec: "2× Hanko's built",
    body: 'Aluminum hulls with twin Yamaha outboards moving crews, tools, and light cargo across inshore Louisiana.',
    image: '/images/crew-boat-deck.jpg',
    alt: 'Aluminum crew boat deck and cabin at the dock in Larose',
  },
  {
    name: 'Airboats',
    spec: '2× working rigs',
    body: 'Marsh access for surveys, right-of-way support, and our herbicide spraying work.',
    image: '/images/airboat-parked.jpg',
    alt: 'Working airboat staged on the grass in Larose Louisiana',
  },
]

const values = [
  {
    title: 'Clear quotes',
    body: 'Scope, price, and schedule go in writing before work starts.',
  },
  {
    title: 'We own our equipment',
    body: 'We own what we run and we maintain it ourselves. When we commit to a date, the equipment behind that date is ours.',
  },
  {
    title: 'Local water knowledge',
    body: 'Bayou Lafourche, the ICW, and the marshes between them are where the fleet works. We deal with the water levels, bridge schedules, and soft banks here every week.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageHero
        h1="An Owner-Operated Fleet on Bayou Lafourche"
        kicker="About Melancon Marine"
        intro="Towing, rentals, and marine construction from Larose, Louisiana, owned and operated by Alex Melancon."
        image="/images/tugs-lift-bridge.jpg"
        imageAlt="Melancon Marine workboats passing the lift bridge on Bayou Lafourche"
        imagePosition="object-[center_45%]"
        crumbs={[{ href: '/about', label: 'About' }]}
      />

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <p className="section-label mb-3">The Company</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                A working fleet on Bayou Lafourche
              </h2>
              <div className="space-y-5 text-earth-light leading-relaxed">
                <p>
                  Melancon Marine is a marine towing, equipment rental, and marine construction
                  company based in {site.city}, {site.stateFull}, owned and operated by{' '}
                  {site.owner}. The yard sits where Bayou Lafourche meets the Intracoastal
                  Waterway, about half an hour up LA-1 from Port Fourchon.
                </p>
                <p>
                  The fleet is two 1,200 HP tugboats, two spud barges with excavators, two Hanko&apos;s-built aluminum crew boats, and two working airboats, and it&apos;s still growing. That covers most of what marine jobs down here call for: the tow, the platform, the digging, and the access.
                </p>
                <p>
                  Keeping towing, rentals, and construction under one roof means fewer handoffs. The contractor renting our spud barge gets it delivered by our tug, and the camp owner whose dock we build gets it driven from our own barge. Either way, the responsibility stays with us from start to finish.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-line">
                <Image
                  src="/images/airboat-crew-boat-boathouse.jpg"
                  alt="Airboat and crew boat staged in the boathouse at the Melancon Marine yard in Larose"
                  width={2000}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {values.map((v) => (
                  <div key={v.title} className="bg-white border border-line rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-1.5">{v.title}</h3>
                    <p className="text-earth-light text-xs leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section-padding bg-cream-dark border-y border-line">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">The Fleet</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What&apos;s at the dock</h2>
            <p className="text-earth-light max-w-2xl mb-12">
              The same equipment we rent to contractors runs our own towing and construction work between rentals.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-7">
            {fleet.map((f, i) => (
              <Reveal key={f.name} delay={Math.min(i * 0.07, 0.28)}>
                <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm h-full">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{f.name}</h3>
                      <span className="spec-chip">{f.spec}</span>
                    </div>
                    <p className="text-earth-light text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal>
              <p className="section-label mb-3">Home Port</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Larose, Louisiana</h2>
              <div className="space-y-5 text-earth-light leading-relaxed">
                <p>
                  Shrimp boats, crew boats, and tows share Bayou Lafourche here every day, and most of the marine trades in the parish are within a few miles of our dock.
                </p>
                <p>
                  From this stretch of Bayou Lafourche, the fleet reaches Port Fourchon to the
                  south, Houma and Morgan City to the west, Grand Isle to the southeast, and the
                  ICW in both directions.{' '}
                  <Link href="/services" className="text-primary font-medium hover:underline">
                    See every service
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    start a conversation about your job
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand heading="Have a job on the water?" />
    </>
  )
}
