import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}

export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>(delay)
  const Tag = as as 'div'
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
