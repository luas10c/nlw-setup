import { TouchableOpacity } from 'react-native'

import { DAY_SIZE } from '#/constants'

interface Props {
  onPress?(): void
}

export const HabitDay = (props: Props) => {
  const { onPress } = props

  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      onPress={onPress}
      activeOpacity={0.7}
    />
  )
}
