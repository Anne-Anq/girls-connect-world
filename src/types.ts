export type Event = {
  id: string
  startTime: Date
  endTime: Date
  title: string
  description?: string
  location?: string
  imageUrl: string
}

export type CreateEventPayload = Omit<
  Event,
  "id" | "startTime" | "endTime" | "imageUrl"
> & {
  startTime: string
  endTime: string
}
