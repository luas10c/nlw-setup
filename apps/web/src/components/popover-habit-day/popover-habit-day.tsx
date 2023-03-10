import dayjs from 'dayjs'

import { Popover } from '../popover'
import { ProgressBar } from '../progress-bar'
import { HabitList } from '../habit-list'

type Habit = {
  date: Date
  completedPercentage: number
}

interface Props {
  opened?: boolean
  data: Habit
  position: number[]
  onCompletedChanged(completed: number): void
  onClose: () => void
}

export const PopoverHabitDay = (props: Props) => {
  const { opened, data, position, onCompletedChanged, onClose } = props
  const { date, completedPercentage } = data

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  if (!opened) {
    return null
  }

  return (
    <Popover opened={opened} onClose={onClose}>
      <div
        className="absolute min-w-[320px] p-6 rounded-2xl bg-zinc-900 border-2 border-zinc-800 flex flex-col transform-gpu -translate-x-1/2 -translate-y-1/2 after:absolute after:transform-gpu after:-translate-x-1/2 after:-top-2 after:rotate-45 after:left-1/2 after:bg-zinc-900 after:border-2 after:border-transparent after:border-l-zinc-800 after:border-t-zinc-800 after:w-4 after:h-4"
        style={{ left: position[0], top: position[1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
        <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

        <ProgressBar value={completedPercentage} />

        <HabitList date={date} onCompletedChanged={onCompletedChanged} />
      </div>
    </Popover>
  )
}
