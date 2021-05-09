import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import InvoiceInfo from './invoice/InvoiceInfo'
import { Sidebar } from '../components/shared/_Sidebar'

export default function App() {
  return (
    <Router>
      <Sidebar /> {/*Component*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/invoices/:id" component={InvoiceInfo} />
      </Switch>
    </Router>
  )
}