/**
 * Centralised, typed content for the landing page.
 * Edit copy here without touching component markup.
 *
 * NOTE FOR LAUNCH: testimonials and society names below are placeholders —
 * replace them with real, verified content before going live.
 */

export const NAV_LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Sports', href: '#sports' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
] as const

/* ---------- Form options ---------- */
export const SPORTS_OPTIONS = [
  'Cricket', 'Football', 'Tennis', 'Badminton',
  'Basketball', 'Swimming', 'Skating', 'Karate',
] as const

export const CHILD_AGES = Array.from({ length: 13 }, (_, i) => `${i + 3} years`) // 3-15

export const SOCIETY_POSITIONS = ['AoA President', 'AoA Member', 'Other'] as const

/* ---------- Hero stats (true-by-design, not traction claims) ---------- */
export interface Stat { value: string; label: string }
export const STATS: Stat[] = [
  { value: '100%', label: 'ID & background-verified coaches' },
  { value: '8+', label: 'Sports coached on demand' },
  { value: '3-15', label: 'Age range we plan sessions for' },
  { value: '3-8 km', label: 'Smart radius for a nearby court' },
]

/* ---------- Sports we cover ---------- */
export type SportIcon =
  | 'cricket' | 'football' | 'tennis' | 'badminton'
  | 'basketball' | 'swimming' | 'skating' | 'karate'

export interface Sport { name: string; icon: SportIcon; note: string }
export const SPORTS: Sport[] = [
  { name: 'Cricket', icon: 'cricket', note: 'Batting, bowling & match play' },
  { name: 'Football', icon: 'football', note: 'Footwork, drills & small-sided games' },
  { name: 'Tennis', icon: 'tennis', note: 'Strokes, serve & rallies' },
  { name: 'Badminton', icon: 'badminton', note: 'Footwork, smashes & control' },
  { name: 'Basketball', icon: 'basketball', note: 'Dribbling, shooting & defence' },
  { name: 'Swimming', icon: 'swimming', note: 'Water safety & stroke technique' },
  { name: 'Skating', icon: 'skating', note: 'Balance, turns & confidence' },
  { name: 'Karate', icon: 'karate', note: 'Discipline, forms & self-defence' },
]

/* ---------- How it works ---------- */
export interface Step { num: string; title: string; body: string }
export const STEPS: Step[] = [
  { num: '01', title: 'Enter society & age',
    body: 'Tell us your housing society and your child\u2019s age. We instantly map coaches who train nearby.' },
  { num: '02', title: 'Choose a verified coach',
    body: 'Browse vetted profiles, real reviews and credentials \u2014 every coach is ID & background checked.' },
  { num: '03', title: 'Book, chat & play',
    body: 'Lock a slot, message your coach in-app, and your child trains right downstairs. Track every session.' },
]

/* ---------- Safety / trust pillars ---------- */
export interface SafetyItem { icon: 'shield' | 'badge' | 'chat' | 'pin'; title: string; body: string }
export const SAFETY: SafetyItem[] = [
  { icon: 'badge', title: 'Verified, every coach',
    body: 'Government ID and background checks are mandatory before any coach can list. No exceptions.' },
  { icon: 'pin', title: 'Right inside your gate',
    body: 'Sessions happen on your society\u2019s own court \u2014 no main-road travel, no unfamiliar venues.' },
  { icon: 'chat', title: 'Everything in one app',
    body: 'Chat, scheduling and session history stay in-app, so you always know who, where and when.' },
  { icon: 'shield', title: 'Smart radius backup',
    body: 'No court in your society? We find a safe, vetted alternate court within 3\u20138 km.' },
]

/* ---------- The shift (problem -> solution) ---------- */
export const OLD_WAY = [
  'Hours lost in Noida peak-hour traffic, every single day.',
  'Blind trust placed in unknown, unverified trainers.',
  'No court in the society? Your child simply misses out.',
  'Rigid academy batches that ignore your child\u2019s level.',
]
export const NEW_WAY = [
  'The coach comes to you \u2014 just send your child downstairs.',
  '100% ID & background-verified coaches, always.',
  'Smart radius finds a vetted alternate court within 3\u20138 km.',
  'Sessions matched to your child\u2019s age, sport and pace.',
]

/* ---------- Testimonials (PLACEHOLDER - replace before launch) ---------- */
export interface Testimonial { quote: string; name: string; meta: string }
export const TESTIMONIALS: Testimonial[] = [
  { quote: 'My daughter trains on our own society court now. Ten minutes from the lift to the lesson \u2014 no more evening traffic runs.',
    name: 'A. Sharma', meta: 'Parent \u00b7 Sector 121' },
  { quote: 'Seeing the coach\u2019s verification and reviews up front made the decision easy. The in-app chat keeps everything transparent.',
    name: 'R. Verma', meta: 'Parent \u00b7 Sector 78' },
  { quote: 'I coach kids across three nearby societies without commuting across the city. The slots and payments are sorted for me.',
    name: 'Coach Amit', meta: 'Cricket Coach \u00b7 6 yrs' },
]

/* ---------- Societies (PLACEHOLDER examples for the onboarding strip) ---------- */
export const SOCIETIES = [
  'Cleo County', 'ATS Greens', 'Supertech Capetown', 'Jaypee Aman',
  'Gaur City', 'Mahagun Moderne', 'Prateek Wisteria', 'Amrapali Sapphire',
]

/* ---------- FAQ ---------- */
export interface Faq { q: string; a: string }
export const FAQS: Faq[] = [
  { q: 'How are coaches verified?',
    a: 'Every coach submits a government ID and clears a background check before their profile goes live. We also surface their experience, credentials and parent reviews so you can decide with full context.' },
  { q: 'What if my society doesn\u2019t have a court?',
    a: 'Our Smart Radius finds a safe, vetted alternate court within roughly 3\u20138 km, so your child never misses out just because your society lacks a facility.' },
  { q: 'What ages and sports do you cover?',
    a: 'We plan sessions for children aged 3 to 15 across 8+ sports including cricket, football, tennis, badminton, basketball, swimming, skating and karate \u2014 with more being added.' },
  { q: 'How does the free trial work?',
    a: 'Join the waitlist as a parent and you\u2019ll get early access plus one free trial class once we launch in your society. No commitment until you\u2019re happy with the coach.' },
  { q: 'I\u2019m a coach \u2014 how do I earn with MySocietyCoach?',
    a: 'Apply to coach, get verified, and we connect you with families in nearby societies. You set your availability; we handle discovery, scheduling and payments.' },
]
