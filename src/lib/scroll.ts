import { setLeadSource } from './leadSource'

/** Smooth-scroll to an element by id. */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/** Record which CTA was used, then scroll to the waitlist form. */
export function goToWaitlist(source: string) {
  setLeadSource(source)
  scrollToId('waitlist')
}
