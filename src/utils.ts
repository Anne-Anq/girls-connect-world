import {
  endOfMonth,
  eachDayOfInterval,
  getDay,
  subDays,
  addDays,
} from "date-fns"

export const getDateRangesPerMonth = (month: Date) => {
  const dates = eachDayOfInterval({
    start: month,
    end: endOfMonth(month),
  })
  const daysBeforeStart = getDay(month)
  const beforeDates = !daysBeforeStart
    ? []
    : eachDayOfInterval({
        start: subDays(month, daysBeforeStart),
        end: subDays(month, 1),
      })
  const daysAfterEnd = 6 - getDay(endOfMonth(month))
  const afterDates = !daysAfterEnd
    ? []
    : eachDayOfInterval({
        start: addDays(endOfMonth(month), 1),
        end: addDays(endOfMonth(month), daysAfterEnd),
      })
  return { beforeDates, dates, afterDates }
}
