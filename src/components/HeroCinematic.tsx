'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/lib/site'

type Props = {
  image: string
  imageAlt: string
  imagePosition?: string
}

/**
 * Alternate homepage hero: full-bleed photo with bottom-anchored type and a
 * slow push-in. Bottom-up scrim only — no left-dark gradient wash.
 */
export default function HeroCinematic({ image, imageAlt, imagePosition = 'object-center' }: Props) {
  const reduce = useReducedMotion()

  return (
    <section className="relative h-[86vh] min-h-[540px] max-h-[880px] w-full overflow-hidden bg-ink-deep">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.07 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 16, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/65 to-ink-deep/10"
        aria-hidden="true"
      />

      <div className="relative h-full container-wide flex flex-col justify-end pb-14 md:pb-20">
        <div className="max-w-3xl">
          <p className="section-label--light mb-4">Larose, Louisiana · Bayou Lafourche</p>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold !text-cream leading-[1.05] mb-6">
            Marine Towing, Equipment Rentals &amp; Marine Construction
          </h1>
          <p className="text-lg md:text-xl text-sand leading-relaxed mb-8 max-w-2xl">
            Two 1,200 HP tugs, spud barges with excavators, crew boats, and airboats, working the
            ICW and the Port Fourchon corridor.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${site.phoneRaw}`} className="btn-light">
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-outline-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
