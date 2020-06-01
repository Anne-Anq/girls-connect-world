import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import * as serviceWorker from "./serviceWorker"
import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"
import "firebase/messaging"
import "firebase/functions"
import { firebaseConfig } from "./config"
import "./index.css"
import App from "./App"

firebase.initializeApp(firebaseConfig)

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
