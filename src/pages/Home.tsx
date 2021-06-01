import { useContext, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { StorageContext } from '../contexts/StorageContext'
import { Invoice } from '../components/home/_Invoice'
import { EmptyPage } from '../components/home/_EmptyPage'
import { Interactions } from '../components/home/_Interactions'
import { Form } from '../components/form/_Form'
import { Overlay } from '../components/shared/_Overlay'

interface InvoiceProps {
  id: string
  clientName: string
  createdAt: string
  total: number
  status: string
}

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
    <>
      <Main>
        <Interactions handleForm={handleForm} /> {/*Component*/}
        {isEmpty ? (
          <EmptyPage />  /*Component*/
        ) : (
          <InvoicesList>
            <ul>
              {invoices.map((invoice: InvoiceProps) => <Invoice
                id={invoice.id}
                client={invoice.clientName}
                creationDate={invoice.createdAt}
                amount={invoice.total}
                status={invoice.status}
                key={invoice.id}
              />)} {/*Component*/}
            </ul>
          </InvoicesList>
        )}
      </Main>
      {formOpen && <Overlay />} {/*Component*/}
      {formOpen && <Form handleModal={handleForm} />} {/*Component*/}
    </>
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

const InvoicesList = styled.section`
  margin-top: 3.2rem;

  @media screen and (min-width: 750px) {
    margin-top: 5.6rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 6.5rem;
  }

  ul {
    list-style: none;
  }
`

