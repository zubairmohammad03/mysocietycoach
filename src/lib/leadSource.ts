/**
 * Tracks the "source" of a waitlist lead — which call-to-action the visitor
 * used to reach the form, or a campaign tag if they arrived via a ?utm_source link.
 * Written into the sheet's "Source" column so the client can see what drives signups.
 */
let current: string = (() => {
  if (typeof window === 'undefined') return 'Direct'
  const utm = new URLSearchParams(window.location.search).get('utm_source')
  return utm ? `Campaign: ${utm}` : 'Direct'
})()

export function setLeadSource(label: string) {
  current = label
}

export function getLeadSource() {
  return current
}
