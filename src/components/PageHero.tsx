import Image from 'next/image'
import Link from 'next/link'
import JsonLd from './JsonLd'
import { BASE_URL, site } from '@/lib/site'

type Crumb = { href: string; label: string }

type Props = {
  h1: string
  kicker?: string
  intro?: string
  image: string
  imageAlt: string
  /** Tailwind object-position class, for photos whose subject is not centered */
  imagePosition?: string
  crumbs: Crumb[]
}

/**
 * Shared page hero: photo band with a bottom-up scrim (never the left-dark
 * gradient wash), kicker + H1 in cream, breadcrumb trail, and auto-emitted
 * BreadcrumbList JSON-LD.
 */
export default function PageHero({ h1, kicker, intro, image, imageAlt, imagePosition = 'object-center', crumbs }: Props) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        item: `${BASE_URL}${c.href}`,
      })),
    ],
  }

  return (
    <section className="relative bg-ink-deep">
      <JsonLd data={breadcrumbSchema} />
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
        {/* Bottom-up scrim for headline legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/45 to-ink-deep/15" aria-hidden="true" />
      </div>
      <div className="container-wide relative">
        <div className="pt-28 pb-14 md:pt-40 md:pb-20 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-sand-dark">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">Home</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-cream">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-cream transition-colors">{c.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {kicker && <p className="section-label--light mb-3">{kicker}</p>}
          <h1 className="text-4xl md:text-5xl font-semibold !text-cream leading-tight">{h1}</h1>
          {intro && <p className="mt-4 text-lg text-sand max-w-2xl">{intro}</p>}
          <div className="mt-7 flex flex-wrap gap-4">
            <a href={`tel:${site.phoneRaw}`} className="btn-light">Call {site.phoneDisplay}</a>
            <Link href="/contact" className="btn-outline-light">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
