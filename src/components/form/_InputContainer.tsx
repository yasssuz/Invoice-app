import { InputBlock, Label, TextInput } from './Form.styles'

interface InputContainerProps {
  label: string
  registration: string
  register: any
  errors: any
  type: string
}

export function InputContainer(props: InputContainerProps) {
  const { label, registration, errors, register, type } = props

  return (
    <InputBlock className={errors}>
      <Label htmlFor={registration}>{label}</Label>
      <TextInput
        type={type}
        id={registration}
        {...register(registration)}
      />
    </InputBlock>
  )
}