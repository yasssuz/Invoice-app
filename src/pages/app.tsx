import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import InvoiceInfo from './invoice/InvoiceInfo'
import { Sidebar } from '../components/shared/_Sidebar'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Sidebar /> {/*Component*/}
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route path="/invoices/:id" component={InvoiceInfo} />
        </Switch>
      </AnimatePresence>
    </>
  )
}