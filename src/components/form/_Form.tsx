import {
  SubmitHandler,
  useForm,
  useFieldArray,
} from 'react-hook-form'
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
  Total,
  AddItemBtn
} from './Form.styles'
import { FormSchema } from './_FormSchema'
import { BottomBar } from './_BottomBar';
import { useContext, useState } from 'react';
import { formatMoneyAmount } from '../../utils/formatters';
import { StorageContext } from '../../contexts/StorageContext';
import { listenerCount } from 'node:events';

type FormProps = {
  handleModal: () => void
}

type FormData = {
  clientName: string
  clientEmail: string
  invoiceDate: Date
  paymentTerms: any
  description: string
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  items: {
    name: string
    quantity: number
    price: number
  }[]
}

export function Form(props: FormProps) {
  const { addInvoice } = useContext(StorageContext)
  const { handleModal } = props
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      items: [{ name: undefined, quantity: 1, price: undefined }]
    },
  })
  const onSubmit: SubmitHandler<FormData> = data => {
    let quantity = 0
    let price = 0

    data.items.map(item => {
      quantity = Number(item.quantity) + quantity
      price = Number(item.price) + price
    })

    let total = quantity * price
    const invoiceData = {
      ...data,
      id: getRandomId(),
      total: total,
      status: 'pending'
    }

    addInvoice(invoiceData)
    handleModal()
  }
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control
  })
  const [itemQuantity, setItemQuantity] = useState(1)
  const [itemPrice, setItemPrice] = useState(100.00)
  const total = itemQuantity * itemPrice

  function getRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789'
    let result = []

    for (let i = 0; i < 2; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * characters.length)))
    }
    for (let i = 0; i < 4; i++) {
      result.push(numbers.charAt(Math.floor(Math.random() * numbers.length)))
    }

    return result.join('')
  }

  return (
    <FormContainer>
      <GoBack onClick={handleModal} />
      <Title>New Invoice</Title>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        <Fieldset>
          <Legend>Bill From</Legend>

          <InputBlock className={errors.senderAddress?.street && 'error'}>
            <Label htmlFor="sender-street-address">Street Address</Label>
            <TextInput
              type="text"
              id="sender-street-address"
              {...register("senderAddress.street")}
            />
          </InputBlock>

          <SmallInputsArea>

            <InputBlock className={errors.senderAddress?.city && 'error'}>
              <Label htmlFor="sender-city">City</Label>
              <TextInput
                type="text"
                id="sender-city"
                {...register("senderAddress.city")}
              />
            </InputBlock>

            <InputBlock className={errors.senderAddress?.postCode && 'error'}>
              <Label htmlFor="sender-post-code">Post Code</Label>
              <TextInput
                type="text"
                id="sender-post-code"
                {...register("senderAddress.postCode")}
              />
            </InputBlock>

            <InputBlock className={`last-child ${errors.senderAddress?.country && 'error'}`}>
              <Label htmlFor="sender-country">Country</Label>
              <TextInput
                type="text"
                id="sender-country"
                {...register("senderAddress.country")}
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

          <InputBlock className={errors.clientAddress?.street && 'error'}>
            <Label htmlFor="client-street-address">Street Address</Label>
            <TextInput
              type="text"
              id="client-street-address"
              {...register("clientAddress.street")}
            />
          </InputBlock>

          <SmallInputsArea>

            <InputBlock className={errors.clientAddress?.city && 'error'}>
              <Label htmlFor="client-city">City</Label>
              <TextInput
                type="text"
                id="client-city"
                {...register("clientAddress.city")}
              />
            </InputBlock>

            <InputBlock className={errors.clientAddress?.postCode && 'error'}>
              <Label htmlFor="client-post-code">Post Code</Label>
              <TextInput
                type="text"
                id="client-post-code"
                {...register("clientAddress.postCode")}
              />
            </InputBlock>

            <InputBlock className={`last-child ${errors.clientAddress?.country && 'error'}`}>
              <Label htmlFor="client-coutry">Country</Label>
              <TextInput
                type="text"
                id="client-country"
                {...register("clientAddress.country")}
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
              <Option value={1}>Net 1 Day</Option>
              <Option value={7}>Net 7 Days</Option>
              <Option value={14}>Net 14 Days</Option>
              <Option value={30}>Net 30 Days</Option>
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

          {fields.map((field, index) => (
            <div key={field.id}>
              <InputBlock className={errors.items?.[index]?.name && 'error'}>
                <Label htmlFor="item-name">Item Name</Label>
                <TextInput
                  type="text"
                  id="item-name"
                  {...register(`items.${index}.name` as const, {
                    required: true,
                    minLength: 20
                  })}
                />
              </InputBlock>

              <ItemInfoArea>

                <InputBlock className={errors?.items?.[index]?.quantity ? 'error' : ""}>
                  <Label htmlFor="item-quantity">Qty.</Label>
                  <TextInput
                    type="number"
                    id="item-quantity"
                    {...register(`items.${index}.quantity` as const, {
                      required: true,
                      min: 10,
                      minLength: 10
                    })}
                    defaultValue="1"
                    onChange={e => setItemQuantity(Number(e.target.value))}
                  />
                </InputBlock>

                <InputBlock className={errors.items?.[index]?.price && 'error'}>
                  <Label htmlFor="item-price">Price</Label>
                  <TextInput
                    type="number"
                    id="item-price"
                    {...register(`items.${index}.price` as const, {
                      required: true,

                    })}
                    defaultValue="100.00"
                    onChange={e => setItemPrice(Number(e.target.value))}
                  />
                </InputBlock>

                <InputBlock>
                  <Label>Total</Label>
                  <Total>{formatMoneyAmount(total)}</Total>
                </InputBlock>

              </ItemInfoArea>
            </div>
          ))}

          <AddItemBtn
            type="button"
            onClick={() => append({ name: "", quantity: 0, price: 0 })}
          >
            + Add New Item
          </AddItemBtn>
        </Fieldset>


        <BottomBar handleModal={handleModal} />
      </form>
    </FormContainer >
  )
}