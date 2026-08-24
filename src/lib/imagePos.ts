/**
 * Focal points for photos whose subject is not vertically centered.
 *
 * Most of Alex's photos are portrait phone shots. Cropped to a landscape card
 * or gallery tile, the default centering lands on sky or foreground and cuts
 * the boat or machine. These values were tuned against the real 4:3 gallery
 * ratio. Landscape sources are omitted and fall back to center.
 *
 * NOTE: these are Tailwind class strings living in src/lib — that directory
 * MUST stay in the tailwind.config content globs or they compile to nothing.
 */
const IMAGE_POS: Record<string, string> = {
  '/images/pile-driving-barge.jpg': 'object-[center_65%]',
  '/images/excavator-waterside.jpg': 'object-[center_65%]',
  '/images/tug-pushing-spud-barge.jpg': 'object-[center_65%]',
  '/images/bayou-waterfront-spud-barge.jpg': 'object-[center_65%]',
  '/images/tugs-lift-bridge.jpg': 'object-[center_35%]',
  '/images/crew-boat-deck.jpg': 'object-[center_25%]',
}

export function imgPos(src: string): string {
  return IMAGE_POS[src] ?? 'object-center'
}
