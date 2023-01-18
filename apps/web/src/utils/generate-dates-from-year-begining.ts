import dayjs from 'dayjs'

export const generateDatesFromYearBegining = () => {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = dayjs()

  const dates = []
  let compareDate = firstDayOfTheYear

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
