import { createContext, ReactNode, useState } from 'react';

interface InvoiceContextProps {
  status: string
  setStatus: (status: string) => void
  setPaid: () => void
  deleteModal: boolean
  openCloseModal: () => void
}

interface InvoiceProviderProps {
  children: ReactNode
}

export const InvoiceContext = createContext({} as InvoiceContextProps)

export function InvoiceProvider({ children }: InvoiceProviderProps) {
  const [status, setStatus] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)

  function setPaid() {
    setStatus('paid')
  }

  function openCloseModal() {
    setDeleteModal(prevState => !prevState)
    console.log(deleteModal)
  }

  return (
    <InvoiceContext.Provider value={{
      status,
      setStatus,
      setPaid,
      deleteModal,
      openCloseModal,
    }}>
      {children}
    </InvoiceContext.Provider>
  )
}