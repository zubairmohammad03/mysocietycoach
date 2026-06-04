import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to the element once it scrolls into view.
 * Pair with the `.reveal` class defined in styles/index.css.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delayMs}ms`
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return ref
}
