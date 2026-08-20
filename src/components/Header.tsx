'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { nav, site } from '@/lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const services = nav.find((item) => item.children)

  return (
    <header
      className={`bg-cream sticky top-0 z-50 border-b border-line transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Brand lockup: anchor mark + wordmark text (crisp at any density) */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Melancon Marine — Home">
            <Image
              src="/images/anchor-mark-navy.png"
              alt=""
              aria-hidden="true"
              width={84}
              height={149}
              className="h-11 w-auto"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-ink text-xl tracking-[0.08em]">MELANCON</span>
              <span className="font-mono text-[0.65rem] tracking-[0.42em] text-accent-dark mt-1">MARINE</span>
            </span>
          </Link>

          {/* Desktop nav — full layout gated at lg (iPad portrait gets mobile menu) */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-7">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.href} className="relative" ref={dropdownRef}>
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors duration-200 ${
                          pathname.startsWith('/services') ? 'text-primary' : 'text-earth-light hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-expanded={servicesOpen}
                        aria-controls="services-menu"
                        aria-label="Open services menu"
                        className="text-earth-light hover:text-primary p-1"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {servicesOpen && (
                      <ul
                        id="services-menu"
                        className="absolute left-0 top-full mt-3 w-72 bg-cream border border-line rounded-lg shadow-xl py-2"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === child.href
                                  ? 'text-primary font-semibold'
                                  : 'text-earth-light hover:text-primary hover:bg-sand/50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        pathname === item.href ? 'text-primary' : 'text-earth-light hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <a href={`tel:${site.phoneRaw}`} className="btn-primary text-sm !py-2.5 !px-5 ml-1">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-ink p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav — solid cream panel, no backdrop-filter anywhere in the chain */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-line pb-5 pt-3" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-2 py-2.5 text-sm font-medium rounded transition-colors ${
                      pathname === item.href ? 'text-primary' : 'text-earth-light hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 border-l-2 border-sand-dark pl-3 flex flex-col gap-0.5 mt-1 mb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-2 py-2 text-sm rounded transition-colors ${
                              pathname === child.href
                                ? 'text-primary font-semibold'
                                : 'text-earth-light hover:text-primary'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-3">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary text-sm text-center block">
                  Call {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
