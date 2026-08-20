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
    image: '/images/hero-towing.jpg',
    imageAlt: 'Tugboat pushing a barge down a South Louisiana bayou at dusk',
    chips: ['2× 1,200 HP TUGS', 'ICW + BAYOUS', 'BROKERING'],
  },
  {
    href: '/services/equipment-rentals-louisiana',
    title: 'Equipment Rentals',
    blurb:
      "Spud barges with long-reach excavators, tugboats, Hanko's-built crew boats, and airboats, delivered to your job site by our own tugs.",
    image: '/images/hero-fleet.jpg',
    imageAlt: 'Marine equipment fleet staged at a South Louisiana dock',
    chips: ['SPUD BARGES', 'CREW BOATS', 'AIRBOATS'],
  },
  {
    href: '/services/marine-construction-louisiana',
    title: 'Marine Construction',
    blurb:
      'Pile driving, bulkheads, and dock building from our own floating equipment, plus airboat herbicide spraying for marsh and canals.',
    image: '/images/hero-dock-building.jpg',
    imageAlt: 'New timber dock construction over calm Louisiana bayou water',
    chips: ['PILE DRIVING', 'BULKHEADS', 'DOCKS'],
  },
]
