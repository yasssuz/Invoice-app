import { createContext, ReactNode } from 'react'

interface AppContextProps {
  getInvoices: () => Array<any>
  editInvoice: (id: string) => void
  changeToPaidInvoice: (id: string) => void
  addInvoice: (data: Object) => void
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

  function addInvoice(data: Object) {
    const invoices = getInvoices()
    invoices.push(data)
    localStorage.setItem('invoices', JSON.stringify(invoices))
  }

  function changeToPaidInvoice(id: string) {
    const invoices = getInvoices()
    const invoice = invoices.filter(
      (invoice: { id: string }) => invoice.id === id
    )

    invoice[0].status = 'paid'
    localStorage.setItem('invoices', JSON.stringify(invoices))
  }

  return (
    <StorageContext.Provider value={{
      getInvoices,
      deleteInvoice,
      editInvoice,
      addInvoice,
      changeToPaidInvoice,
    }}>
      {children}
    </StorageContext.Provider>
  )
}