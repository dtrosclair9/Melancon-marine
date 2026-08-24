import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import PageHero from '@/components/PageHero'
import { BASE_URL, ogImage, site } from '@/lib/site'
import { servicePages, serviceBuckets } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Marine Services in South Louisiana',
  description:
    'Every Melancon Marine service: tug and barge towing, spud barge and equipment rentals, crew boats, airboats, marine construction, and marsh spraying. Larose, LA.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Marine Services in South Louisiana | Melancon Marine',
    description:
      'Tug and barge towing, marine equipment rentals, and marine construction from Larose, Louisiana.',
    url: `${BASE_URL}/services`,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Melancon Marine Services',
  itemListElement: servicePages.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.h1,
    url: `${BASE_URL}/services/${p.slug}`,
  })),
}

const grouped = [
  {
    bucket: serviceBuckets[0],
    slugs: ['marine-towing-and-transportation-louisiana'],
  },
  {
    bucket: serviceBuckets[1],
    slugs: [
      'equipment-rentals-louisiana',
      'spud-barge-rental-louisiana',
      'crew-boat-rental-louisiana',
      'long-reach-excavator-rental-louisiana',
      'airboat-rental-louisiana',
    ],
  },
  {
    bucket: serviceBuckets[2],
    slugs: [
      'marine-construction-louisiana',
      'airboat-herbicide-spraying-louisiana',
      'bulkhead-dock-construction-houma-la',
      'marine-services-port-fourchon-la',
    ],
  },
]

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <PageHero
        h1="Marine Services in South Louisiana"
        kicker="Towing · Rentals · Construction"
        intro="Towing, rentals, and construction out of Larose. Every service below has its own page with details, coverage area, and answers to common questions."
        image="/images/excavator-hopper-barge.jpg"
        imageAlt="Excavator loading a hopper barge on a South Louisiana job site"
        crumbs={[{ href: '/services', label: 'Services' }]}
      />

      {grouped.map((group, gi) => (
        <section
          key={group.bucket.title}
          className={`section-padding ${gi % 2 === 0 ? 'bg-cream' : 'bg-cream-dark border-y border-line'}`}
        >
          <div className="container-wide">
            <Reveal>
              <p className="section-label mb-3">{`0${gi + 1}`}</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{group.bucket.title}</h2>
              <p className="text-earth-light max-w-2xl mb-10">{group.bucket.blurb}</p>
            </Reveal>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {group.slugs.map((slug, i) => {
                const page = servicePages.find((p) => p.slug === slug)
                if (!page) return null
                return (
                  <Reveal key={slug} delay={Math.min(i * 0.07, 0.28)}>
                    <Link
                      href={`/services/${slug}`}
                      className="group block bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={page.heroImage}
                          alt={page.heroAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className={`object-cover ${page.heroPosition ?? 'object-center'} group-hover:scale-[1.04] transition-transform duration-500`}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {page.h1}
                        </h3>
                        <p className="text-earth-light text-sm leading-relaxed mb-4">
                          {page.description}
                        </p>
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">
                          View service →
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  )
}
