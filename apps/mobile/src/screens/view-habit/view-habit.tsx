import { View, ScrollView, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'

import { BackButton } from '#/components/back-button'
import { ProgressBar } from '#/components/progress-bar'
import { Checkbox } from '#/components/checkbox'

interface Params {
  date: string
}

export const ViewHabit = () => {
  const route = useRoute()
  const { date } = route.params as Params

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <BackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="mt-6 text-white font-extrabold text-3xl lowercase">
          {dayAndMonth}
        </Text>

        <ProgressBar value={70} />

        <View className="mt-6">
          <Checkbox description="Beber 2L de água" checked={false} />
          <Checkbox description="Caminhar" checked={false} />
        </View>
      </ScrollView>
    </View>
  )
}
