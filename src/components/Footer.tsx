import Link from 'next/link'
import Image from 'next/image'
import { nav, site, serviceAreas } from '@/lib/site'

export default function Footer() {
  const services = nav.find((item) => item.children)?.children ?? []

  return (
    <footer className="bg-ink-deep text-sand">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-cream.png"
              alt="Melancon Marine logo"
              width={149}
              height={120}
              className="h-24 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-sand/85">
              Marine towing, equipment rentals, and marine construction on the water of South
              Louisiana, based in {site.city} on Bayou Lafourche.
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-block mt-4 font-mono text-cream text-lg hover:text-accent-pale transition-colors"
            >
              {site.phoneDisplay}
            </a>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-pale mb-4">Services</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-sand/85 hover:text-cream transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-sand/85 hover:text-cream transition-colors">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-pale mb-4">Company</h2>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-sand/85 hover:text-cream transition-colors">About Melancon Marine</Link></li>
              <li><Link href="/contact" className="text-sm text-sand/85 hover:text-cream transition-colors">Contact & Quotes</Link></li>
              <li><Link href="/privacy" className="text-sm text-sand/85 hover:text-cream transition-colors">Privacy Policy</Link></li>
              <li><Link href="/accessibility" className="text-sm text-sand/85 hover:text-cream transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-pale mb-4">Service Area</h2>
            <p className="text-sm leading-relaxed text-sand/85">
              {serviceAreas.join(' · ')}
            </p>
            <p className="text-sm mt-4 text-sand/85">
              {site.street}
              <br />
              {site.city}, {site.stateFull} {site.zip}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-ink">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-sand/70">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-sand/70">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/accessibility" className="hover:text-cream transition-colors">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
