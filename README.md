# Basic math methods

![travis test](https://travis-ci.com/rr69sport/basic_maths.svg?branch=main) [![GitHub issues](https://img.shields.io/github/issues/rr69sport/basic_maths)](https://github.com/rr69sport/basic_maths/issues) ![GitHub last commit](https://img.shields.io/github/last-commit/rr69sport/basic_maths) ![npm](https://img.shields.io/npm/v/basic-maths) ![NPM](https://img.shields.io/npm/l/basic-maths)

## How to install

```bash
npm install basic-maths
```

## How to use

```js
// require
const basicMaths = require("basic-maths");
```

Or you can add to your `package.json` the property `"type": "module",` and use instead

```js
// import
import basicMaths from 'basic-maths';
```

```js
// methods
const add = basicMaths.add(1, 3); // return 4

const substract = basicMaths.substract(1, 2); // return -1

const multiply = basicMaths.multiply(1, 2); // return 2

const divideGood = basicMaths.divide(1, 2); // Good - return 0.5

const divideBad = basicMaths.divide(1, 0); // Bad - No number is divisible by zero

const powOperation = basicMaths.powOperation(2, 2); // return 8
```

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/rr69sport/basic_maths) ![npm](https://img.shields.io/npm/dt/basic-maths) [![GitHub forks](https://img.shields.io/github/forks/rr69sport/basic_maths)](https://github.com/rr69sport/basic_maths/network) [![GitHub stars](https://img.shields.io/github/stars/rr69sport/basic_maths)](https://github.com/rr69sport/basic_maths/stargazers) [![jsDelivr](https://data.jsdelivr.com/v1/package/npm/basic-maths/badge?style=rounded)](https://www.jsdelivr.com/package/npm/basic-maths) ![GitHub contributors](https://img.shields.io/github/contributors/rr69sport/basic_maths?color=success) ![npm collaborators](https://img.shields.io/npm/collaborators/basic-maths?color=success)

## CNDs

If your application is not from Node and you still want to use it on the frontend, you can import the CDN that is hosted on [jsDelivr](https://www.jsdelivr.com/package/npm/basic-maths)

### How to import

Just copy and paste in your html this script

```html
<script src="https://cdn.jsdelivr.net/npm/basic-maths@2.1.1/index.min.js"></script>
```
