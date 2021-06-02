import * as yup from 'yup'

export const FormSchema = yup.object().shape({
  senderAddress: yup.object().shape({
    street: yup.string().required(),
    city: yup.string().matches(/^[aA-zZ\s]+$/).required(),
    postCode: yup.string().required(),
    country: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  }),
  clientName: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  clientEmail: yup.string().email().required(),
  clientAddress: yup.object().shape({
    street: yup.string().required(),
    city: yup.string().matches(/^[aA-zZ\s]+$/).required(),
    postCode: yup.string().required(),
    country: yup.string().matches(/^[aA-zZ\s]+$/).required(),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      quantity: yup.number().min(1).required(),
      price: yup.number().min(0.01).required()
    })
  ),
  invoiceDate: yup.date().required(),
  description: yup.string().required(),
})