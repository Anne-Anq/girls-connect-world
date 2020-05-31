import React from "react"
import firebase from "firebase"
import { Formik, Form, useField } from "formik"
import {
  TextField,
  Button,
  FormHelperText,
  Theme,
  makeStyles,
} from "@material-ui/core"
import { startOfDay, endOfDay } from "date-fns"
import { formatUTCDateTimeToLocal } from "../utils"

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
}))

const FormTextField = ({
  label,
  name,
  type,
}: {
  label: string
  name: string
  type: "text" | "datetime-local"
}) => {
  const [field, meta] = useField(name)
  return (
    <>
      <TextField id={name} label={label} {...field} type={type} />
      {meta.touched && meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </>
  )
}

export const AddEvent = ({
  date,
  onSuccess,
}: {
  date: Date
  onSuccess: () => void
}) => {
  const classes = useStyles()
  return (
    <Formik
      onSubmit={(formData) => {
        formData.startTime = new Date(formData.startTime).toString()
        formData.endTime = new Date(formData.endTime).toString()
        return firebase
          .functions()
          .httpsCallable("createEvent")({
            formData,
          })
          .then(onSuccess)
          .catch((err) => console.log(err))
      }}
      initialValues={{
        title: "",
        description: "",
        startTime: formatUTCDateTimeToLocal(startOfDay(date)),
        endTime: formatUTCDateTimeToLocal(endOfDay(date)),
      }}
    >
      <Form className={classes.form}>
        <FormTextField label="Title" name="title" type="text" />
        <FormTextField label="Description" name="description" type="text" />
        <FormTextField label="Start" name="startTime" type="datetime-local" />
        <FormTextField label="End" name="endTime" type="datetime-local" />
        <Button type="submit">Save</Button>
      </Form>
    </Formik>
  )
}
