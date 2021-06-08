export function generateRandomId() {
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