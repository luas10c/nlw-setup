import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import { api } from '../../lib/axios'

import { generateDatesFromYearBegining } from '../../utils/generate-dates-from-year-begining'

import { HabitDay } from '../habit-day'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBegining()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

interface Summary {
  id: string
  date: string
  amount: number
  completed: number
}

export const SummaryTable = () => {
  const [summary, setSummary] = useState<Summary[]>([])

  useEffect(() => {
    const fetchSummary = async () => {
      const { data } = await api.get<{ summary: Summary[] }>('/summary')
      const { summary } = data
      setSummary(summary)
    }
    fetchSummary()
  }, [])

  return (
    <div className="w-full flex max-w-5xl overflow-hidden mx-auto">
      <div className="grid grid-row-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => {
          return (
            <div
              key={`${day}-${index}`}
              className="text-zinc-400 text-xl w-10 h-10 font-bold flex items-center justify-center"
            >
              {day}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3 py-1">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) =>
              dayjs(date).isSame(day.date, 'day')
            )

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            )
          })}
        {minimumSummaryDatesSize > 0 &&
          Array.from({ length: minimumSummaryDatesSize })
            .fill(new Date())
            .map((value, index) => {
              return (
                <div
                  key={`${value}-${index}`}
                  className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                ></div>
              )
            })}
      </div>
    </div>
  )
}
