import { useMemo, useState } from 'react'
import clsx from 'clsx'

import { PopoverHabitDay } from '../popover-habit-day'

interface Props {
  date: Date
  amount?: number
  defaultCompleted?: number
}

export function HabitDay(props: Props) {
  const { date, amount = 0, defaultCompleted = 0 } = props
  const [completed, setCompleted] = useState(defaultCompleted)
  const [openedPopover, setOpenedPopover] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState([0, 0])

  const handleOpenPopover = () => {
    setOpenedPopover((oldState) => !oldState)
  }

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  const completedPercentage = useMemo(() => {
    if (!amount) {
      return 0
    }

    return Math.round((completed / amount) * 100)
  }, [completed, amount])

  return (
    <>
      <button
        type="button"
        className={clsx(
          'w-10 h-10  rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background transition-colors',
          {
            'bg-zinc-900 border-2 border-zinc-800': completedPercentage === 0,
            'border-violet-700 bg-violet-900':
              completedPercentage > 0 && completedPercentage < 20,
            'border-violet-700 bg-violet-800':
              completedPercentage >= 20 && completedPercentage < 40,
            'border-violet-600 bg-violet-700':
              completedPercentage >= 40 && completedPercentage < 60,
            'border-violet-500 bg-violet-600':
              completedPercentage >= 60 && completedPercentage < 80,
            'border-violet-400 bg-violet-500': completedPercentage >= 80
          }
        )}
        onClick={(event) => {
          const { width, height, x, y } = event.currentTarget.getBoundingClientRect()
          setPopoverPosition([x + width / 2, y + height / 2 + 261.5 / 2 + 40])
          setOpenedPopover((oldState) => !oldState)
        }}
      ></button>

      <PopoverHabitDay
        opened={openedPopover}
        position={popoverPosition}
        data={{ date, completedPercentage }}
        onCompletedChanged={handleCompletedChanged}
        onClose={handleOpenPopover}
      />
    </>
  )
}
