import React from "react"
import { Switch, Route } from "react-router-dom"
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

          <Switch>
            <Route path="/users">
              <div>to do </div>
            </Route>
            <Route path="/about">
              <div>to do </div>
            </Route>
          </Switch>
          <Route path="/" exact>
            <CalendarPage />
          </Route>
        </main>
      </Layout>
    </div>
  )
}

export default App
