export function add(a: number, b: number): number;
export function substract(a: number, b: number): number;
export function multiply(a: number, b: number): number;
export function divide(a: number, b: number): number | boolean;
export function powOperation(a: number, b: number): number | boolean;

declare namespace BasicMaths {
    export function add(a: number, b: number): number;
    export function substract(a: number, b: number): number;
    export function multiply(a: number, b: number): number;
    export function divide(a: number, b: number): number | boolean;
    export function powOperation(a: number, b: number): number | boolean;
}

declare class BasicMaths {
    add: (a: number, b: number) => number;
    substract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number | boolean;
    powOperation: (a: number, b: number) => number | boolean;
}

export default BasicMaths;