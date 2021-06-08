import dayjs from 'dayjs'

export function formatMoneyAmount(amount: number): string {
  return amount.toLocaleString('en', { minimumFractionDigits: 2 })
}

export function formatDate(date: string): string {
  return dayjs(date, 'YYYY-MM-DD').format('DD MMM YYYY')
}

export function formatIsoDate(date: Date): string {
  return dayjs(date).format('YYYY-MM-DD')
}