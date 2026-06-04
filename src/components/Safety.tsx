import { ShieldCheck, BadgeCheck, MessageCircle, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SAFETY, type SafetyItem } from '@/data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const ICONS: Record<SafetyItem['icon'], LucideIcon> = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  chat: MessageCircle,
  pin: MapPin,
}

export default function Safety() {
  return (
    <section id="safety" className="bg-paper-deep py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="Built on trust"
          align="center"
          title={
            <>
              Safety isn’t a feature here.
              <br />
              <span className="italic text-orange">It’s the foundation.</span>
            </>
          }
          intro="Every decision — from who can coach to where sessions happen — is designed to give parents total peace of mind."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-orange">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-medium leading-snug">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-clay">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
