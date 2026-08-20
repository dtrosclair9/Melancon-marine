'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

const serviceOptions = [
  'Marine Towing & Transportation',
  'Spud Barge Rental',
  'Tug Boat Rental',
  'Crew Boat Rental',
  'Long-Reach Excavator Rental',
  'Airboat Rental',
  'Airboat Herbicide Spraying',
  'Pile Driving / Bulkhead / Dock',
  'Equipment Brokering',
  'Something else',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-cream border border-line rounded-lg p-8 text-center" role="status">
        <p className="font-serif text-2xl text-ink mb-2">Request received.</p>
        <p className="text-earth-light">
          Thanks for reaching out. We will get back to you about your project. If the water will
          not wait, call{' '}
          <a href={`tel:${site.phoneRaw}`} className="text-primary font-semibold hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          Name <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          type="text" id="name" name="name" required autoComplete="name"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
          Company
        </label>
        <input
          type="text" id="company" name="company" autoComplete="organization"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
          Phone <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          type="tel" id="phone" name="phone" required autoComplete="tel"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          Email <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          type="email" id="email" name="email" required autoComplete="email"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">
          What do you need? <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <select
          id="service" name="service" required defaultValue=""
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth focus:border-primary"
        >
          <option value="" disabled>Select a service…</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-ink mb-1.5">
          Job site location
        </label>
        <input
          type="text" id="location" name="location" placeholder="e.g. Bayou Blue, Houma"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth placeholder:text-earth-muted focus:border-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="timeframe" className="block text-sm font-medium text-ink mb-1.5">
          Timeframe
        </label>
        <input
          type="text" id="timeframe" name="timeframe" placeholder="e.g. needs to mobilize by mid-September"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth placeholder:text-earth-muted focus:border-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Tell us about the job <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="The work, the water, and anything that makes the site tricky."
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-earth placeholder:text-earth-muted focus:border-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send the Request'}
        </button>
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-700" role="alert">
            Something went wrong sending the form. Please call {site.phoneDisplay} instead.
          </p>
        )}
      </div>
    </form>
  )
}
