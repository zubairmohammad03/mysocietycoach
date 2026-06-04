import { SOCIETIES } from '@/data/content'

export default function TrustStrip() {
  const row = [...SOCIETIES, ...SOCIETIES]
  return (
    <section className="border-b border-line py-10">
      <div className="wrap">
        <p className="eyebrow mb-7 text-center text-clay">
          Coming soon to housing societies like
        </p>
      </div>
      <div className="marquee relative w-full overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
        <div className="marquee-track gap-12 px-6">
          {row.map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-[22px] font-medium text-ink/35"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
