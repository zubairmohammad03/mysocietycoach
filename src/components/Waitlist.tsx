import { Gift, Building2, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import WaitlistForm from './WaitlistForm'

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-16 sm:py-20 lg:py-24">
      <div className="wrap grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        {/* left: pitch */}
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            index="01"
            eyebrow="Join the waitlist"
            title={
              <>
                Be first when we
                <br />
                <span className="italic text-orange">launch in your society.</span>
              </>
            }
          />
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-orange">
                <Gift size={18} />
              </span>
              <div>
                <p className="font-medium">Parents &amp; students get a free trial</p>
                <p className="text-[14px] text-clay">Early access plus one free trial class, on us.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-orange">
                <Building2 size={18} />
              </span>
              <div>
                <p className="font-medium">Societies get coaching on-site</p>
                <p className="text-[14px] text-clay">Bring vetted coaches to your residents, hassle-free.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-orange">
                <Trophy size={18} />
              </span>
              <div>
                <p className="font-medium">Coaches get nearby families</p>
                <p className="text-[14px] text-clay">We handle discovery, scheduling and payments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* right: form */}
        <Reveal>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  )
}
