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
  AddItemBtn,
  DeleteButton,
  DatesInputArea
} from './Form.styles'
import { FormSchema } from './_FormSchema'
import { BottomBar } from './_BottomBar';
import { useContext } from 'react';
import { formatIsoDate, formatMoneyAmount } from '../../utils/formatters';
import { StorageContext } from '../../contexts/StorageContext';
import { InputContainer } from './_InputContainer'
import dayjs from 'dayjs'

interface FormProps {
  handleModal: () => void
}

interface FormData {
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
    total: number
  }[]
}

export function Form(props: FormProps) {
  const { addInvoice } = useContext(StorageContext)
  const { handleModal } = props
  const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      items: [{ name: undefined, quantity: 1, price: 100.00, total: 100 }]
    },
    mode: "onTouched",
  })
  const onSubmit: SubmitHandler<FormData> = data => {
    let total = 0

    data.items.forEach(item => {
      total = Number(item.total) + total
    })

    const invoiceData = {
      ...data,
      id: getRandomId(),
      createdAt: formatIsoDate(data.invoiceDate),
      paymentDue: dayjs(data.invoiceDate).add(data.paymentTerms, 'day').format('YYYY-MM-DD'),
      total: total,
      status: 'pending'
    }

    addInvoice(invoiceData)
    handleModal()
  }
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  })

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

          <InputContainer
            label="Street Address"
            type="text"
            registration="senderAddress.street"
            errors={errors.senderAddress?.street && 'error'}
            register={register}
          />

          <SmallInputsArea>
            <InputContainer
              type="text"
              label="City"
              registration="senderAddress.city"
              errors={errors.senderAddress?.city && 'error'}
              register={register}
            />

            <InputContainer
              type="text"
              label="Post Code"
              registration="senderAddress.postCode"
              errors={errors.senderAddress?.postCode && 'error'}
              register={register}
            />

            <InputContainer
              type="text"
              label="Country"
              registration="senderAddress.country"
              errors={errors.senderAddress?.country && 'error'}
              register={register}
            />
          </SmallInputsArea>
        </Fieldset>

        <Fieldset>
          <Legend>Bill To</Legend>

          <InputContainer
            type="text"
            label="Client's Name"
            registration="clientName"
            errors={errors.clientName && 'error'}
            register={register}
          />

          <InputContainer
            type="text"
            label="Client's Email"
            registration="clientEmail"
            errors={errors.clientEmail && 'error'}
            register={register}
          />

          <InputContainer
            type="text"
            label="Street Address"
            registration="clientAddress.street"
            errors={errors.clientAddress?.street && 'error'}
            register={register}
          />

          <SmallInputsArea>
            <InputContainer
              type="text"
              label="City"
              registration="clientAddress.city"
              errors={errors.clientAddress?.city && 'error'}
              register={register}
            />

            <InputContainer
              type="text"
              label="Post Code"
              registration="clientAddress.postCode"
              errors={errors.clientAddress?.postCode && 'error'}
              register={register}
            />

            <InputContainer
              type="text"
              label="Country"
              registration="clientAddress.country"
              errors={errors.clientAddress?.country && 'error'}
              register={register}
            />
          </SmallInputsArea>
        </Fieldset>

        <Fieldset>
          <Legend style={{ display: 'none' }}>Info</Legend>

          <DatesInputArea>
            <InputContainer
              type="date"
              label="Invoice Date"
              registration="invoiceDate"
              errors={errors.invoiceDate && 'error'}
              register={register}
            />

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
          </DatesInputArea>

          <InputContainer
            type="text"
            label="Project / Description"
            registration="description"
            errors={errors.description && 'error'}
            register={register}
          />
        </Fieldset>

        <Fieldset>
          <LegendItem className="items">Items List</LegendItem>

          {fields.map((field, index) => (
            <ItemInfoArea key={field.id}>
              <InputBlock className={errors.items?.[index]?.name && 'error'}>
                <Label htmlFor={`item-name[${index}]`}>Item Name</Label>
                <TextInput
                  type="text"
                  id={`item-name[${index}]`}
                  defaultValue={field.name}
                  {...register(`items.${index}.name` as const)}
                />
              </InputBlock>

              <InputBlock className={errors?.items?.[index]?.quantity && 'error'}>
                <Label htmlFor="item-quantity">Qty.</Label>
                <TextInput
                  type="number"
                  id="item-quantity"
                  style={{ appearance: 'none' }}
                  {...register(`items.${index}.quantity` as const)}
                  name={`items[${index}].quantity`}
                  defaultValue={field.quantity}
                  onChange={e =>
                    setValue(`items.${index}.total` as any,
                      formatMoneyAmount(Number((document.querySelector(
                        `input[name=items\\[${index}\\]\\.price]`
                      ) as HTMLInputElement).value) * Number(e.target.value))
                    )
                  }
                />
              </InputBlock>

              <InputBlock className={errors.items?.[index]?.price && 'error'}>
                <Label htmlFor="item-price">Price</Label>
                <TextInput
                  type="number"
                  id="item-price"
                  {...register(`items.${index}.price` as const)}
                  defaultValue={field.price}
                  name={`items[${index}].price`}
                  onChange={e =>
                    setValue(`items.${index}.total` as any,
                      formatMoneyAmount(Number((document.querySelector(
                        `input[name=items\\[${index}\\]\\.quantity]`
                      ) as HTMLInputElement).value) * Number(e.target.value))
                    )
                  }
                />
              </InputBlock>

              <InputBlock>
                <Label>Total</Label>
                <Total
                  readOnly={true}
                  defaultValue="100.00"
                  id="item-total"
                  {...register(`items.${index}.total` as const)}
                />
              </InputBlock>

              <DeleteButton onClick={() => remove(index)}>
                <img src="/assets/icon-delete.svg" alt="delete item" />
              </DeleteButton>

            </ItemInfoArea>
          ))}

          <AddItemBtn
            type="button"
            onClick={() => append({ name: undefined, quantity: 1, price: 100, total: 100 })}
          >
            + Add New Item
          </AddItemBtn>
        </Fieldset>


        <BottomBar handleModal={handleModal} />
      </form>
    </FormContainer >
  )
}