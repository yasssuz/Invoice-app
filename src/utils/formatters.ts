import dayjs from 'dayjs'

export function formatMoneyAmount(amount: number) {
  return amount.toLocaleString('en', { minimumFractionDigits: 2 })
}

export function formatDate(date: string) {
  return dayjs(date, 'YYYY-MM-DD').format('DD MMM YYYY')
}

export function formatIsoDate(date: Date) {
  return dayjs(date).format('YYYY-MM-DD')
}