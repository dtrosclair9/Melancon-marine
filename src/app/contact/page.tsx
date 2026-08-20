import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import FaqSection from '@/components/FaqSection'
import { BASE_URL, ogImage, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote | Larose, LA',
  description:
    'Call Melancon Marine at (985) 691-4591 or send the quote form: towing, equipment rentals, marine construction, and airboat spraying across South Louisiana.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: `Contact ${site.name} | Larose, Louisiana`,
    description: 'Request a quote for towing, rentals, or marine construction.',
    url: `${BASE_URL}/contact`,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${site.name}`,
  url: `${BASE_URL}/contact`,
  about: { '@id': `${BASE_URL}/#business` },
}

const contactFaqs = [
  {
    q: 'What should I have ready when I call for a quote?',
    a: "The job location, what needs to happen there, your rough dates, and anything unusual about the site: water depth, access, overhead lines, or a tight schedule. If you don't have all of it, call anyway and we'll figure out the missing pieces together.",
  },
  {
    q: 'Is calling or the form better?',
    a: 'Calling (985) 691-4591 is the fastest path, especially for jobs on a clock. The form works well for planned projects where you want to lay out details in writing first; either way you end up talking to the same people.',
  },
  {
    q: 'Do you give free quotes?',
    a: 'Yes. Talking through a job and pricing it costs you nothing. For construction work we typically look at the site or your plans before putting a number in writing, so the quote reflects the actual conditions.',
  },
  {
    q: 'Can I get equipment on short notice?',
    a: "Sometimes, depending on where the fleet is working that week. Call with the dates and we'll tell you what's available. If we can't cover it, we'll tell you right away so you can make another plan.",
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="section-label mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">
              Tell us about the job
            </h1>
            <p className="text-lg text-earth-light leading-relaxed">
              Towing, rentals, construction, spraying, and brokering all go through the same number and the same form. The more you tell us about the job and the site, the faster we can quote it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
            <div className="space-y-5">
              <Reveal delay={0.05}>
                <div className="bg-ink rounded-xl p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-pale mb-2">
                    Call Direct
                  </p>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-serif text-3xl !text-cream hover:text-accent-pale transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="text-sand/85 text-sm mt-3 leading-relaxed">
                    The fastest way to scope a job is a phone call.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="bg-white border border-line rounded-xl p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dark mb-2">
                    Home Port
                  </p>
                  <p className="text-earth font-semibold">{site.city}, {site.stateFull} {site.zip}</p>
                  <p className="text-earth-light text-sm mt-2 leading-relaxed">
                    On Bayou Lafourche at the Intracoastal Waterway, about half an hour up LA-1
                    from Port Fourchon.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-white border border-line rounded-xl p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dark mb-2">
                    Coverage
                  </p>
                  <p className="text-earth-light text-sm leading-relaxed">
                    Lafourche & Terrebonne Parishes, Port Fourchon, Houma, Grand Isle, Morgan
                    City, and job sites across South Louisiana.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={contactFaqs}
        heading="Before you reach out"
        intro="A few practical answers that make the first conversation quicker."
      />
    </>
  )
}
