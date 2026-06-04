import type { SelectHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Check } from 'lucide-react'

const inputBase =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-clay/60 focus:border-orange focus:ring-4 focus:ring-orange/12'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
export function TextField({ label, ...rest }: TextFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-semibold text-ink/75">{label}</span>
      <input {...rest} className={inputBase} />
    </label>
  )
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  placeholder: string
  options: readonly string[]
}
export function SelectField({ label, placeholder, options, ...rest }: SelectFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-semibold text-ink/75">{label}</span>
      <select {...rest} required defaultValue="" className={`select-field cursor-pointer ${inputBase}`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

export function SubmitButton({ children, loading }: { children: ReactNode; loading?: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {loading ? 'Sending…' : children}
    </button>
  )
}

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div className="px-2 py-10 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-verify/12 text-verify">
        <Check size={28} strokeWidth={3} />
      </div>
      <h4 className="mt-5 font-display text-[22px] font-medium">{title}</h4>
      <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-clay">{body}</p>
    </div>
  )
}
