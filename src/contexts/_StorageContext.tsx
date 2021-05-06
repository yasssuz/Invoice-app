import { createContext, ReactNode } from 'react'

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
  changeStatusInvoice: (id: string) => void
  deleteInvoice: (id: string) => void
}

interface AppProviderProps {
  children: ReactNode
}

export const StorageContext = createContext({} as AppContextProps)

export const StorageProvider = ({ children }: AppProviderProps) => {
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
    console.log('deleting')
    const invoices = getInvoices()
    invoices.forEach((invoice: any, index: any) => {
      if (invoice.id === id) {
        invoices.splice(index, 1)
      }
    })
    localStorage.setItem('invoices', JSON.stringify(invoices))
  }

  function editInvoice(id: string) {
    console.log(id + 'editing invoice')
  }

  function changeStatusInvoice(id: string) {
    console.log('editing status')
  }

  return (
    <StorageContext.Provider value={{
      getInvoices,
      deleteInvoice,
      editInvoice,
      changeStatusInvoice,
    }}>
      {children}
    </StorageContext.Provider>
  )
}