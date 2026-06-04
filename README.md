# MySocietyCoach — Landing Page

Hyperlocal sports-coaching landing page for housing societies in Noida. Parents find
verified coaches who train their child on their own society court; coaches sign up to
teach nearby families.

## Tech stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **lucide-react** icons + custom SVG sport glyphs
- Type system: **Fraunces** (display serif), **Hanken Grotesk** (body), **JetBrains Mono** (labels)

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

## Page structure (top to bottom)

1. **AnnouncementBar** — launch messaging
2. **Navbar** — sticky, links, CTA
3. **Hero** — editorial headline, society search, stat band, product (coach-card) mock
4. **Waitlist** — 3 tabs (Parent / Student · Society · Coach) + forms
5. **TrustStrip** — onboarding societies marquee
6. **HowItWorks** — 3 numbered steps
7. **TheShift** — old academy vs. our model (dark panel)
8. **Sports** — 8 sports grid with custom glyphs
9. **Safety** — trust & verification pillars
10. **Testimonials** — parent/coach quotes
11. **Faq** — accordion
12. **FinalCta** — closing call to action
13. **Footer** — brand, links, contact

## Source layout

```
src/
├── main.tsx                 # entry — mounts <App/> into #root
├── app/App.tsx              # composes all sections
├── styles/index.css         # Tailwind v4 @theme tokens + base + animations
├── data/content.ts          # ALL editable copy & options (single source of truth)
├── hooks/useScrollReveal.ts # IntersectionObserver reveal-on-scroll
├── lib/scroll.ts            # smooth-scroll helper
└── components/              # one file per section + shared primitives
```

## Customising

- **Copy, sports, stats, FAQ, steps, testimonials**: edit `src/data/content.ts`.
- **Brand colors / fonts**: `@theme` block in `src/styles/index.css`.
- **Forms → Google Sheets**: the three tabs (Parent/Student, Society, Coach) all route
  through the `submit(role)` handler in `src/components/Waitlist.tsx` (marked with
  `// TODO`). Wire it to your Apps Script Web App URL, sending `role` so you can split
  rows by audience / tab.

## Before launch — replace placeholder content

These are illustrative and must be swapped for real, verified content:

- `TESTIMONIALS` in `content.ts` (real parent/coach quotes).
- `SOCIETIES` in `content.ts` (societies you're actually onboarding).
- Stats are intentionally *true-by-design* (e.g. "100% verified", "8+ sports") rather
  than traction numbers, since this is a pre-launch waitlist page.

---

## Connecting the forms to Google Sheets

The three forms post to a Google Apps Script Web App bound to your sheet. No backend
to host, no API keys.

### 1. Add the script to your sheet
1. Open the Google Sheet → **Extensions ▸ Apps Script**.
2. Delete any starter code, paste the contents of [`google-apps-script/Code.gs`](google-apps-script/Code.gs), and **Save**.
   The script writes into the existing tabs `Parent/Student`, `Society` and `Coach`
   and fills the header row automatically on the first submission. (If a tab is
   missing it will be created.)

### 2. Deploy it as a Web App
1. **Deploy ▸ New deployment** → gear icon → **Web app**.
2. Set **Execute as: Me**, and **Who has access: Anyone**.
3. **Deploy**, authorise when prompted, and copy the **Web app URL** (ends in `/exec`).

### 3. Point the site at it
1. Copy `.env.example` to `.env` (or `.env.local`).
2. Paste your URL:
   ```
   VITE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/AKfyc.../exec
   ```
3. Restart the dev server (`npm run dev`). Submit a test entry — a row should appear
   in the matching tab.

> The `.env` file is gitignored, so the URL stays out of source control. On your host
> (Vercel/Netlify/etc.) add `VITE_SHEETS_WEBAPP_URL` as an environment variable and
> rebuild.

### Notes
- Submissions are sent with `mode: 'no-cors'` (Apps Script can't answer CORS preflights),
  so the browser can't read the response. A submission is treated as successful unless
  the network request itself fails. The row is still written. See `src/lib/submitWaitlist.ts`.
- Each row includes a `Timestamp`; the audience is routed by the `role` field to its tab.
- If you change a deployment, use **Manage deployments** and keep the same URL, or update
  `VITE_SHEETS_WEBAPP_URL` with the new one.
