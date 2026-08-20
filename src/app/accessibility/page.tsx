import type { Metadata } from 'next'
import { BASE_URL, ogImage, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Melancon Marine is committed to digital accessibility and conforming to WCAG 2.2 Level AA. Learn how to report an accessibility barrier on our website.',
  alternates: { canonical: `${BASE_URL}/accessibility` },
  openGraph: {
    title: `Accessibility Statement | ${site.name}`,
    description: 'Our commitment to an accessible website for everyone.',
    url: `${BASE_URL}/accessibility`,
    images: [ogImage],
  },
}

export default function AccessibilityPage() {
  return (
    <div className="section-padding bg-cream">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-semibold mb-2">Accessibility Statement</h1>
        <p className="text-earth-muted mb-8">Last updated: August 20, 2026</p>

        <div className="space-y-6 text-earth-light leading-relaxed">
          <p>
            {site.name} is committed to making our website accessible to everyone, including
            people with disabilities. We aim to conform to the{' '}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/" className="text-primary underline">
              Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
            </a>
            , the standard recognized for meeting the effective-communication requirements of the
            Americans with Disabilities Act.
          </p>

          <h2 className="text-2xl font-semibold">What we&apos;ve done</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sufficient color contrast for text and interactive elements</li>
            <li>Full keyboard operability and a visible focus indicator</li>
            <li>A &ldquo;skip to main content&rdquo; link and semantic landmarks</li>
            <li>Descriptive alt text on images and labels on every form field</li>
            <li>Support for screen readers and assistive technology</li>
            <li>Reduced-motion alternatives for animation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Report a barrier</h2>
          <p>
            If you encounter any part of our site that is difficult to use or access, please tell
            us so we can fix it. Call{' '}
            <a href={`tel:${site.phoneRaw}`} className="text-primary underline">{site.phoneDisplay}</a>{' '}
            or email{' '}
            <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>{' '}
            and we will work to address it.
          </p>
        </div>
      </div>
    </div>
  )
}
