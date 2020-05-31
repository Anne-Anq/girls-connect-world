import React from "react"
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
          <CalendarPage />
        </main>
      </Layout>
    </div>
  )
}

export default App
