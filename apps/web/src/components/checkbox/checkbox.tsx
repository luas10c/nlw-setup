import { Check } from 'phosphor-react'
import clsx from 'clsx'

interface Props {
  checked?: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
  description?: string
}

export const Checkbox = (props: Props) => {
  const { checked, disabled, onChange = () => {}, description } = props

  return (
    <button
      type="button"
      onClick={() => {
        if (disabled) {
          return
        }

        onChange(!checked)
      }}
      className="flex gap-3 mt-2 items-center cursor-pointer select-none group outline-none"
    >
      <div
        className={clsx(
          'bg-zinc-900 border-2 border-zinc-800 w-8 h-8 rounded-lg group-focus:ring-2 group-focus:ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background flex items-center justify-center transition-colors',
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
