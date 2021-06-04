import { useContext, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { StorageContext } from '../contexts/StorageContext'
import { EmptyPage } from '../components/home/_EmptyPage'
import { Interactions } from '../components/home/_Interactions'
import { Form } from '../components/form/_Form'
import { Overlay } from '../components/shared/_Overlay'
import { FilterProvider } from '../contexts/FilterContext'
import { InvoicesList } from '../components/home/_InvoicesList'

export default function Home() {
  const { getInvoices } = useContext(StorageContext)
  const [isEmpty, setIsEmpty] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const invoices = getInvoices()

  useEffect(() => {
    invoices.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [invoices])

  const handleForm = useCallback(() => {
    document.querySelector('body')!.classList.toggle('form-open')
    setFormOpen(prevState => !prevState)
  }, [])

  return (
    <FilterProvider>
      <Main>
        <Interactions handleForm={handleForm} /> {/*Component*/}
        {isEmpty ? (
          <EmptyPage />  /*Component*/
        ) : (
          <InvoicesList /> /*Component*/
        )}
      </Main>
      {formOpen && <Overlay />} {/*Component*/}
      {formOpen && <Form handleModal={handleForm} />} {/*Component*/}
    </FilterProvider>
  )
}


const Main = styled.main`
  max-width: 73rem;
  margin: 10.4rem auto 3rem;
  padding: 0 24px;

  @media screen and (min-width: 760px) {
    margin-top: 13.6rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 7.2rem;
    padding: 0;
  }
`
