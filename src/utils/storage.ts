export function getInvoices() {
  let invoiceStorage: object[]

  if (localStorage.getItem('invoices') === null) {
    invoiceStorage = []
  } else {
    invoiceStorage = JSON.parse(localStorage.getItem('invoices') || '{}')
  }

  return invoiceStorage
}