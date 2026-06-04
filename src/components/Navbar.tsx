import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/data/content'
import { useWaitlistModal } from '@/context/waitlist-modal'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img src="/logo.png" alt="MySocietyCoach" className="h-10 w-10 rounded-full object-cover" />
      <span className="font-display text-[18px] font-semibold tracking-tight">
        MySocietyCoach
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { open } = useWaitlistModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-medium text-clay transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => open('Navbar')}
          className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-paper transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
        >
          Join waitlist
        </button>
      </div>
    </header>
  )
}
