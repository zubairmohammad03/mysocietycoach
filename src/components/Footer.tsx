import { NAV_LINKS } from '@/data/content'
import { goToWaitlist } from '@/lib/scroll'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="MySocietyCoach" className="h-14 w-14 rounded-full object-cover" />
              <span className="font-display text-[18px] font-semibold">MySocietyCoach</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-clay">
              Verified sports coaches who train your child inside your own housing
              society. Built for Noida &amp; Greater Noida.
            </p>
          </div>

          {/* explore */}
          <div>
            <p className="eyebrow text-clay">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14.5px] text-ink/80 transition-colors hover:text-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* get started */}
          <div>
            <p className="eyebrow text-clay">Get started</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button onClick={() => goToWaitlist('Footer')} className="text-[14.5px] text-ink/80 transition-colors hover:text-orange">
                  Join as a parent
                </button>
              </li>
              <li>
                <button onClick={() => goToWaitlist('Footer')} className="text-[14.5px] text-ink/80 transition-colors hover:text-orange">
                  Apply to coach
                </button>
              </li>
              <li>
                <a href="mailto:info@mysocietycoach.com" className="text-[14.5px] text-ink/80 transition-colors hover:text-orange">
                  info@mysocietycoach.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-[13px] text-clay md:flex-row md:items-center">
          <p>&copy; 2026 MySocietyCoach. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.16em]">Built for Noida housing societies</p>
        </div>
      </div>
    </footer>
  )
}