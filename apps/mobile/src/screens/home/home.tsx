import { useState, useEffect } from 'react'
import { View, ScrollView, Text, ToastAndroid, Alert, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import { generateDatesFromYearBegining } from '#/utils/generate-dates-from-year-begining'

import { DAY_SIZE } from '#/constants'

import { Header } from '#/components/header'
import { HabitDay } from '#/components/habit-day'
import { api } from '#/lib/axios'
import { Loading } from '#/components/loading'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearsStart = generateDatesFromYearBegining()
const minimumSummaryDatesSizes = 18 * 5
const ammountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearsStart.length

interface Summary {
  id: string
  date: Date
  amount: number
  completed: number
}

export const Home = () => {
  const { navigate } = useNavigation()
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<Summary[]>([])

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true)
        const { data } = await api.get<{ summary: Summary[] }>('/summary')
        const { summary } = data
        setSummary(summary)
      } catch (error) {
        if (error instanceof Error) {
          if (Platform.OS === 'android') {
            ToastAndroid.show(error.message, 100)
          } else {
            Alert.alert(error.message)
          }
        }
      } finally {
        setLoading(false)
      }
    }
    fetchSummary()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <View className="bg-background flex-1 px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((day, index) => {
          return (
            <Text
              key={`${day}-${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {day}
            </Text>
          )
        })}
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearsStart.map((date) => {
            const dayInSummary = summary.find((day) =>
              dayjs(date).isSame(day.date, 'day')
            )

            return (
              <HabitDay
                key={date.toString()}
                data={dayInSummary}
                onPress={() => navigate('ViewHabit', { date: date.toISOString() })}
              />
            )
          })}
          {ammountOfDaysToFill > 0 &&
            Array.from({ length: ammountOfDaysToFill }).map((_, index) => {
              return (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              )
            })}
        </View>
      </ScrollView>
    </View>
  )
}
