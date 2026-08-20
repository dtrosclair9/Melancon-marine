import Link from 'next/link'
import BoatScrollBand from './BoatScrollBand'
import { site } from '@/lib/site'

type Props = {
  heading?: string
  body?: string
}

/**
 * Deep-navy closing CTA with the scroll-driven tug band along its waterline.
 * Sits directly above the footer on every page.
 */
export default function CtaBand({
  heading = 'Put the fleet to work',
  body = 'Call with the job, the location, and the dates for rates and availability.',
}: Props) {
  return (
    <section className="bg-ink">
      <div className="container-wide">
        <div className="pt-16 md:pt-24 pb-6 text-center max-w-2xl mx-auto">
          <p className="section-label--light mb-3">Larose, Louisiana</p>
          <h2 className="text-3xl md:text-5xl font-semibold !text-cream mb-5">{heading}</h2>
          <p className="text-sand text-lg mb-8">{body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${site.phoneRaw}`} className="btn-light">
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-outline-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
      <BoatScrollBand />
    </section>
  )
}
