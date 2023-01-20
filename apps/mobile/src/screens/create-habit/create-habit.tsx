import { useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert
} from 'react-native'
import colors from 'tailwindcss/colors'

import Check from '#/assets/check.svg'

import { BackButton } from '#/components/back-button'
import { Checkbox } from '#/components/checkbox'
import { api } from '#/lib/axios'

const avaiableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export const CreateHabit = () => {
  const [weekDays, setWeekDays] = useState<number[]>([])
  const [title, setTitle] = useState('')

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      setWeekDays((oldState) => oldState.filter((item) => item !== weekDay))
      return
    }

    setWeekDays((oldState) => [...oldState, weekDay])
  }

  const handleSubmit = async () => {
    if (!title || !weekDays || weekDays.length === 0) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Todos os campos precisam está preenchidos', 100)
      } else {
        Alert.alert('Todos os campos precisam está preenchidos')
      }
      return
    }

    try {
      await api.post('/habit', {
        title,
        weekDays
      })
      setTitle('')
      setWeekDays([])
      if (Platform.OS === 'android') {
        ToastAndroid.show('Hábito criado com sucesso!', 100)
      } else {
        Alert.alert('Hábito criado com sucesso!')
      }
    } catch (error) {
      if (error instanceof Error) {
        if (Platform.OS === 'android') {
          ToastAndroid.show(error.message, 100)
        } else {
          Alert.alert(error.message)
        }
      }
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <BackButton />
      <Text className="mt-6 text-white font-extrabold text-3xl">Criar Hábito</Text>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          onChangeText={setTitle}
          placeholder="Ex.: Exercícios, Dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>
        {avaiableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox
              key={weekDay}
              description={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          )
        })}
      </ScrollView>

      <TouchableOpacity
        className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6 mb-6"
        onPress={handleSubmit}
        activeOpacity={0.7}
      >
        <Check color={colors.white} width={20} height={20} />
        <Text className="font-semibold text-base text-white ml-2">Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}
