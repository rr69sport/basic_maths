import { type ValidateMethod } from '../types'

export const validateIsNumbers: ValidateMethod = (a, b) => {
  return typeof a === 'number' && typeof b === 'number'
}
