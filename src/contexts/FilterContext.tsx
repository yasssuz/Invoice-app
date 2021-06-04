import { createContext, FC, useState } from "react";

interface FilterContextProps {
  showingDraft: boolean
  showingPending: boolean
  showingPaid: boolean
  setShowingDraft: React.Dispatch<React.SetStateAction<boolean>>
  setShowingPending: React.Dispatch<React.SetStateAction<boolean>>
  setShowingPaid: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterContext = createContext({} as FilterContextProps)

export const FilterProvider: FC = ({ children }) => {
  const [showingDraft, setShowingDraft] = useState(true)
  const [showingPending, setShowingPending] = useState(true)
  const [showingPaid, setShowingPaid] = useState(true)

  return (
    <FilterContext.Provider value={{
      showingDraft,
      showingPending,
      showingPaid,
      setShowingDraft,
      setShowingPending,
      setShowingPaid
    }}>
      {children}
    </FilterContext.Provider>
  )
}