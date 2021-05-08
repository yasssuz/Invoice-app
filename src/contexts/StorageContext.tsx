import { createContext, ReactNode, useContext } from 'react'
import { InvoiceContext } from './InvoiceInfoContext'

interface AppContextProps {
  // invoices: Array<{
  //   id: string
  //   createdAt: string
  //   paymentDue: string
  //   description: string
  //   paymentTerms: number
  //   clientName: string
  //   clientEmail: string
  //   status: string
  //   senderAddress: {
  //     street: string
  //     city: string
  //     postCode: string
  //     country: string
  //   }
  //   clientAddress: {
  //     street: string
  //     city: string
  //     postCode: string
  //     country: string
  //   }
  //   items: Array<{
  //     name: string
  //     quantity: number
  //     price: number
  //     total: number
  //   }>
  //   total: number
  // }>
  getInvoices: () => Array<any>
  editInvoice: (id: string) => void
  changeToPaidInvoice: (id: string) => void
  deleteInvoice: (id: string) => void
}

interface AppProviderProps {
  children: ReactNode
}

export const StorageContext = createContext({} as AppContextProps)

export const StorageProvider = ({ children }: AppProviderProps) => {
  const { setPaid } = useContext(InvoiceContext)

  function getInvoices() {
    let invoiceStorage: any

    if (localStorage.getItem('invoices') === null) {
      invoiceStorage = []
    } else {
      invoiceStorage = JSON.parse(localStorage.getItem('invoices') || '{}')
    }

    return invoiceStorage
  }

  function deleteInvoice(id: string) {
    const invoices = getInvoices()
    invoices.forEach((invoice: any, index: any) => {
      if (invoice.id === id) {
        invoices.splice(index, 1)
      }
    })
    localStorage.setItem('invoices', JSON.stringify(invoices))
  }

  function editInvoice(id: string) {
    console.log('editing invoice')
  }

  function changeToPaidInvoice(id: string) {
    const invoices = getInvoices()
    const invoice = invoices.filter((invoice: any) => invoice.id === id)

    invoice[0].status = 'paid'
    localStorage.setItem('invoices', JSON.stringify(invoices))
    setPaid()
  }

  return (
    <StorageContext.Provider value={{
      getInvoices,
      deleteInvoice,
      editInvoice,
      changeToPaidInvoice,
    }}>
      {children}
    </StorageContext.Provider>
  )
}