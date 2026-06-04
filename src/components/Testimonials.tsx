import { TESTIMONIALS } from '@/data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <SectionHeading
          index="06"
          eyebrow="From the community"
          title={
            <>
              Parents and coaches,
              <br />
              on the same side.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 sm:p-8">
                <span className="font-display text-5xl leading-none text-orange/30">&ldquo;</span>
                <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-ink/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <div className="font-display text-[16px] font-medium">{t.name}</div>
                  <div className="mt-0.5 text-[13px] text-clay">{t.meta}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
