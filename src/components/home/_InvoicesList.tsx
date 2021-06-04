import { useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"
import styled from "styled-components"
import { StorageContext } from "../../contexts/StorageContext"
import { Invoice } from "./_Invoice"

interface InvoiceProps {
  id: string
  clientName: string
  createdAt: string
  total: number
  status: string
}

export function InvoicesList() {
  const { showingDraft, showingPending, showingPaid } = useContext(FilterContext)
  const { getInvoices } = useContext(StorageContext)
  const invoices = getInvoices()

  return (
    <List>
      {showingDraft && showingPending && showingPaid ? (
        <>
          {invoices.map((invoice: InvoiceProps) => <Invoice
            id={invoice.id}
            client={invoice.clientName}
            creationDate={invoice.createdAt}
            amount={invoice.total}
            status={invoice.status}
            key={invoice.id}
          />)
          }
        </>
      ) : (
        <>
          {showingDraft && invoices
            .filter(invoice => invoice.status === 'draft')
            .map(invoice => <Invoice
              id={invoice.id}
              client={invoice.clientName}
              creationDate={invoice.createdAt}
              amount={invoice.total}
              status={invoice.status}
              key={invoice.id}
            />)
          }
          {showingPending && invoices
            .filter(invoice => invoice.status === 'pending')
            .map(invoice => <Invoice
              id={invoice.id}
              client={invoice.clientName}
              creationDate={invoice.createdAt}
              amount={invoice.total}
              status={invoice.status}
              key={invoice.id}
            />)
          }
          {showingPaid && invoices
            .filter(invoice => invoice.status === 'paid')
            .map(invoice => <Invoice
              id={invoice.id}
              client={invoice.clientName}
              creationDate={invoice.createdAt}
              amount={invoice.total}
              status={invoice.status}
              key={invoice.id}
            />)
          }
        </>
      )
      }
    </List>
  )
}


const List = styled.section`
  margin-top: 3.2rem;
  list-style: none;

  @media screen and (min-width: 750px) {
    margin-top: 5.6rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 6.5rem;
  }
`

