function sum1() {  
}

function sum2(...nums) {
}

Function.prototype.myBind1 = function (ctx) {
}

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
}

function curriedSum(numArgs) {
}

// using spread
Function.prototype.curry = function (numArgs) {
}

// using apply
Function.prototype.curry1 = function (numArgs) {
}

/**
 * With ES6 arrow functions
 * Notice we dont need to keep track of the `this` context (const fn = this).
 * An arrow function does not have its own `this`,
 * the `this` value of the enclosing execution context is used.
 */
Function.prototype.curry2 = function (nArg) {
}


