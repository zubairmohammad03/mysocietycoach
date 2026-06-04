import { getLeadSource } from './leadSource'

export type WaitlistRole = 'parent' | 'society' | 'coach'

const ENDPOINT = import.meta.env.VITE_SHEETS_WEBAPP_URL as string | undefined

/**
 * Sends one waitlist submission to the Google Sheets web app.
 *
 * We use `mode: 'no-cors'` with a text/plain body so the browser treats this
 * as a "simple" request (no CORS preflight, which Apps Script can't answer).
 * The response is opaque — we can't read it — so a resolved promise is treated
 * as success and only network failures reject. That's the right trade-off for a
 * waitlist: the row still gets written.
 */
export async function submitWaitlist(role: WaitlistRole, data: Record<string, string>) {
  if (!ENDPOINT) {
    throw new Error(
      'Missing VITE_SHEETS_WEBAPP_URL — add your Apps Script web app URL to a .env file.',
    )
  }

  const payload = {
    role,
    source: getLeadSource(),
    ...data,
  }

  await fetch(ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
}
