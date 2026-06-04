import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'ink' | 'paper'
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'ink',
}: Props) {
  const muted = tone === 'paper' ? 'text-paper/55' : 'text-clay'
  const rule = tone === 'paper' ? 'bg-paper/20' : 'bg-line'
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <div
          className={`mb-5 flex items-center gap-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className={`eyebrow ${tone === 'paper' ? 'text-orange' : 'text-orange'}`}>
            {index}
          </span>
          <span className={`h-px w-8 ${rule}`} />
          <span className={`eyebrow ${muted}`}>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="text-[clamp(28px,3.8vw,46px)] font-medium leading-[1.05]">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p className={`mt-5 text-[16.5px] leading-relaxed ${muted}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
