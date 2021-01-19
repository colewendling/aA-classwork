function sum1(context) {  
  let counter = 0;
  for (let i = 0; i < arguments.length; i++) {
    counter += arguments[i];
  }
  return counter;
  // console.log(arguments)
  // console.log(context)
  // console.log('dadas')
}

// console.log(sum1(1,23,4,2,31,2,2));



function sum2(...nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    counter += nums[i];
  }
  return counter;
}

// console.log(sum2(1,23,4,2,31,2,2));




Function.prototype.myBind1 = function (context) {
  const fn = this
  const inputs = Array.from(arguments).slice(1)
  return function boundFunction() {
    const inputs2 = Array.from(arguments)
    return fn.apply(context, inputs.concat(inputs2))
  };

  
}
// markov.says.myBind1(pavlov)("meow", "a tree");



Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return this.apply(ctx, bindArgs)
}











class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind1(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind1(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind1(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind1(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true























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


