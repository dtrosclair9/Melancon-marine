export type Faq = { q: string; a: string }

export type ServicePage = {
  slug: string
  navLabel: string
  h1: string
  /** 50–60 chars, brand appended by title.template — never include "Melancon Marine" */
  title: string
  /** 150–160 chars */
  description: string
  heroImage: string
  heroAlt: string
  /** Tailwind object-position class when the subject sits off-center */
  heroPosition?: string
  kicker: string
  intro: string[]
  specChips?: string[]
  whyUs: { heading: string; body: string }[]
  included: { title: string; detail: string }[]
  process?: { title: string; detail: string }[]
  /** Optional extra long-form section (e.g. brokering on the towing page) */
  extraSection?: { heading: string; body: string[] }
  /** Geo pages: unique market block (30%+ unique content rule) */
  localContext?: { heading: string; body: string[] }
  serviceArea: string
  faqs: Faq[]
  related: { href: string; label: string }[]
  serviceType: string
  areaServed: string[]
  gallery?: { src: string; alt: string }[]
}
