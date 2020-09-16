// const title = document.querySelector('h1')
// console.log(title)

// const para = document.querySelector('p')
// para.addEventListener('click', sayHello)

// function sayHello() {
//   console.log("Hello!")
// }

// sayHello()
// title.addEventListener('click', sayHello)
// para.addEventListener('mouseenter', sayHello)
// title.addEventListener('click', () => console.log("Hello Phoenix!"))

// function doWork(callback, dollars) {
//   setTimeout(() => {
//     console.log("Doing work!")
//     // callback(dollars)
//   }    
//     , 2000)
//     callback(dollars)
// }

// function getPaid(money) {
//   console.log(`I have this much money ${money}`)
//   // console.log("money here!")
// }

// doWork()
// getPaid()


// doWork(getPaid, 1000)
// // getPaid()


// Events!

const form = document.querySelector('form')
// console.log(form)

const title = document.querySelector('h1')

const getName = (e) => {
  e.preventDefault()
  console.log(e)
  const input = document.querySelector('input').value
  console.log(input)
  // sayName(input)
}

// getName()

const sayName = (name) => {
  // console.log(e)
  title.textContent = `My name is ${name}`
  // title.textContent = 'Monkey Party'
  form.remove()
}

// form.addEventListener('submit', getName)
form.addEventListener('submit', getName)
title.addEventListener('mouseout', monkeyParty)


function monkeyParty() {
  title.textContent = 'Monkey Party' 
}
// title.addEventListener('click', (e) => {
//   console.log(e.target)
//   console.log(e.timeStamp)
// })
title.addEventListener('click', e => console.log('clicked!'))