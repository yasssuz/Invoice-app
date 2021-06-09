export function getInvoices(): any {
  let invoiceStorage: any

  if (localStorage.getItem('invoices') === null) {
    invoiceStorage = []
  } else {
    invoiceStorage = JSON.parse(localStorage.getItem('invoices') || '{}')
  }

  return invoiceStorage
}

export function deleteInvoice(id: string): void {
  const invoices = getInvoices()
  invoices.forEach((invoice: { id: string }, index: number) => {
    if (invoice.id === id) {
      invoices.splice(index, 1)
    }
  })
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function addInvoice(data: Object): void {
  const invoices = getInvoices()
  invoices.push(data)
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function changeToPaidInvoice(id: string): void {
  const invoices = getInvoices()
  const invoice: { status: string }[] = invoices.filter(
    (invoice: any) => invoice.id === id
  )

  invoice[0].status = 'paid'
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function editInvoice(invoice: { id: string }): void {
  const invoices = getInvoices()
  const id = invoice.id
  let originalInvoice = invoices.find((invoice: { id: string }) => invoice.id === id)
  originalInvoice = invoice

  invoices.forEach((invoice: { id: string }, index: number) => {
    if (invoice.id === id) {
      invoices.splice(index, 1)
    }
  })
  invoices.push(originalInvoice)
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function getTheme(): string {
  let theme;

  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'dark');
    theme = 'dark'
  }

  if (localStorage.getItem('theme') === 'dark') {
    theme = 'dark'
  } else if (localStorage.getItem('theme') === 'light') {
    theme = 'light'
  } else {
    localStorage.setItem('theme', 'dark');
    theme = 'dark'
  }

  return theme
}

export function storeTheme(theme: string): void {
  localStorage.setItem('theme', theme)
}