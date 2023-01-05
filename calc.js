
// # 1
// class Calculator {
//   constructor(display) {
//     this.display = display
//     this.clear()
//   }

//   clear() {
//     this.display = ''
//     this.operator = undefined
//   }

//   delete() {

//   }

//   appendNum(number) {
//     this.display = this.display.toString() + number.toString()
//   }

//   chooseOperator(operator) {
    
//   }

//   compute() {

//   }

//   updateDisplay() {
//     this.display.innerText = this.display
//   }
// }

// Switching between themes
const setTheme = (theme) => (document.documentElement.className = theme)

// # 2
const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal')
const clearEntry = document.querySelector('.clear-entry')

let displayEmpty = '';
let result = null;
let lastOperator = '';
let haveDot = false;

numbers.forEach( number => {
  number.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if(e.target.innerText === '.' && haveDot) {
      return;
    }
    displayEmpty += e.target.innerText;
    display.innerText = displayEmpty;
  })
})

operator.forEach(operator => {
  operator.addEventListener('click', (e) => {
    if(!displayEmpty) return;
    haveDot = false;
    const operation = e.target.innerText;
    if(display && lastOperator) {
      mathOperation();
    } else {
      result = parseFloat(displayEmpty)
    }
    clearE(operation);
    console.log(result);
  })
})

function clearE (name = '') {
  display + ' ' + name + ' '
  display.innerText = displayEmpty
  display.innerHTML = ''
}

// # 1
// const numbers = document.getElementsByClassName('number')
// const plus = document.getElementById('plus')
// const minus = document.getElementById('minus')
// const equal = document.getElementById('equal')
// const multiply = document.getElementById('multiply')
// const del = document.getElementById('del')
// const ce = document.getElementById('clear-entry')
// const display = document.getElementById('display')

// const calculator = new Calculator(display)

// // numbers.forEach(button => {
// //   button.addEventListener('click', () => {
// //     calculator.appendNum(button.innerText)
// //     calculator.updateDisplay()
// //   })
// // })

// Array.from(numbers).forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNum(button.innerText)
//     calculator.updateDisplay()
//     console.log(numbers)
//   })
// })
