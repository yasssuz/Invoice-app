import { useContext, useState } from 'react'
import styled from 'styled-components'
import { Invoice } from './components/home/_Invoice'
import { AppContext } from './contexts/_AppContext'

interface InvoiceProps {
  id: string
  clientName: string
  createdAt: string
  total: number
  status: string
  key: string
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

const InvoicesInteractions = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.3;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.5rem;
`

const Counter = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: var(--color-grayish-purple);
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
`

const Select = styled.select`
  border: none;
  background: transparent;
`

const AddInvoiceBtn = styled.button`
  border-radius: 2.4em;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--color-white);
  background: var(--color-purple);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 9rem;
  padding: 0.5em 1.4rem 0.5em 0.6rem;
  cursor: pointer;
  transition: filter 0.2s ease;
  margin-left: 1.8rem;

  &::after {
    content: 'New';
    height: 1.2rem;

    @media screen and (min-width: 760px) {
      content: 'New Invoice'
    }
  }

  @media screen and (min-width: 760px) {
    padding: 0.68em 1.5rem 0.68em 0.8rem;
    min-width: 15rem;
  }

  div {
    width: 3.2rem;
    height: 3.2rem;
    background: var(--color-white);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  &:hover {
    filter: brightness(1.16);
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

export default function Home() {
  const { getInvoices } = useContext(AppContext)
  const [isEmpty, setIsEmpty] = useState(false)
  const invoices = getInvoices()

  function changeIsEmpty() {
    setIsEmpty(false)
  }

  return (
    <Main>
      <InvoicesInteractions>
        <div>
          <Title onClick={changeIsEmpty}>Invoices</Title>
          <Counter>7 Invoices</Counter>
        </div>
        <LeftArea>
          <Select></Select>
          <AddInvoiceBtn>
            <div>
              <img src="/assets/icon-plus.svg" alt="add icon" />
            </div>
          </AddInvoiceBtn>
        </LeftArea>
      </InvoicesInteractions>
      <InvoicesList>
        {isEmpty ? (
          <h1>its empty</h1>
        ) : (
          <ul>
            {invoices.map((invoice: InvoiceProps) => <Invoice
              id={invoice.id}
              client={invoice.clientName}
              creationDate={invoice.createdAt}
              amount={invoice.total}
              status={invoice.status}
              key={invoice.id}
            />)}
          </ul>
        )}
      </InvoicesList>
    </Main>
  )
}
