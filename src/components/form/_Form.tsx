import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { GoBack } from '../shared/_GoBack'
import {
  FormContainer,
  Title,
  Fieldset,
  Legend,
  SmallInputsArea,
  InputBlock,
  Label,
  TextInput
} from './Form.styles'

interface FormProps {
  handleModal: () => void
}

interface FormData {
  senderStreetAddress: string
  senderCity: string
  senderPostCode: string
  senderCountry: string
  clientName: string
  clientEmail: string
  clientStreetAddress: string
  clientCity: string
  clientPostCode: string
  clientCountry: string
}

const FormSchema = yup.object().shape({
  senderStreetAddress: yup.string().required(),
  senderCity: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  senderPostCode: yup.string().required(),
  senderCountry: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  clientName: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  clientEmail: yup.string().email().required(),
  clientStreetAddress: yup.string().required(),
  clientCity: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  clientPostCode: yup.string().required(),
  clientCountry: yup.string().matches(/^[aA-zZ\s]+$/).required(),
})

export function Form(props: FormProps) {
  const { handleModal } = props
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
    mode: "onTouched"
  })
  const onSubmit: SubmitHandler<FormData> = data => console.log(data)

  return (
    <FormContainer>
      <GoBack onClick={handleModal} />
      <Title>New Invoice</Title>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        <Fieldset>
          <Legend>Bill From</Legend>

          <InputBlock className={errors.senderStreetAddress && 'error'}>
            <Label htmlFor="sender-street-address">Street Address</Label>
            <TextInput
              type="text"
              id="sender-street-address"
              {...register("senderStreetAddress")}
            />
          </InputBlock>

          <SmallInputsArea>

            <InputBlock className={errors.senderCity && 'error'}>
              <Label htmlFor="sender-city">City</Label>
              <TextInput
                type="text"
                id="sender-city"
                {...register("senderCity")}
              />
            </InputBlock>

            <InputBlock className={errors.senderPostCode && 'error'}>
              <Label htmlFor="sender-post-code">Post Code</Label>
              <TextInput
                type="text"
                id="sender-post-code"
                {...register("senderPostCode")}
              />
            </InputBlock>

            <InputBlock className={`last-child ${errors.senderCountry && 'error'}`}>
              <Label htmlFor="sender-country">Country</Label>
              <TextInput
                type="text"
                id="sender-country"
                {...register("senderCountry")}
              />
            </InputBlock>

          </SmallInputsArea>
        </Fieldset>

        <Fieldset>
          <Legend>Bill To</Legend>

          <InputBlock className={errors.clientName && 'error'}>
            <Label htmlFor="client-name">Client's Name</Label>
            <TextInput
              type="text"
              id="client-name"
              {...register("clientName")}
            />
          </InputBlock>

          <InputBlock className={errors.clientEmail && 'error'}>
            <Label htmlFor="client-email">Client's Email</Label>
            <TextInput
              type="text"
              id="client-email"
              {...register("clientEmail")}
            />
          </InputBlock>

          <InputBlock className={errors.clientStreetAddress && 'error'}>
            <Label htmlFor="client-street-address">Street Address</Label>
            <TextInput
              type="text"
              id="client-street-address"
              {...register("clientStreetAddress")}
            />
          </InputBlock>

          <SmallInputsArea>

            <InputBlock className={errors.clientCity && 'error'}>
              <Label htmlFor="client-city">City</Label>
              <TextInput
                type="text"
                id="client-city"
                {...register("clientCity")}
              />
            </InputBlock>

            <InputBlock className={errors.clientPostCode && 'error'}>
              <Label htmlFor="client-post-code">Post Code</Label>
              <TextInput
                type="text"
                id="client-post-code"
                {...register("clientPostCode")}
              />
            </InputBlock>

            <InputBlock className={`last-child ${errors.clientCountry && 'error'}`}>
              <Label htmlFor="client-coutry">Country</Label>
              <TextInput
                type="text"
                id="client-country"
                {...register("clientCountry")}
              />
            </InputBlock>

          </SmallInputsArea>
        </Fieldset>

        <button type="submit">teeeest</button>
      </form>
    </FormContainer>
  )
}