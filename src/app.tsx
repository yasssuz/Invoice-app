import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import InvoiceInfo from './invoices/InvoiceInfo'
import { Sidebar } from './components/_Sidebar'

export default function App() {
  return (
    <Router>
      <Sidebar /> {/*Component*/}
      <Switch>
        <Route exact path="/">
          <Home /> {/*Page*/}
        </Route>
        <Route path="/invoices/::id">
          <InvoiceInfo /> {/*Page*/}
        </Route>
      </Switch>
    </Router>
  )
}