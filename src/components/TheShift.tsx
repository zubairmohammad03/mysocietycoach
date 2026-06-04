import { Check, X } from 'lucide-react'
import { OLD_WAY, NEW_WAY } from '@/data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function TheShift() {
  return (
    <section className="bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="The shift"
          tone="paper"
          title={
            <span className="text-paper">
              Tired of the <span className="italic text-orange">academy hustle</span>?
            </span>
          }
          intro={
            <span className="text-paper/60">
              The old model asks parents to absorb the travel, the risk and the guesswork.
              We rebuilt it around your gate.
            </span>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Old way */}
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-line bg-ink-soft p-6 sm:p-8">
              <p className="eyebrow text-paper/40">The old academy method</p>
              <ul className="mt-6 space-y-4">
                {OLD_WAY.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-paper/70">
                    <X size={18} className="mt-0.5 shrink-0 text-paper/35" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* New way */}
          <Reveal delay={90}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-orange/40 bg-gradient-to-b from-orange/12 to-transparent p-6 sm:p-8">
              <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
              <p className="eyebrow relative text-orange">The MySocietyCoach way</p>
              <ul className="relative mt-6 space-y-4">
                {NEW_WAY.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-paper">
                    <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-orange text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
