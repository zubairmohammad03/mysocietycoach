import type { SportIcon } from '@/data/content'

/**
 * Cohesive, hand-built line-art glyphs (currentColor, 24x24).
 * Used instead of mismatched emoji/stock icons for a custom feel.
 */
export default function SportGlyph({ name, size = 26 }: { name: SportIcon; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'cricket':
      return (
        <svg {...common}>
          <path d="M5 19 16 8" />
          <path d="M14 6l4 4-1.5 1.5-4-4z" />
          <circle cx="7.5" cy="16.5" r="2" />
        </svg>
      )
    case 'football':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8.5l3 2.2-1.1 3.5h-3.8L9 10.7z" />
          <path d="M12 4v1.6M5 9.5l3.4 1M19 9.5l-3.4 1M8 19l1.6-2.8M16 19l-1.6-2.8" />
        </svg>
      )
    case 'tennis':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M6.3 6.3c3 1.2 5 4 5.3 7.4M17.7 17.7c-3-1.2-5-4-5.3-7.4" />
        </svg>
      )
    case 'badminton':
      return (
        <svg {...common}>
          <circle cx="12" cy="18" r="2.4" />
          <path d="M10.2 16.4 6 7M13.8 16.4 18 7M12 15.8V6M8 8.5l8 0" />
        </svg>
      )
    case 'basketball':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16M6.5 6.5c2.2 1.6 2.2 9.4 0 11M17.5 6.5c-2.2 1.6-2.2 9.4 0 11" />
        </svg>
      )
    case 'swimming':
      return (
        <svg {...common}>
          <path d="M3 9c2 0 2 1.5 4 1.5S9 9 11 9s2 1.5 4 1.5S17 9 19 9" />
          <path d="M3 14c2 0 2 1.5 4 1.5S9 14 11 14s2 1.5 4 1.5S17 14 19 14" />
          <circle cx="16" cy="6" r="1.4" />
        </svg>
      )
    case 'skating':
      return (
        <svg {...common}>
          <path d="M6 5v8h9l1.5 2H6" />
          <circle cx="8" cy="18" r="1.5" />
          <circle cx="14" cy="18" r="1.5" />
        </svg>
      )
    case 'karate':
      return (
        <svg {...common}>
          <path d="M4 11h16v2H4z" />
          <path d="M12 13l-2.5 4M12 13l2.5 4" />
        </svg>
      )
    default:
      return null
  }
}
