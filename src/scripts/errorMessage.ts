import { type ErrorMessage } from '../types.d'

export const errorMessage: ErrorMessage = (a, b) => {
  if (typeof a !== 'number' && typeof b !== 'number') return `"${a}" and "${b}" most be a number`
  if (typeof a !== 'number') return `"${a}" is not a number`
  return `"${b}" is not a number`
}
