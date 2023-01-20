import { Check } from 'phosphor-react'
import clsx from 'clsx'

interface Props {
  checked?: boolean
  onChange?(value: boolean): void
  description?: string
}

export const Checkbox = (props: Props) => {
  const { checked, onChange = () => {}, description } = props

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex gap-3 mt-6 items-center cursor-pointer select-none"
    >
      <div
        className={clsx(
          'bg-zinc-900 border-2 border-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center',
          {
            'bg-green-600 border-green-700': checked
          }
        )}
      >
        {checked && <Check size={20} className="text-white" />}
      </div>
      <span className="font-semibold text-xl text-white leading-tight">
        {description}
      </span>
    </button>
  )
}
