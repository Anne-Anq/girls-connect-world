import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: "gs://girl-connect-world.appspot.com",
})
const db = admin.firestore()

export const createEvent = functions.https.onCall(async ({ formData }) => {
  try {
    const docRef = db.collection("events").doc()
    const startTime = admin.firestore.Timestamp.fromDate(
      new Date(formData.startTime)
    )
    const endTime = admin.firestore.Timestamp.fromDate(
      new Date(formData.endTime)
    )
    const setEvent = docRef.set({ ...formData, startTime, endTime })
    return setEvent
  } catch (err) {
    throw err
  }
})
