import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import FaqSection from '@/components/FaqSection'
import CtaBand from '@/components/CtaBand'
import { BASE_URL, ogImage, site } from '@/lib/site'
import { servicePages, getServicePage } from '@/lib/services'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) return {}
  const url = `${BASE_URL}/services/${page.slug}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${site.name}`,
      description: page.description,
      url,
      siteName: site.name,
      images: [ogImage],
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    serviceType: page.serviceType,
    description: page.description,
    url: `${BASE_URL}/services/${page.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: site.name,
      telephone: site.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.street,
        addressLocality: site.city,
        addressRegion: site.state,
        addressCountry: 'US',
      },
    },
    areaServed: page.areaServed.map((a) => ({ '@type': 'Place', name: a })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        h1={page.h1}
        kicker={page.kicker}
        image={page.heroImage}
        imageAlt={page.heroAlt}
        imagePosition={page.heroPosition}
        crumbs={[
          { href: '/services', label: 'Services' },
          { href: `/services/${page.slug}`, label: page.navLabel },
        ]}
      />

      {/* Intro + spec chips */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal>
              {page.specChips && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {page.specChips.map((c) => (
                    <span key={c} className="spec-chip">{c}</span>
                  ))}
                </div>
              )}
              {page.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-lg text-earth-light leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-cream-dark border-y border-line">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">Why Melancon Marine</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              Why people call us
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {page.whyUs.map((w, i) => (
              <Reveal key={w.heading} delay={Math.min(i * 0.07, 0.3)}>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-2.5">{w.heading}</h3>
                  <p className="text-earth-light leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <Reveal>
            <p className="section-label mb-3">The Scope</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">What this service covers</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.included.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="bg-white border border-line rounded-xl p-6 h-full shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-earth-light text-sm leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {page.process && (
        <section className="section-padding bg-ink">
          <div className="container-wide">
            <Reveal>
              <p className="section-label--light mb-3">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-semibold !text-cream mb-12">
                How a job goes
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {page.process.map((s, i) => (
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
      )}

      {/* Extra section (e.g. brokering) */}
      {page.extraSection && (
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Reveal>
                <p className="section-label mb-3">Also Here</p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">{page.extraSection.heading}</h2>
                {page.extraSection.body.map((p) => (
                  <p key={p.slice(0, 40)} className="text-earth-light leading-relaxed mb-5">{p}</p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Local market context (geo pages) */}
      {page.localContext && (
        <section className="section-padding bg-cream-dark border-y border-line">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Reveal>
                <p className="section-label mb-3">Local Knowledge</p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">{page.localContext.heading}</h2>
                {page.localContext.body.map((p) => (
                  <p key={p.slice(0, 40)} className="text-earth-light leading-relaxed mb-5">{p}</p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {page.gallery && (
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <Reveal>
              <p className="section-label mb-3">On the Job</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our equipment on the job</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {page.gallery.map((g, i) => (
                <Reveal key={g.src + i} delay={Math.min(i * 0.06, 0.2)}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-line">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service area */}
      <section className="py-12 bg-cream border-t border-line">
        <div className="container-wide">
          <Reveal>
            <div className="bg-sand/60 border border-sand-dark rounded-xl px-7 py-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dark mb-2">Service Area</h2>
              <p className="text-earth-light leading-relaxed">{page.serviceArea}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection faqs={page.faqs} heading="Common questions" />

      {/* Related services */}
      <section className="py-14 bg-cream border-t border-line">
        <div className="container-wide">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dark mb-5">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            {page.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white border border-line rounded-lg px-5 py-3.5 text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
