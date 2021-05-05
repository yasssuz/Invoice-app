import React, { createContext, ReactNode } from 'react'

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
}

interface AppProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({ children }: AppProviderProps) => {
  function getInvoices() {
    let invoices: any

    if (localStorage.getItem('invoices') === null) {
      invoices = []
    } else {
      invoices = JSON.parse(localStorage.getItem('invoices') || '{}')
    }

    return invoices
  }

  return (
    <AppContext.Provider value={{
      getInvoices,
    }}>
      {children}
    </AppContext.Provider>
  )
}