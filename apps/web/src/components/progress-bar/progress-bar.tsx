interface Props {
  value?: number
}

export const ProgressBar = (props: Props) => {
  const { value = 20 } = props

  return (
    <div className="relative h-4 rounded-xl bg-zinc-700 w-full mt-4 overflow-hidden">
      <div
        className="absolute top-0 left-0 bg-violet-500 h-4 transition-[width]"
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuemax={100}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}
