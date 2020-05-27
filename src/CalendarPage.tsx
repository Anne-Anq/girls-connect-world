import React, { useState, Dispatch, SetStateAction } from "react"
import { makeStyles, Theme, Paper } from "@material-ui/core"
import {
  getMonth,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachMonthOfInterval,
  format,
} from "date-fns"

import locale from "date-fns/locale/en-CA"
import { getDateRangesPerMonth } from "./utils"

const useStyles = makeStyles((theme: Theme) => ({
  month: {
    display: "grid",
    gridTemplateColumns: `repeat(7, ${100 / 7}%)`,
    gridTemplateRows: "auto",
  },
  dayCard: {
    // margin: theme.spacing(0.5),
  },
  disabled: {
    color: "#cdcdcd",
    boxShadow: "none",
  },
  button: {
    border: "none",
    margin: theme.spacing(0.5),
    padding: 0,
    backgroundColor: "transparent",
  },
}))

export const CalendarPage = () => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const monthsShown = 12
  const calendarStart = startOfMonth(selectedDate)
  const calendarEnd = endOfMonth(addMonths(selectedDate, monthsShown))
  const months = eachMonthOfInterval({ start: calendarStart, end: calendarEnd })

  return (
    <div>
      {months.map((month) => {
        const { beforeDates, dates, afterDates } = getDateRangesPerMonth(month)
        return (
          <>
            <div>{locale.localize?.month(getMonth(month))}</div>
            <div className={classes.month}>
              {beforeDates.map((date: Date) => (
                <DayCard
                  date={date}
                  disabled
                  setSelectedDate={setSelectedDate}
                />
              ))}
              {dates.map((date: Date) => (
                <DayCard date={date} setSelectedDate={setSelectedDate} />
              ))}
              {afterDates.map((date: Date) => (
                <DayCard date={date} setSelectedDate={setSelectedDate} />
              ))}
            </div>
          </>
        )
      })}
    </div>
  )
}

const DayCard = ({
  disabled,
  date,
  setSelectedDate,
}: {
  disabled?: boolean
  date: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
}) => {
  const classes = useStyles()
  return (
    <button
      className={classes.button}
      disabled={disabled}
      onClick={() => setSelectedDate(date)}
    >
      <Paper
        className={`${classes.dayCard} ${disabled ? classes.disabled : ""}`}
      >
        {format(date, "dd MMM yy")}
      </Paper>
    </button>
  )
}
