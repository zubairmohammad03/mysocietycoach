import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-paper-deep py-16 sm:py-20 lg:py-24">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            index="07"
            eyebrow="Good questions"
            title={
              <>
                Everything parents
                <br />
                ask us first.
              </>
            }
          />
        </div>

        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-medium leading-snug">{item.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
                        isOpen ? 'rotate-45 border-orange bg-orange text-white' : 'text-ink'
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pr-12 text-[15px] leading-relaxed text-clay">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
