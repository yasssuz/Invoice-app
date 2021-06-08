import { createContext, FC, useState } from "react";

interface FormContextProps {
  formOpen: boolean
  handleForm: () => void
}

export const FormContext = createContext({} as FormContextProps)

export const FormProvider: FC = ({ children }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false)

  function handleForm(): void {
    console.log('hello')
    document.querySelector('body')!.classList.toggle('form-open')
    setFormOpen(prevState => !prevState)
  }

  return (
    <FormContext.Provider value={{
      formOpen,
      handleForm
    }}>
      {children}
    </FormContext.Provider>
  )
}