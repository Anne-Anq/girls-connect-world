import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: "gs://girl-connect-world.appspot.com",
})

export const createEvent = functions.https.onCall(async ({ formData }) => {
  try {
    await admin
      .firestore()
      .batch()
      .create(admin.firestore().collection("events").doc(), formData)
    await admin.firestore().batch().commit()
  } catch (err) {
    throw err
  }
})
