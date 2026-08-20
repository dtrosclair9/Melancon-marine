// Single source of truth for business identity and site-wide constants.
// LAUNCH TODOS (confirm with Alex before go-live):
//  - BASE_URL: melanconmarine.com was unregistered on 2026-08-20 — register + confirm spelling
//  - email: swap FORM + privacy contact from test address to Alex's real email
//  - street address: city-level only until Alex confirms the ops yard address
//  - FORMSPREE_ID: create a NEW Formspree form (never reuse an existing endpoint)

export const BASE_URL = 'https://melanconmarine.com'

export const site = {
  name: 'Melancon Marine',
  legalName: 'Melancon Marine Towing LLC',
  owner: 'Alex Melancon',
  phoneDisplay: '(985) 691-4591',
  phoneRaw: '+19856914591',
  email: 'daynetrosclair@icloud.com', // TEST ONLY — swap before launch
  city: 'Larose',
  state: 'LA',
  stateFull: 'Louisiana',
  zip: '70373',
  parish: 'Lafourche Parish',
  geo: { lat: 29.5725, lng: -90.3818 },
  formspreeId: 'FORMSPREE_ID', // TODO: create new form at formspree.io before launch
}

// Spread into every page's openGraph — pages that set their own openGraph do NOT
// inherit images from the layout. Plain object, not `as const` (Vercel build).
export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Melancon Marine — Marine Towing, Equipment Rentals & Marine Construction in Larose, Louisiana',
}

export const nav = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/marine-towing-and-transportation-louisiana', label: 'Marine Towing & Transportation' },
      { href: '/services/equipment-rentals-louisiana', label: 'Equipment Rentals' },
      { href: '/services/marine-construction-louisiana', label: 'Marine Construction' },
      { href: '/services/spud-barge-rental-louisiana', label: 'Spud Barge Rentals' },
      { href: '/services/crew-boat-rental-louisiana', label: 'Crew Boat Rentals' },
      { href: '/services/airboat-herbicide-spraying-louisiana', label: 'Airboat Spraying' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const serviceAreas = [
  'Larose', 'Cut Off', 'Galliano', 'Golden Meadow', 'Port Fourchon', 'Grand Isle',
  'Houma', 'Thibodaux', 'Morgan City', 'Lafourche Parish', 'Terrebonne Parish',
  'and job sites across South Louisiana',
]
