import { firestore } from "firebase"

export type Event = {
  id: string
  startTime: firestore.Timestamp
  endTime: firestore.Timestamp
  title: string
  description?: string
  location?: string
  imageUrl: string
}

export type CreateEventFormData = Omit<
  Event,
  "id" | "startTime" | "endTime" | "imageUrl"
> & {
  startTime: string
  endTime: string
}

export type CreateEventPayload = {
  formData: CreateEventFormData
}
