import React from "react"
import { makeStyles, Theme, Card, Typography } from "@material-ui/core"
import {
  addMonths,
  startOfMonth,
  endOfMonth,
  eachMonthOfInterval,
  format,
  startOfDay,
} from "date-fns"
import { getDateRangesPerMonth } from "./utils"
import { getEventsByDate } from "./fakeDb"
import { Event } from "./types"
import { PRIMARY_COLOR } from "./constants"
import tinycolor from "tinycolor2"

const useStyles = makeStyles((theme: Theme) => ({
  monthTitle: {},
  month: {
    display: "grid",
    gridTemplateColumns: `repeat(7, ${100 / 7}%)`,
    gridTemplateRows: "auto",
    gridGap: theme.spacing(0.5),
  },
  dayBox: {
    marginBottom: theme.spacing(0.5),
    display: "flex",
    flexDirection: "column",
    backgroundColor: tinycolor(PRIMARY_COLOR).lighten(40).toString(),
    maxHeight: "30vh",
  },
  disabled: {
    color: "#cdcdcd",
    boxShadow: "none",
  },
  image: {
    maxWidth: `10vw`,
    objectFit: "cover",
  },
  eventCard: {
    margin: theme.spacing(0.5),
    flex: 1,
  },
}))

export const CalendarPage = () => {
  const classes = useStyles()
  const selectedDate = new Date()
  const monthsShown = 12
  const calendarStart = startOfMonth(selectedDate)
  const calendarEnd = endOfMonth(addMonths(selectedDate, monthsShown))
  const months = eachMonthOfInterval({ start: calendarStart, end: calendarEnd })
  const eventsByDate = getEventsByDate()
  return (
    <div>
      {months.map((month) => {
        const { beforeDates, dates, afterDates } = getDateRangesPerMonth(month)
        return (
          <>
            <Typography variant="h6" noWrap className={classes.monthTitle}>
              {format(month, "MMM yyyy")}
            </Typography>

            <div className={classes.month}>
              {beforeDates.map((date: Date) => (
                <DayBox
                  date={date}
                  disabled
                  events={eventsByDate[startOfDay(date).toString()]}
                />
              ))}
              {dates.map((date: Date) => (
                <DayBox
                  date={date}
                  events={eventsByDate[startOfDay(date).toString()]}
                />
              ))}
              {afterDates.map((date: Date) => (
                <DayBox
                  date={date}
                  events={eventsByDate[startOfDay(date).toString()]}
                />
              ))}
            </div>
          </>
        )
      })}
    </div>
  )
}

const DayBox = ({
  disabled,
  date,
  events,
}: {
  disabled?: boolean
  date: Date
  events?: Event[]
}) => {
  const classes = useStyles()

  return (
    <div className={`${classes.dayBox} ${disabled ? classes.disabled : ""}`}>
      {format(date, "dd")}
      {events?.map((event) => (
        <Card className={classes.eventCard} key={event.id}>
          <Typography noWrap className={classes.monthTitle}>
            {event.title}
          </Typography>
          <img
            className={classes.image}
            src={event.imageUrl}
            alt={event.title}
          ></img>
        </Card>
      ))}
    </div>
  )
}
