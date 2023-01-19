import { useState, useEffect, ChangeEvent } from 'react'
import clsx from 'clsx'

import { PopoverHabitDay } from '../popover-habit-day'

interface Props {
  amount: number
  completed: number
}

export const HabitDay = (props: Props) => {
  const { amount, completed } = props
  const [openedPopover, setOpenedPopover] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState([0, 0])

  const handleOpenPopover = () => {
    setOpenedPopover((oldState) => !oldState)
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setOpenedPopover(false)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const completedPercentage = Math.round(completed * 100) / amount

  return (
    <div>
      <div
        className={clsx('w-10 h-10  rounded-lg cursor-pointer', {
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
        })}
        onClick={(event) => {
          const { width, height, x, y } = event.currentTarget.getBoundingClientRect()
          setPopoverPosition([x + width / 2, y + height / 2 + 149.5 / 2 + 40])
          setOpenedPopover((oldState) => !oldState)
        }}
      ></div>

      <PopoverHabitDay
        opened={openedPopover}
        position={popoverPosition}
        completedPercentage={completedPercentage}
        onClose={handleOpenPopover}
      />
    </div>
  )
}
