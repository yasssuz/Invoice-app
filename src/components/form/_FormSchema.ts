import * as yup from 'yup'

export const FormSchema = yup.object().shape({
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
  invoiceDate: yup.date().required(),
  description: yup.string().required()
})