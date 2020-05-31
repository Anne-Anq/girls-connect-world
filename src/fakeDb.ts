import { startOfDay } from "date-fns"
import { Event } from "./types"

export const getEventsByDate = () =>
  events.reduce((result: Record<string, Event[]>, event) => {
    const dateKey = startOfDay(event.startTime).toString()
    if (result[dateKey]) {
      result[dateKey].push(event)
    } else {
      result[dateKey] = [event]
    }
    return result
  }, {})

const events = [
  {
    id: "d",
    startTime: new Date("May 27 2020 18:20"),
    endTime: new Date("May 27 2020 18:40"),
    title: "Virtual Wine Night",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/86970130_10157247993648693_7232224017313169408_n.jpg?_nc_cat=111&_nc_sid=340051&_nc_ohc=TGTns_RFJqwAX-xHlNI&_nc_ht=scontent.fyyc3-1.fna&oh=0eff2100b1572aacadb75ff87bd511e1&oe=5EF4AED6",
    description:
      "Hey girls!! Let’s have another virtual wine night!! \nI will post the zoom link here at 6:30 May 27❣️ As always let me know if you have any questions!",
  },
  {
    id: "qhxudkg",
    startTime: new Date("May 28 2020 19:20"),
    endTime: new Date("May 27 2020 20:40"),
    title: "Training Sesh",
    description: "Hey girls!!!\n  ...",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/99136688_10157513909953693_3794816932746625024_n.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=jqzxHQmSD6MAX8HrJIO&_nc_ht=scontent.fyyc3-1.fna&oh=0ebb129ade610c55016fa4b2ea010a05&oe=5EF64836",
  },
  {
    id: "qhxuooooog",
    startTime: new Date("May 27 2020 19:20"),
    endTime: new Date("May 27 2020 20:40"),
    title: "FREE Clothing Swap, Live Music, Donate, and More!",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/97655805_2574858992763884_3737673273341640704_o.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=8-meL4ctJHMAX_Rqpez&_nc_ht=scontent.fyyc3-1.fna&oh=8617d45d28c3f1738fea91271cfa2025&oe=5EF4FEA9",
    description:
      "Hey girls!!!\n    We all have clothes that sit in our closet that we once loved before. Why not swap it with someone else so that it can be worn again? This way we can consume less and",
  },
  {
    id: "qhxuooeeooog",
    startTime: new Date("May 17 2020 19:20"),
    endTime: new Date("May 27 2020 20:40"),
    title: "FREE Clothing Swap, Live Music, Donate, and More!",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/97655805_2574858992763884_3737673273341640704_o.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=8-meL4ctJHMAX_Rqpez&_nc_ht=scontent.fyyc3-1.fna&oh=8617d45d28c3f1738fea91271cfa2025&oe=5EF4FEA9",
    description:
      "Hey girls!!!\n    We all have clothes that sit in our closet that we once loved before. Why not swap it with someone else so that it can be worn again? This way we can consume less and",
  },
  {
    id: "qhxuorrrroooog",
    startTime: new Date("May 7 2020 19:20"),
    endTime: new Date("May 27 2020 20:40"),
    title: "FREE Clothing Swap, Live Music, Donate, and More!",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/97655805_2574858992763884_3737673273341640704_o.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=8-meL4ctJHMAX_Rqpez&_nc_ht=scontent.fyyc3-1.fna&oh=8617d45d28c3f1738fea91271cfa2025&oe=5EF4FEA9",
    description:
      "Hey girls!!!\n    We all have clothes that sit in our closet that we once loved before. Why not swap it with someone else so that it can be worn again? This way we can consume less and",
  },
  {
    id: "qhxuoggggoooog",
    startTime: new Date("June 1 2020 19:20"),
    endTime: new Date("May 27 2020 20:40"),
    title: "FREE Clothing Swap, Live Music, Donate, and More!",
    imageUrl:
      "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/97655805_2574858992763884_3737673273341640704_o.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=8-meL4ctJHMAX_Rqpez&_nc_ht=scontent.fyyc3-1.fna&oh=8617d45d28c3f1738fea91271cfa2025&oe=5EF4FEA9",
    description:
      "Hey girls!!!\n    We all have clothes that sit in our closet that we once loved before. Why not swap it with someone else so that it can be worn again? This way we can consume less and",
  },
]
