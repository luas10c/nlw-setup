import { useState, useEffect } from 'react'

import { api } from '../../lib/axios'

import { Checkbox } from '../checkbox'
import dayjs from 'dayjs'

interface Props {
  date: Date
  onCompletedChanged(completed: number): void
}

interface HabitInfo {
  possibleHabits: Array<{
    id: string
    title: string
    createdAt: Date
  }>
  completedHabits: string[]
}

export const HabitList = (props: Props) => {
  const { date, onCompletedChanged } = props
  const [habitsInfo, setHabitsInfo] = useState<HabitInfo>({
    completedHabits: [],
    possibleHabits: []
  })

  useEffect(() => {
    const fetchHabits = async () => {
      const { data } = await api.get('/day', {
        params: {
          date
        }
      })

      setHabitsInfo(data)
    }

    fetchHabits()
  }, [])

  useEffect(() => {
    onCompletedChanged(habitsInfo.completedHabits.length)
  }, [habitsInfo.completedHabits])

  const handleToggleHabitStatus = async (habitId: string) => {
    await api.patch(`/habit/${habitId}/status`)

    if (!habitsInfo) {
      return
    }

    const isHabitAlreadyCompleted = habitsInfo.completedHabits.includes(habitId)
    if (isHabitAlreadyCompleted) {
      setHabitsInfo((oldState) => {
        const completedHabits = habitsInfo.completedHabits.filter((id) => id !== habitId)
        return {
          ...oldState,
          completedHabits
        }
      })
    } else {
      setHabitsInfo((oldState) => {
        return {
          ...oldState,
          completedHabits: [...oldState.completedHabits, habitId]
        }
      })
    }
  }

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  return (
    <div>
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <Checkbox
            key={habit.id}
            description={habit.title}
            checked={habitsInfo?.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            onChange={() => handleToggleHabitStatus(habit.id)}
          />
        )
      })}
    </div>
  )
}
