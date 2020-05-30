import * as functions from "firebase-functions"
import { firestore } from "firebase-admin"

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const createEvent = functions.https.onCall(async ({ formData }) => {
  try {
    await firestore()
      .batch()
      .create(firestore().collection("events").doc(), formData)
    await firestore().batch().commit()
  } catch (err) {
    throw err
  }
})
