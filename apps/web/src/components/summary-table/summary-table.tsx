import { generateDatesFromYearBegining } from '../../utils/generate-dates-from-year-begining'

import { HabitDay } from '../habit-day'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBegining()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export const SummaryTable = () => {
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

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />
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
