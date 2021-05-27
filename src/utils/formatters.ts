import dayjs from 'dayjs'

export function formatMoneyAmount(amount: number) {
  return amount.toLocaleString('en', { minimumFractionDigits: 2 })
}

export function formatDate(date: string) {
  const dateFormat = dayjs(date, 'YYYY-MM-DD')
  const formatedDate = dateFormat.format('DD MMM YYYY')

  return formatedDate
}