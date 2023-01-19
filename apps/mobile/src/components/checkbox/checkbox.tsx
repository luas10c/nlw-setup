import { TouchableOpacity, View, Text } from 'react-native'
import clsx from 'clsx'

import Check from '#/assets/check.svg'
import colors from 'tailwindcss/colors'

interface Props {
  description: string
  checked?: boolean
  onPress?(): void
}

export const Checkbox = (props: Props) => {
  const { description, checked, onPress } = props

  return (
    <TouchableOpacity
      className="flex-row mb-2 mt-2 items-center"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        className={clsx('w-8 h-8 rounded-lg items-center justify-center', {
          'bg-zinc-900': !checked,
          'bg-green-500': checked
        })}
      >
        {checked && <Check color={colors.white} width={20} height={20} />}
      </View>

      <Text className="text-white font-semibold text-base ml-3">{description}</Text>
    </TouchableOpacity>
  )
}
