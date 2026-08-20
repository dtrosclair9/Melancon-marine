import JsonLd from './JsonLd'
import Reveal from './Reveal'
import type { Faq } from '@/lib/services/types'

type Props = {
  faqs: Faq[]
  heading?: string
  intro?: string
  /** Set false when a page renders multiple FaqSections and emits one merged schema itself */
  emitSchema?: boolean
}

/**
 * Always-visible Q&A list (answers in the DOM for crawlers and AI engines)
 * backed by FAQPage JSON-LD.
 */
export default function FaqSection({ faqs, heading = 'Frequently Asked Questions', intro, emitSchema = true }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className="section-padding bg-cream-dark border-t border-line">
      {emitSchema && <JsonLd data={schema} />}
      <div className="container-wide">
        <Reveal>
          <p className="section-label mb-3">Straight Answers</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{heading}</h2>
          {intro && <p className="text-earth-light max-w-2xl mb-10">{intro}</p>}
          {!intro && <div className="mb-10" />}
        </Reveal>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.05, 0.3)}>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-earth-light leading-relaxed">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
