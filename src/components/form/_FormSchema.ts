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
  invoiceDate: yup.date().required(),
  description: yup.string().required(),
})