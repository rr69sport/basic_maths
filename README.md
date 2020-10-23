# Basic math methods ![travis test](https://travis-ci.com/rr69sport/basic_maths.svg?branch=main)

```js
const maths = require("basic-maths");
// or
import maths from "basic-maths";

const add = maths.add(1, 2);
const substract = maths.substract(1, 2);
const multiply = maths.multiply(1, 2);
const divideGood = maths.divide(1, 2); // Good
const divideBad = maths.divide(1, 0); // Bad. No number is divisible by zero
```
