import { useState, useEffect } from "react"
import firebase from "firebase"
import { startOfDay } from "date-fns"
import { Event } from "./types"

export const useEventsByDate = () => {
  const events = useEvents()

  const eventsByDate = events.reduce(
    (result: Record<string, Event[]>, event) => {
      const dateKey = startOfDay(event.startTime.toDate()).toString()
      if (result[dateKey]) {
        result[dateKey].push(event)
      } else {
        result[dateKey] = [event]
      }
      return result
    },
    {}
  )

  console.log(eventsByDate)
  return eventsByDate
}

const useEvents = () => {
  const db = firebase.firestore()
  const [isRequested, setIsRequested] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    if (!isRequested) {
      setIsRequested(true)
      console.log("onSnapshot")
      db.collection("events").onSnapshot(function (querySnapshot) {
        const data: Event[] = []
        querySnapshot.forEach(function (doc) {
          data.push(doc.data() as Event)
        })
        setEvents(data)
      })
    }
  }, [isRequested, db])
  return events
}
