import { ArrowRight } from 'lucide-react'
import { useWaitlistModal } from '@/context/waitlist-modal'
import Reveal from './Reveal'

export default function FinalCta() {
  const { open } = useWaitlistModal()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-center text-paper md:px-16 md:py-20">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 text-orange/12"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="55" />
              <line x1="10" y1="100" x2="190" y2="100" />
              <line x1="100" y1="10" x2="100" y2="190" />
            </svg>

            <div className="relative">
              <span className="eyebrow text-orange">Ready when you are</span>
              <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(30px,4.4vw,52px)] font-medium leading-[1.05]">
                Give your child the court{' '}
                <span className="italic text-orange">downstairs.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[16px] text-paper/60">
                Join the Noida waitlist today — parents get a free trial, coaches get nearby families.
              </p>
              <button
                onClick={() => open('Final CTA')}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-orange-dark"
              >
                Join the waitlist
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
