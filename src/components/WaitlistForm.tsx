import { useState, type FormEvent } from 'react'
import { SPORTS_OPTIONS, CHILD_AGES, SOCIETY_POSITIONS, CITIES } from '@/data/content'
import { submitWaitlist, type WaitlistRole } from '@/lib/submitWaitlist'
import { TextField, SelectField, SubmitButton, FormSuccess } from './FormFields'

type Role = WaitlistRole
type Status = 'idle' | 'sending' | 'done' | 'error'

const TABS: { id: Role; label: string }[] = [
  { id: 'parent', label: 'Parent / Student' },
  { id: 'society', label: 'Society' },
  { id: 'coach', label: 'Coach' },
]

/**
 * The waitlist form card (tabs + three role forms + submit logic).
 * Reused by the inline Waitlist section and the popup modal.
 */
export default function WaitlistForm() {
  const [role, setRole] = useState<Role>('parent')
  const [status, setStatus] = useState<Record<Role, Status>>({
    parent: 'idle',
    society: 'idle',
    coach: 'idle',
  })

  function handleSubmit(r: Role) {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
      setStatus((s) => ({ ...s, [r]: 'sending' }))
      try {
        await submitWaitlist(r, data)
        setStatus((s) => ({ ...s, [r]: 'done' }))
        form.reset()
      } catch {
        setStatus((s) => ({ ...s, [r]: 'error' }))
      }
    }
  }

  const ErrorNote = () => (
    <p className="mt-1 text-center text-[13px] text-orange-dark">
      Something went wrong sending that. Please check your connection and try again.
    </p>
  )

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_60px_-35px_rgba(14,16,21,0.3)] sm:p-8">
      {/* segmented toggle */}
      <div className="mb-7 grid grid-cols-3 gap-1 rounded-full border border-line bg-paper p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setRole(t.id)}
            className={`rounded-full px-1.5 py-2.5 text-center text-[11px] font-semibold leading-tight transition-colors min-[400px]:text-[12.5px] sm:text-[14px] ${
              role === t.id ? 'bg-ink text-paper' : 'text-clay hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* PARENT / STUDENT */}
      {role === 'parent' &&
        (status.parent === 'done' ? (
          <FormSuccess
            title={'You\u2019re on the list!'}
            body={'We\u2019ll reach out with your free trial slot the moment we launch in your society.'}
          />
        ) : (
          <form onSubmit={handleSubmit('parent')} className="space-y-4">
            <TextField name="name" label="Parent / student name" placeholder="e.g., Deepanshu" required />
            <TextField name="phone" label="Phone number" type="tel" inputMode="tel" placeholder="e.g., 98XXXXXXXX" required />
            <TextField name="society" label="Housing society" placeholder="e.g., Cleo County, Sector 121" required />
            <SelectField name="city" label="City" placeholder="Select city" options={CITIES} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SelectField name="childAge" label={'Child\u2019s age'} placeholder="Select age" options={CHILD_AGES} />
              <SelectField name="sport" label="Sport" placeholder="Select sport" options={SPORTS_OPTIONS} />
            </div>
            <SubmitButton loading={status.parent === 'sending'}>Get my free trial</SubmitButton>
            {status.parent === 'error' ? (
              <ErrorNote />
            ) : (
              <p className="text-center text-[12.5px] text-clay">
                No spam. We&rsquo;ll only contact you about your trial.
              </p>
            )}
          </form>
        ))}

      {/* SOCIETY */}
      {role === 'society' &&
        (status.society === 'done' ? (
          <FormSuccess
            title="Society registered!"
            body="Our team will get in touch to set up coaching for your residents."
          />
        ) : (
          <form onSubmit={handleSubmit('society')} className="space-y-4">
            <TextField name="name" label="Name" placeholder="e.g., Rajesh Kumar" required />
            <TextField name="phone" label="Phone number" type="tel" inputMode="tel" placeholder="e.g., 98XXXXXXXX" required />
            <TextField name="society" label="Society name" placeholder="e.g., Cleo County, Sector 121" required />
            <SelectField name="city" label="City" placeholder="Select city" options={CITIES} />
            <SelectField name="position" label="Your position" placeholder="Select position" options={SOCIETY_POSITIONS} />
            <TextField name="facilities" label="Sports facilities available" placeholder="e.g., Tennis court, badminton court, pool" required />
            <TextField name="coaching" label="Sports coaching required" placeholder="e.g., Cricket, Swimming, Karate" required />
            <SubmitButton loading={status.society === 'sending'}>Register our society</SubmitButton>
            {status.society === 'error' ? (
              <ErrorNote />
            ) : (
              <p className="text-center text-[12.5px] text-clay">
                We&rsquo;ll coordinate directly with your AoA.
              </p>
            )}
          </form>
        ))}

      {/* COACH */}
      {role === 'coach' &&
        (status.coach === 'done' ? (
          <FormSuccess
            title="Application received!"
            body="Our team will verify your details and connect you with nearby societies soon."
          />
        ) : (
          <form onSubmit={handleSubmit('coach')} className="space-y-4">
            <TextField name="name" label="Coach name" placeholder="e.g., Coach Amit" required />
            <TextField name="phone" label="Phone number" type="tel" inputMode="tel" placeholder="e.g., 98XXXXXXXX" required />
            <SelectField name="sport" label="Primary sport" placeholder="Select primary sport" options={SPORTS_OPTIONS} />
            <SelectField name="city" label="City" placeholder="Select city" options={CITIES} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField name="experience" label="Experience" placeholder="e.g., 5 years" required />
              <TextField name="location" label="Location" placeholder="e.g., Sector 78" required />
            </div>
            <SubmitButton loading={status.coach === 'sending'}>Apply to coach</SubmitButton>
            {status.coach === 'error' ? (
              <ErrorNote />
            ) : (
              <p className="text-center text-[12.5px] text-clay">
                Verification is required before any profile goes live.
              </p>
            )}
          </form>
        ))}
    </div>
  )
}
