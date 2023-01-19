import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import colors from 'tailwindcss/colors'

import ArrowLeft from '#/assets/arrow-left.svg'

export const BackButton = () => {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
      <ArrowLeft color={colors.zinc[400]} width={24} height={24} />
    </TouchableOpacity>
  )
}
