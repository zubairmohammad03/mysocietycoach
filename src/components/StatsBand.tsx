import { STATS } from '@/data/content'

export default function StatsBand({ className = '' }: { className?: string }) {
  return (
    <div className={`border-y border-line bg-paper-deep/60 ${className}`}>
      <div className="wrap grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-7 ${i % 2 === 0 ? 'pr-5' : 'pl-5'} lg:px-8 ${
              i < 2 ? 'border-b border-line lg:border-b-0' : ''
            }`}
          >
            <div className="font-display text-[34px] font-medium leading-none tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] leading-snug text-clay">{s.label}</div>
          </div>
        ))}
        </div>
    </div>
    )
}