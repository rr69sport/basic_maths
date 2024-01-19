export type OperationMethod = (a: number, b: number) => number
export type ValidateMethod = (a: number, b: number) => boolean
export type ErrorMessage = (a: number, b: number) => string

export interface Operations {
  add: OperationMethod
  substract: OperationMethod
  multiply: OperationMethod
  divide: OperationMethod
  powOperation: OperationMethod
}
