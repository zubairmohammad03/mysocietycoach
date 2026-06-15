import { goToWaitlist } from '@/lib/scroll'

export default function AnnouncementBar() {
  return (
    <div className="hidden bg-ink text-paper lg:block ...">
      <button
        onClick={() => goToWaitlist('Announcement bar')}
        className="wrap flex h-9 w-full items-center justify-center gap-2 text-center"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
        <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-paper/80">
          Now onboarding societies across Delhi-NCR
        </span>
        <span className="hidden font-mono text-[11.5px] uppercase tracking-[0.18em] text-orange sm:inline">
          → Join the waitlist
        </span>
      </button>
    </div>
  )
}
