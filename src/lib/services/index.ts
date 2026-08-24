import { towingAndRentals } from './towingAndRentals'
import { rentalFleet } from './rentalFleet'
import { construction } from './construction'
import type { ServicePage } from './types'

export type { ServicePage, Faq } from './types'

export const servicePages: ServicePage[] = [
  ...towingAndRentals,
  ...rentalFleet,
  ...construction,
]

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug)
}

/** The three locked service buckets, for homepage + services index cards */
export const serviceBuckets = [
  {
    href: '/services/marine-towing-and-transportation-louisiana',
    title: 'Marine Towing & Transportation',
    blurb:
      'Tug and barge towing on the ICW, Bayou Lafourche, and the Fourchon corridor, with two 1,200 HP tugs and equipment brokering of all types.',
    image: '/images/tug-pushing-spud-barge.jpg',
    imageAlt: 'Melancon Marine tugboat pushing a spud barge on a Louisiana waterway',
    imagePosition: 'object-[center_65%]',
    chips: ['2× 1,200 HP TUGS', 'ICW + BAYOUS', 'BROKERING'],
  },
  {
    href: '/services/equipment-rentals-louisiana',
    title: 'Equipment Rentals',
    blurb:
      "Spud barges with long-reach excavators, tugboats, Hanko's-built crew boats, and airboats, delivered to your job site by our own tugs.",
    image: '/images/airboat-crew-boat-boathouse.jpg',
    imageAlt: 'Airboat and crew boat staged under the boathouse at the Melancon Marine yard',
    chips: ['SPUD BARGES', 'CREW BOATS', 'AIRBOATS'],
  },
  {
    href: '/services/marine-construction-louisiana',
    title: 'Marine Construction',
    blurb:
      'Pile driving, bulkheads, and dock building from our own floating equipment, plus airboat herbicide spraying for marsh and canals.',
    image: '/images/pile-driving-barge-card.jpg',
    imageAlt: 'Long-reach excavator and pile-driving rig working from a barge in South Louisiana',
    chips: ['PILE DRIVING', 'BULKHEADS', 'DOCKS'],
  },
]
