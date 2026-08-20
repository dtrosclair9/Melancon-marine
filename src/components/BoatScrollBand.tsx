'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/** Side-profile inland push tug, drawn in brand navy + cream. */
function TugSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 150" className={className} aria-hidden="true">
      {/* mast + radar */}
      <line x1="126" y1="18" x2="126" y2="52" stroke="#0b2233" strokeWidth="4" />
      <line x1="112" y1="26" x2="140" y2="26" stroke="#0b2233" strokeWidth="4" strokeLinecap="round" />
      <circle cx="126" cy="15" r="4" fill="#0b2233" />
      {/* wheelhouse */}
      <rect x="104" y="42" width="92" height="34" rx="4" fill="#123145" />
      <rect x="112" y="50" width="18" height="14" rx="2" fill="#faf9f5" opacity="0.92" />
      <rect x="136" y="50" width="18" height="14" rx="2" fill="#faf9f5" opacity="0.92" />
      <rect x="160" y="50" width="18" height="14" rx="2" fill="#faf9f5" opacity="0.92" />
      {/* stacks */}
      <rect x="208" y="40" width="13" height="36" rx="2" fill="#0b2233" />
      <rect x="228" y="40" width="13" height="36" rx="2" fill="#0b2233" />
      <rect x="206" y="36" width="17" height="6" rx="2" fill="#123145" />
      <rect x="226" y="36" width="17" height="6" rx="2" fill="#123145" />
      {/* main deckhouse */}
      <rect x="88" y="72" width="170" height="28" rx="3" fill="#1d4460" />
      <rect x="98" y="79" width="12" height="10" rx="2" fill="#faf9f5" opacity="0.85" />
      <rect x="118" y="79" width="12" height="10" rx="2" fill="#faf9f5" opacity="0.85" />
      <rect x="138" y="79" width="12" height="10" rx="2" fill="#faf9f5" opacity="0.85" />
      <rect x="182" y="79" width="12" height="10" rx="2" fill="#faf9f5" opacity="0.85" />
      <rect x="202" y="79" width="12" height="10" rx="2" fill="#faf9f5" opacity="0.85" />
      {/* push knees at the bow */}
      <rect x="24" y="52" width="10" height="52" rx="2" fill="#0b2233" />
      <rect x="42" y="60" width="9" height="44" rx="2" fill="#123145" />
      {/* hull */}
      <path d="M12 100 L316 100 L306 138 L28 138 Q14 138 12 118 Z" fill="#0b2233" />
      {/* rub rail */}
      <rect x="12" y="100" width="304" height="6" rx="3" fill="#123145" />
      {/* deck fittings */}
      <rect x="66" y="92" width="14" height="8" rx="2" fill="#0b2233" />
      <rect x="270" y="92" width="14" height="8" rx="2" fill="#0b2233" />
    </svg>
  )
}

function WaveStrip({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0 30 Q 60 12 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30 T 1080 30 T 1200 30 T 1320 30 T 1440 30 V 60 H 0 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Scroll-driven tug crossing a wave band. The boat's position is scrubbed by
 * scroll progress through the section (Framer useScroll + useTransform);
 * reduced-motion users get a static composition.
 */
export default function BoatScrollBand() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['-30vw', '102vw'])

  return (
    <div ref={ref} className="relative h-40 md:h-48 overflow-hidden bg-ink" aria-hidden="true">
      {/* back water layer */}
      <WaveStrip className="absolute bottom-10 left-0 w-[110%] h-12 text-accent-dark/40" flip />
      {/* the tug */}
      <motion.div
        style={reduce ? { left: '38%' } : { x }}
        className="absolute bottom-8 w-48 md:w-64"
      >
        <div className="boat-bob">
          <TugSilhouette className="w-full h-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]" />
        </div>
      </motion.div>
      {/* front water layer overlapping the hull */}
      <WaveStrip className="absolute -bottom-1 left-0 w-[110%] h-14 text-ink-deep" />
      <WaveStrip className="absolute -bottom-3 left-0 w-[110%] h-10 text-accent-dark/60" flip />
    </div>
  )
}
