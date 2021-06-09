import { createContext, FC, useState } from "react";

interface FormContextProps {
  formOpen: boolean
  formEdit: boolean
  handleForm: () => void
  handleFormEdit: () => void
}

export const FormContext = createContext({} as FormContextProps)

export const FormProvider: FC = ({ children }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false)
  const [formEdit, setFormEdit] = useState<boolean>(false)

  function handleForm(): void {
    document.querySelector('body')!.classList.toggle('form-open')
    setFormOpen(prevState => !prevState)
  }

  function handleFormEdit(): void {
    setFormEdit(prevState => !prevState)
  }

  return (
    <FormContext.Provider value={{
      formOpen,
      formEdit,
      handleForm,
      handleFormEdit
    }}>
      {children}
    </FormContext.Provider>
  )
}