import React from "react"
import firebase from "firebase"
import { Toolbar, makeStyles, Theme } from "@material-ui/core"
import { Layout } from "./Layout"
import { CalendarPage } from "./CalendarPage"

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Layout>
        <main className={classes.content}>
          <Toolbar />
          <button
            onClick={() =>
              firebase
                .functions()
                .httpsCallable("createEvent")({
                  formData: { title: "body cruch", description: "coolio" },
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }
          >
            hello
          </button>
          <CalendarPage />
        </main>
      </Layout>
    </div>
  )
}

export default App
