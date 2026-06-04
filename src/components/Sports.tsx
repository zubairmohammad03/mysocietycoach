import { ArrowUpRight } from 'lucide-react'
import { SPORTS } from '@/data/content'
import { useWaitlistModal } from '@/context/waitlist-modal'
import SectionHeading from './SectionHeading'
import SportGlyph from './SportGlyph'
import Reveal from './Reveal'

export default function Sports() {
  const { open } = useWaitlistModal()
  return (
    <section id="sports" className="py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="04"
            eyebrow="What your child can learn"
            title={
              <>
                Eight sports,
                <br />
                one safe court nearby.
              </>
            }
          />
          <Reveal delay={120}>
            <button
              onClick={() => open('Sports section')}
              className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-[14px] font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Request a sport
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {SPORTS.map((sport, i) => (
            <Reveal key={sport.name} delay={(i % 4) * 60}>
              <div className="group flex h-full flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink transition-colors group-hover:border-orange group-hover:text-orange">
                  <SportGlyph name={sport.icon} />
                </div>
                <div>
                  <h3 className="font-display text-[19px] font-medium">{sport.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-clay">{sport.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
