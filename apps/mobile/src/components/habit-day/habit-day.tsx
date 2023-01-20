import { TouchableOpacity } from 'react-native'
import clsx from 'clsx'

import { DAY_SIZE } from '#/constants'
import dayjs from 'dayjs'

interface Summary {
  id: string
  amount: number
  completed: number
  date: Date
}

interface Props {
  onPress?(id?: string): void
  data?: Summary
}

export const HabitDay = (props: Props) => {
  const { onPress = (id?: string) => {}, data } = props

  if (!data) {
    return (
      <TouchableOpacity
        className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
        style={{ width: DAY_SIZE, height: DAY_SIZE }}
        activeOpacity={0.7}
      />
    )
  }

  const { id, amount, completed, date } = data

  const amountPercentage = amount > 0 ? Math.round(completed / amount) * 100 : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentyDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx('rounded-lg border-2 m-1', {
        'bg-zinc-900 border-zinc-800': amountPercentage === 0,
        'bg-violet-900 border-violet-700': amountPercentage > 0 && amountPercentage < 20,
        'bg-violet-800 border-violet-600': amountPercentage > 20 && amountPercentage < 40,
        'bg-violet-700 border-violet-500': amountPercentage > 40 && amountPercentage < 60,
        'bg-violet-600 border-violet-500': amountPercentage > 60 && amountPercentage < 80,
        'bg-violet-500 border-violet-400': amountPercentage > 80,
        'border-4 border-white': isCurrentyDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      onPress={() => onPress(id)}
      activeOpacity={0.7}
    />
  )
}
