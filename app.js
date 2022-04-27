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

