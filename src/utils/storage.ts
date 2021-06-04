export function getInvoices() {
  let invoiceStorage: object[]

  if (localStorage.getItem('invoices') === null) {
    invoiceStorage = []
  } else {
    invoiceStorage = JSON.parse(localStorage.getItem('invoices') || '{}')
  }

  return invoiceStorage
}

export function getTheme() {
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

export function storeTheme(theme: string) {
  localStorage.setItem('theme', theme)
}