import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroCinematic from '@/components/HeroCinematic'
import HeroVideo from '@/components/HeroVideo'
import { site } from '@/lib/site'

// Internal preview only — never indexed, never in the sitemap.
export const metadata: Metadata = {
  title: 'Homepage hero options (preview)',
  robots: { index: false, follow: false },
}

const OPTIONS = [
  {
    id: 'B',
    label: 'Option B — Drone view, full screen',
    note: 'Aerial of the tug pushing a loaded barge down the bayou. Most dramatic first impression.',
    image: '/images/drone-pusher-b.jpg',
    alt: 'Aerial view of a Melancon Marine tugboat pushing a loaded barge along the Intracoastal Waterway',
    pos: 'object-[center_55%]',
  },
  {
    id: 'C',
    label: 'Option C — Drone view, angled',
    note: 'Same idea from a lower angle with the marsh bank alongside. Warmer, less symmetrical.',
    image: '/images/drone-pusher-a.jpg',
    alt: 'Aerial view of a Melancon Marine tugboat and barge running a South Louisiana bayou',
    pos: 'object-[center_50%]',
  },
  {
    id: 'D',
    label: 'Option D — Drone view, close alongside',
    note: 'Tight on the boat itself. Best if the boat is the point rather than the scale of the run.',
    image: '/images/drone-pusher-c.jpg',
    alt: 'Aerial view alongside a Melancon Marine tugboat pushing a deck barge',
    pos: 'object-[center_45%]',
  },
]

export default function HeroPreviewPage() {
  return (
    <>
      <div className="bg-ink text-cream">
        <div className="container-wide py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-pale mb-2">
            Internal preview
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold !text-cream mb-3">
            Homepage hero options
          </h1>
          <p className="text-sand max-w-2xl">
            Five versions of the top of the homepage. A is what is on the site now. E is a short drone video
            that loops. B, C, and D are still aerials. Scroll through and pick a letter.
          </p>
        </div>
      </div>

      {/* Option A — the current split hero, rebuilt here for side-by-side comparison */}
      <div className="border-t-4 border-primary">
        <div className="container-wide pt-8 pb-2">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-dark">
            Option A — Split layout (current site)
          </h2>
          <p className="text-earth-light text-sm mt-1">
            Headline on cream with the photo beside it. Calmest and easiest to read.
          </p>
        </div>
        <section className="bg-cream overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-12 md:py-16">
              <div>
                <p className="section-label mb-4">Larose, Louisiana · Bayou Lafourche</p>
                <h3 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.08] mb-6 text-ink">
                  Marine Towing, Equipment Rentals &amp; Marine Construction in Larose, Louisiana
                </h3>
                <p className="text-lg text-earth-light leading-relaxed mb-8 max-w-xl">
                  Melancon Marine runs tugs, spud barges, crew boats, and airboats out of Larose, where
                  Bayou Lafourche meets the Intracoastal Waterway.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`tel:${site.phoneRaw}`} className="btn-primary">Call {site.phoneDisplay}</a>
                  <Link href="/contact" className="btn-outline">Request a Quote</Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-line">
                <Image
                  src="/images/tug-pushing-icw.jpg"
                  alt="Melancon Marine tugboat pushing a vessel down the Intracoastal Waterway"
                  width={2000}
                  height={1582}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Option E — the moving one */}
      <div className="border-t-4 border-primary">
        <div className="container-wide pt-8 pb-4">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-dark">
            Option E — Drone VIDEO (5 seconds, loops, no sound)
          </h2>
          <p className="text-earth-light text-sm mt-1">
            Same aerial, but moving: the drone drifts forward as the boat runs. Falls back to the still
            photo on phones, on slow connections, and for anyone who has motion turned off.
          </p>
        </div>
        <HeroVideo
          src="/video/hero-drone.mp4"
          poster="/images/drone-pusher-b.jpg"
          posterAlt="Aerial view of a Melancon Marine tugboat pushing a loaded barge along the Intracoastal Waterway"
          posterPosition="object-[center_55%]"
        />
      </div>

      {OPTIONS.map((o) => (
        <div key={o.id} className="border-t-4 border-primary">
          <div className="container-wide pt-8 pb-4">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-dark">{o.label}</h2>
            <p className="text-earth-light text-sm mt-1">{o.note}</p>
          </div>
          <HeroCinematic image={o.image} imageAlt={o.alt} imagePosition={o.pos} />
        </div>
      ))}

      <div className="bg-cream-dark border-t border-line">
        <div className="container-wide py-12 text-center">
          <p className="text-earth-light mb-4">
            Pick a letter and we will set it as the homepage.
          </p>
          <Link href="/" className="btn-primary">Back to the live homepage</Link>
        </div>
      </div>
    </>
  )
}
