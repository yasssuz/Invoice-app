import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { EmptyPage } from '../components/home/_EmptyPage'
import { Interactions } from '../components/home/_Interactions'
import { FilterProvider } from '../contexts/FilterContext'
import { InvoicesList } from '../components/home/_InvoicesList'
import { getInvoices } from '../utils/storage'

export default function Home() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const invoices = getInvoices()

  useEffect(() => {
    invoices.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [invoices])

  return (
    <FilterProvider>
      <Main>
        <Interactions /> {/*Component*/}
        {isEmpty ? (
          <EmptyPage />  /*Component*/
        ) : (
          <InvoicesList /> /*Component*/
        )}
      </Main>
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
