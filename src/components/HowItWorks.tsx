import { STEPS } from '@/data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="How it works"
          title={
            <>
              From your sofa to the court in{' '}
              <span className="italic text-orange">three steps.</span>
            </>
          }
          intro="No academy hunting, no commute. Set it up once and your child trains on schedule, close to home."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 90}>
              <div className="group h-full bg-paper p-8 transition-colors hover:bg-white">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[13px] font-medium text-orange">{step.num}</span>
                  <span className="h-2.5 w-2.5 rounded-full border border-line transition-colors group-hover:border-orange group-hover:bg-orange" />
                </div>
                <h3 className="mt-8 text-[22px] font-medium">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-clay">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
