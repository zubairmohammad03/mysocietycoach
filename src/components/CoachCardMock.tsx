import { BadgeCheck, Star, MapPin, MessageCircle } from 'lucide-react'

export default function CoachCardMock() {
  return (
    <div className="relative">
      {/* dark stage with court motif */}
      <div className="relative overflow-hidden rounded-[26px] bg-ink p-6 shadow-[0_40px_80px_-30px_rgba(14,16,21,0.55)]">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        {/* court arc */}
        <svg
          className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 text-orange/25"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="30" />
          <line x1="2" y1="50" x2="98" y2="50" />
        </svg>

        {/* coach card */}
        <div className="relative rounded-2xl border border-line/60 bg-paper p-5">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink font-display text-xl font-semibold text-paper">
              RA
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-[19px] font-semibold leading-none">Coach Rhea A.</h3>
                <BadgeCheck size={17} className="text-verify" />
              </div>
              <p className="mt-1 text-[13.5px] text-clay">Tennis · 7 yrs experience</p>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-orange text-orange" />
                  ))}
                </div>
                <span className="text-[12.5px] font-semibold">4.9</span>
                <span className="text-[12.5px] text-clay">(128)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-paper-deep px-3 py-2 text-[12.5px] text-ink/80">
            <MapPin size={14} className="text-orange" />
            Trains at <span className="font-semibold">Cleo County</span> · 0.0 km away
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-line bg-paper px-3 py-1.5 text-[12px] font-medium">
              Today · 5:00 PM
            </span>
            <span className="rounded-full border border-line bg-paper px-3 py-1.5 text-[12px] font-medium">
              Tomorrow · 6:30 PM
            </span>
          </div>

          <button className="mt-4 w-full rounded-xl bg-orange py-3 text-[14.5px] font-semibold text-white">
            Book a free trial
          </button>
        </div>
      </div>

      {/* floating confirmation toast */}
      <div className="absolute -bottom-5 left-2 flex sm:-left-4 items-center gap-2.5 rounded-2xl border border-line bg-paper px-4 py-3 shadow-[0_20px_40px_-18px_rgba(14,16,21,0.4)]">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-verify/12 text-verify">
          <MessageCircle size={17} />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold">Session confirmed</p>
          <p className="text-[11.5px] text-clay">In-app chat with Coach Rhea</p>
        </div>
      </div>
    </div>
  )
}
