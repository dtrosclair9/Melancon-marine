import type { Metadata } from 'next'
import { BASE_URL, ogImage, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Melancon Marine collects, uses, and protects information submitted through this website, including the contact form and technical logs.',
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    title: `Privacy Policy | ${site.name}`,
    description: 'How this website handles your information.',
    url: `${BASE_URL}/privacy`,
    images: [ogImage],
  },
}

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-cream">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-earth-muted mb-8">Last updated: August 20, 2026</p>

        <div className="space-y-6 text-earth-light leading-relaxed">
          <p>
            This policy describes how {site.legalName} (&ldquo;{site.name},&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;) handles information collected through this
            website.
          </p>

          <h2 className="text-2xl font-semibold">Information we collect</h2>
          <p>
            <strong className="text-ink">Contact form.</strong> When you submit our quote
            request form, we receive the information you enter: your name, company, phone
            number, email address, the service you are asking about, your job site location,
            timeframe, and message. We use it to respond to your inquiry and discuss your
            project, and for no other purpose.
          </p>
          <p>
            <strong className="text-ink">Technical logs.</strong> Like nearly all websites, our
            hosting infrastructure automatically records basic technical data such as IP
            address, browser type, pages visited, and timestamps. We use this only for site
            operation and security.
          </p>

          <h2 className="text-2xl font-semibold">Third-party services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink">Formspree</strong> processes our contact form
              submissions and delivers them to our email. Submissions are subject to
              Formspree&apos;s privacy policy.
            </li>
            <li>
              <strong className="text-ink">Vercel</strong> hosts this website and maintains the
              technical logs described above.
            </li>
          </ul>
          <p>
            Fonts and images are served directly from our website, and we have not added
            analytics or advertising trackers to this site.
          </p>

          <h2 className="text-2xl font-semibold">How we use your information</h2>
          <p>
            Information you send us is used to respond to you, prepare quotes, and perform work
            you hire us for. We do not sell your information, and we do not share it with third
            parties except the service providers named above, or where the law requires it.
          </p>

          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>
            This site does not set advertising or analytics cookies. Any cookies present are
            limited to what our hosting platform requires for basic operation.
          </p>

          <h2 className="text-2xl font-semibold">Your choices</h2>
          <p>
            You can ask us what information we hold from your inquiries, ask us to correct it,
            or ask us to delete it. Contact us using the details below and we will take care of
            it.
          </p>

          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>
            {site.legalName}
            <br />
            {site.city}, {site.stateFull} {site.zip}
            <br />
            Phone:{' '}
            <a href={`tel:${site.phoneRaw}`} className="text-primary underline">
              {site.phoneDisplay}
            </a>
            <br />
            Email:{' '}
            <a href={`mailto:${site.email}`} className="text-primary underline">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
