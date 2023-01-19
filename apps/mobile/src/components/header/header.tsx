import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import colors from 'tailwindcss/colors'

import Logo from '#/assets/logo.svg'

import Plus from '#/assets/plus.svg'

export const Header = () => {
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
        activeOpacity={0.7}
        onPress={() => navigate('CreateHabit')}
      >
        <Plus color={colors.violet[500]} />
        <Text className="text-white ml-3 font-semibold text-sm uppercase">Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
