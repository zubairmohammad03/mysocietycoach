import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import Modal from '@/components/Modal'
import WaitlistForm from '@/components/WaitlistForm'
import { setLeadSource } from '@/lib/leadSource'

interface WaitlistModalContextValue {
  open: (source?: string) => void
  close: () => void
}

const WaitlistModalContext = createContext<WaitlistModalContextValue | null>(null)

export function WaitlistModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((source?: string) => {
    if (source) setLeadSource(source)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <WaitlistModalContext.Provider value={{ open, close }}>
      {children}
      <Modal open={isOpen} onClose={close} label="Join the waitlist">
        <WaitlistForm />
      </Modal>
    </WaitlistModalContext.Provider>
  )
}

export function useWaitlistModal() {
  const ctx = useContext(WaitlistModalContext)
  if (!ctx) {
    throw new Error('useWaitlistModal must be used within WaitlistModalProvider')
  }
  return ctx
}
