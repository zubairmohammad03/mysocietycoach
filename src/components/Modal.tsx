import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  label?: string
  children: ReactNode
}

export default function Modal({ open, onClose, label = 'Dialog', children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div className="modal-overlay fixed inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />
      <div className="modal-panel relative z-10 my-8 w-full max-w-lg">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-2 -top-2 z-20 grid h-9 w-9 place-items-center rounded-full bg-ink text-paper shadow-lg transition-transform hover:scale-105 sm:-right-3 sm:-top-3"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  )
}
