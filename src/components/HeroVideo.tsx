'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

type Props = {
  /** mp4 in /public/video */
  src: string
  /** still frame shown before the video plays, and instead of it for reduced motion */
  poster: string
  posterAlt: string
  posterPosition?: string
}

/**
 * Full-bleed video hero. The poster image carries the first paint, the video
 * fades in once it can play, and anyone with reduced-motion set (or a browser
 * that blocks autoplay) simply keeps the still. Muted + playsInline so iOS
 * autoplays inline rather than going fullscreen.
 */
export default function HeroVideo({ src, poster, posterAlt, posterPosition = 'object-center' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // Skip the download entirely for reduced-motion users, small screens
    // (no reason to spend a phone's data on a decorative background), and
    // connections that report themselves as slow or metered.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 767px)').matches
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    const stingy = conn?.saveData === true || /2g/.test(conn?.effectiveType ?? '')
    if (reduce || small || stingy) return

    const v = videoRef.current
    if (!v) return
    v.src = src // assign late so nothing downloads on the skipped paths
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)) // autoplay blocked: poster stays
  }, [src])

  return (
    <section className="relative h-[86vh] min-h-[540px] max-h-[880px] w-full overflow-hidden bg-ink-deep">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${posterPosition}`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
      />

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
