console.log('hi')

// WRITE SMALL FUNCTIONS THAT DO ONE TASK AT A TIME

// THINK ABOUT REUSABILITY

// THREE WAYS TO DEFINIE AND WRITE FUNCTIONS

// 1. function declaration

function greeting(name) {
  console.log('Hello,', name)
}
greeting('Zuri')

function greeting2(name) {
  return 'hello, ' + name
}

console.log(greeting2('Anthony'))

function greeting3(name) {
  return `Hello, ${name}`
}

console.log(greeting3('Hadley'))

// 2. function expression -- function expressions are defined inside a variable

const sayHi = function(name) {
  console.log(`Hi, ${name}`)
}

sayHi('Lily')

// differences between fn declaration and fe
// syntax
// in function declaration, you can invoke anywhere in the file - even before the function is defined
// in function expression, you can only invoke after a function is defined

// 3. arrow functions - act just like expressions, but have a different syntax

function add(a, b) {
  return a + b
}

let addedNums = add(3, 4)
console.log(addedNums)

let addArrow = (a, b) => a + b
console.log(addArrow(3, 4))

// arrow functions do not need the word function
// it takes (params) => // do this thing

// a function expression  

// write a function declaration

// function computeArea(w, h) {
//   return `The area of a rectangle with a width of ${w} and a height of ${h} is ${w * h} square units`
// }

// console.log(computeArea(5, 25))

function computeArea(width, height) {
  // return 'The area of a rectangle with a width of ' + width + 'and a height of ' + height + ' is ' + width * height + ' square units'
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units`
}

console.log(computeArea(5, 12))

// write a fn expression

/**
 * write a function called planetHasWater as a *function expression*
 * 
 * it will have one parameter 'planet'
 * 
 * return true is 'Earth' or 'Mars', otherwise false
 * 
 * 
 */

// if the planet is Earth or if the planet is Mars
// return true
// or else false

const planetHasWater = function(planet) {
  planet = planet.toUpperCase()
  if (planet === 'EARTH' || planet === 'MARS') {
    return true
  } else {
    return false
  }
}

console.log( planetHasWater('Earth') ) //=> true
console.log( planetHasWater('Venus') ) //=> false
// Test the bonus...
console.log( planetHasWater('mArS') ) //=> true