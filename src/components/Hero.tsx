import StatsBand from './StatsBand'
import { useState } from 'react'
import { MapPin, ArrowRight, BadgeCheck } from 'lucide-react'
import { goToWaitlist } from '@/lib/scroll'
import CoachCardMock from './CoachCardMock'
import WaitlistForm from './WaitlistForm'


export default function Hero() {
  const [society, setSociety] = useState('')

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid-ink pointer-events-none absolute inset-0 opacity-50" />

      <div className="wrap relative grid grid-cols-1 items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <span className="eyebrow inline-flex items-start gap-2 text-orange">
  <BadgeCheck size={15} className="mt-0.5 shrink-0" /> Hyperlocal sports, verified coaches
</span>

          <h1 className="mt-5 text-[clamp(33px,7.5vw,68px)] font-medium leading-[1.0] tracking-[-0.025em]">
            Your child&rsquo;s coach,
            <br />
            <span className="italic text-orange">inside your society.</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-clay">
            Verified sports coaches who train your child on your own housing-society
            court in Noida. No traffic, no travel &mdash; just send them downstairs and play.
          </p>

          <div className="mt-8 hidden max-w-[500px] flex-col gap-2.5 lg:flex lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-2.5 rounded-full border border-line bg-white py-2.5 pl-5 pr-2.5 shadow-sm">
              <MapPin size={18} className="shrink-0 text-orange" />
              <input
                value={society}
                onChange={(e) => setSociety(e.target.value)}
                type="text"
                aria-label="Housing society name"
                placeholder="Enter your housing society&hellip;"
                className="min-w-0 flex-1 bg-transparent py-1.5 text-[15px] outline-none placeholder:text-clay/70"
              />
            </div>
            <button
              onClick={() => goToWaitlist('Hero')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-orange-dark"
            >
              Find coaches
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-5 hidden items-center gap-2 text-[13px] text-clay lg:flex">
            <BadgeCheck size={15} className="text-verify" />
            Every coach is ID &amp; background-verified before they ever list.
          </div>
        </div>

  <div className="lg:px-0">
    <div className="hidden px-2 sm:px-10 lg:block lg:px-0">
      <CoachCardMock />
    </div>
    <div className="lg:hidden">
      <WaitlistForm />
    </div>
  </div>
</div>

        <StatsBand className="hidden lg:block" />
      </section>
  )
}
