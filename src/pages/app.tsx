import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import InvoiceInfo from './invoice/InvoiceInfo'
import { Sidebar } from '../components/shared/_Sidebar'
import { Form } from '../components/form/_Form'
import { Overlay } from '../components/shared/_Overlay'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

export default function App() {
  const { formOpen } = useContext(FormContext)

  return (
    <Router>
      {formOpen && <Form />} {/*Component*/}
      {formOpen && <Overlay />} {/*Component*/}
      <Sidebar /> {/*Component*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/invoices/:id" component={InvoiceInfo} />
      </Switch>
    </Router>
  )
}