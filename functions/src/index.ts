import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: "gs://girl-connect-world.appspot.com",
  projectId: "girl-connect-world",
})

var serviceAccount = require("path/to/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://girl-connect-world.firebaseio.com",
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
    uploadFile(formData.file)
    delete formData.file
    const setEvent = docRef.set({ ...formData, startTime, endTime })
    return setEvent
  } catch (err) {
    throw err
  }
})

const uploadFile = (fileName: string) => {
  admin
    .storage()
    .bucket()
    .upload(fileName, function (err, file) {
      if (!err) {
        // "zebra.jpg" is now in your bucket.
        console.log("success??")
      }
    })
}
