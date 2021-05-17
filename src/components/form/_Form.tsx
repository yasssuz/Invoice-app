import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { GoBack } from '../shared/_GoBack'

interface FormProps {
  handleModal: () => void
}

interface FormData {
  senderStreetAddress: string
  senderCity: string
  senderPostCode: string
  senderCountry: string
}

const FormSchema = yup.object().shape({
  senderStreetAddress: yup.string().required(),
  senderCity: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  senderPostCode: yup.string().required(),
  senderCountry: yup.string().matches(/^[aA-zZ\s]+$/).required(),
})

export function Form(props: FormProps) {
  const { handleModal } = props
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormSchema)
  })
  const onSubmit: SubmitHandler<FormData> = data => console.log(data)

  return (
    <FormContainer>
      <GoBack onClick={handleModal} />
      <Title>New Invoice</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Legend>Bill From</Legend>
          <InputBlock className={errors.senderStreetAddress && 'error'}>
            <Label htmlFor="sender-street-address">Street Address</Label>
            <TextInput
              type="text"
              id="sender-street-address"
              {...register("senderStreetAddress")}
            />
            {errors.senderStreetAddress && <InputError>not valid</InputError>}
          </InputBlock>
          <SmallInputsArea>
            <InputBlock className={errors.senderCity && 'error'}>
              <Label htmlFor="sender-city">City</Label>
              <TextInput
                type="text"
                id="sender-city"
                {...register("senderCity")}
              />
              {errors.senderCity && <InputError>not valid</InputError>}
            </InputBlock>
            <InputBlock className={errors.senderPostCode && 'error'}>
              <Label htmlFor="sender-post-code">Post Code</Label>
              <TextInput
                type="text"
                id="sender-post-code"
                {...register("senderPostCode")}
              />
              {errors.senderPostCode && <InputError>not valid</InputError>}
            </InputBlock>
            <InputBlock className={`last-child ${errors.senderCountry && 'error'}`}>
              <Label htmlFor="sender-coutry">Country</Label>
              <TextInput
                type="text"
                id="sender-country"
                {...register("senderCountry")}
              />
              {errors.senderCity && <InputError>not valid</InputError>}
            </InputBlock>
          </SmallInputsArea>
        </Fieldset>
        <button type="submit">teeeest</button>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  background: var(--color-nearly-black);
  position: absolute;
  z-index: 900;
  top: 0;
  bottom: 0;
  padding: 10.4rem 2.4rem 0;

  .error {
    label {
      color: var(--color-red);
    }

    input {
      border: 1px solid var(--color-red);
    }
  }

  button {
    margin-top: 10rem;
  }
`

const Title = styled.h1`
  margin: 2.4rem 0;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: var(--color-white);
`

const Fieldset = styled.fieldset`
  border: none; 
`

const Legend = styled.legend`
  color: var(--color-purple);
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: bold;
`

const InputBlock = styled.div`
  margin-top: 2.4rem;
  position: relative;
`

const Label = styled.label`
  display: block;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-semi-gray);
  margin-bottom: 1rem;
`

const TextInput = styled.input`
  width: 100%;
  border-radius: 0.4rem;
  height: 4.8rem;
  border: 1px solid var(--color-very-light-black);
  background: var(--color-light-black);
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: var(--color-white);
  padding: 0 2rem;
`

const SmallInputsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 2.3rem; 

  .last-child {
    grid-column: 1 /span 2;
  }
`

const InputError = styled(Label)`
  position: absolute;
  top: 0;
  right: 0;
`