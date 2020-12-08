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
import { string, object, date as yupDate } from "yup"
import { formatUTCDateTimeToLocal } from "../utils"
import { CreateEventPayload, CreateEventFormData } from "../types"

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    margin: theme.spacing(1, 0),
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
  const classes = useStyles()
  return (
    <div className={classes.field}>
      <TextField id={name} label={label} {...field} type={type} fullWidth />
      {meta.touched && meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </div>
  )
}

const FileInputField = ({ name }: { name: string }) => {
  const [field] = useField(name)
  const classes = useStyles()
  return (
    <div className={classes.field}>
      <input type="file" accept="image/*" id={name} {...field} />
    </div>
  )
}

const handleSubmit = (formData: CreateEventFormData, onSuccess: () => void) => {
  formData.startTime = new Date(formData.startTime).toUTCString()
  formData.endTime = new Date(formData.endTime).toUTCString()
  const payload: CreateEventPayload = { formData }
  return firebase
    .functions()
    .httpsCallable("createEvent")(payload)
    .then(onSuccess)
    .catch((err) => console.log(err))
}

const getInitialValues = (date: Date) => ({
  title: "",
  description: "",
  location: "",
  startTime: formatUTCDateTimeToLocal(startOfDay(date)),
  endTime: formatUTCDateTimeToLocal(endOfDay(date)),
  file: "",
})

const getValidationSchema = () =>
  object({
    title: string().trim().required("Title is required."),
    description: string().trim(),
    location: string().trim(),
    startTime: yupDate().required("Start time is required."),
    endTime: yupDate()
      .when("startTime", (start: Date) =>
        yupDate().min(start, "End time must be after start time.")
      )
      .required("End time is required."),
    file: string(),
  })

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
      onSubmit={(formData) => handleSubmit(formData, onSuccess)}
      initialValues={getInitialValues(date)}
      validationSchema={getValidationSchema()}
    >
      {(formikProps) => {
        console.log(formikProps.values)
        return (
          <Form className={classes.form}>
            <FormTextField label="Title" name="title" type="text" />
            <FormTextField label="Description" name="description" type="text" />
            <FormTextField label="Location" name="location" type="text" />
            <FormTextField
              label="Start"
              name="startTime"
              type="datetime-local"
            />
            <FormTextField label="End" name="endTime" type="datetime-local" />
            <FileInputField name="file" />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                !Object.keys(formikProps.touched).length ||
                !formikProps.isValid ||
                formikProps.isSubmitting
              }
            >
              {formikProps.isSubmitting ? "Saving" : "Save"}
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}
