import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { GoBack } from '../shared/_GoBack'
import {
  FormContainer,
  Title,
  Fieldset,
  Legend,
  SmallInputsArea,
  InputBlock,
  Label,
  TextInput,
  Selector,
  Option,
  LegendItem,
  ItemInfoArea,
  Total
} from './Form.styles'
import { FormSchema } from './_FormSchema'
import { BottomBar } from './_BottomBar';
import { useRef, useState } from 'react';
import { formatMoneyAmount } from '../../utils/formatters';

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
  invoiceDate: Date
  paymentTerms: any
  description: string
  itemName: string
  itemQuantity: number
  itemPrice: number
  itemTotal: number
}

export function Form(props: FormProps) {
  const { handleModal } = props
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
    mode: "onTouched"
  })
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    // const newInvoice = {
    //   id: '209320',
    //   createdAt: data.invoiceDate,
    //   paymentDue: data.paymentTerms,
    //   description: data.description,
    //   paymentTerms: data.paymentTerms,
    //   clientName: data.clientName,
    //   clientEmail: data.clientEmail,
    //   status: 'pending',
    //   senderAddress: {
    //     street: data.senderStreetAddress,
    //     city: data.senderCity,
    //     postCode: data.senderPostCode,
    //     country: data.senderCountry
    //   },
    //   clientAddress: {
    //     street: data.clientStreetAddress,
    //     city: data.clientCity,
    //     postCode: data.clientPostCode,
    //     country: data.clientCountry
    //   },
    // }
    // console.log(newInvoice)
  }
  const randomNumber = 40
  // const itemQuantity = useRef(null)
  const [itemQuantity, setItemQuantity] = useState(1)
  const [itemPrice, setItemPrice] = useState(100.00)
  const total = itemQuantity * itemPrice

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

        <Fieldset>
          <Legend style={{ display: 'none' }}>Info</Legend>

          <InputBlock className={errors.invoiceDate && 'error'}>
            <Label htmlFor="invoice-date">Invoice Date</Label>
            <TextInput
              type="date"
              className="date"
              id="invoice-date"
              {...register("invoiceDate")}
            />
          </InputBlock>

          <InputBlock className={errors.paymentTerms && 'error'}>
            <Label htmlFor="payment-terms">Payment Terms</Label>
            <Selector
              id="payment-terms"
              defaultValue="Net 30 Days"
              {...register("paymentTerms")}
            >
              <Option>Net 1 Day</Option>
              <Option>Net 7 Days</Option>
              <Option>Net 14 Days</Option>
              <Option>Net 30 Days</Option>
            </Selector>
          </InputBlock>

          <InputBlock className={errors.description && 'error'}>
            <Label htmlFor="description">Project / Description</Label>
            <TextInput
              type="text"
              id="description"
              {...register("description")}
              placeholder="e.g. Graphic Service"
            />
          </InputBlock>

        </Fieldset>

        <Fieldset>
          <LegendItem className="items">Items List</LegendItem>

          <InputBlock className={errors.itemName && 'error'}>
            <Label htmlFor="item-name">Item Name</Label>
            <TextInput
              type="text"
              id="item-name"
              {...register("itemName")}
            />
          </InputBlock>

          <ItemInfoArea>

            <InputBlock className={errors.itemQuantity && 'error'}>
              <Label htmlFor="item-quantity">Qty.</Label>
              <TextInput
                type="number"
                id="item-quantity"
                {...register("itemQuantity")}
                defaultValue="1"
                onChange={e => setItemQuantity(Number(e.target.value))}
              // ref={itemQuantity}
              />
            </InputBlock>

            <InputBlock className={errors.itemPrice && 'error'}>
              <Label htmlFor="item-price">Qty.</Label>
              <TextInput
                type="number"
                id="item-price"
                {...register("itemPrice")}
                defaultValue="100.00"
                onChange={e => setItemPrice(Number(e.target.value))}
              />
            </InputBlock>

            <InputBlock>
              <Label>Total</Label>
              <Total>{formatMoneyAmount(total)}</Total>
            </InputBlock>

          </ItemInfoArea>

        </Fieldset>

        <BottomBar handleModal={handleModal} />
      </form>
    </FormContainer >
  )
}