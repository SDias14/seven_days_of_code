function sum (a, b) {
  return a + b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function subtract (a, b) {
  return a - b
}


alert("Welcome to the calculator app!")
let num1 = prompt("Enter the first number")
let num2 = prompt("Enter the second number")

let answer = prompt("Enter the operation to perform: \n 1 - sum \n 2 - multiply  \n 3 - divide \n 4- subtract \n 5 - exit")

while (answer != 5) {
  if (answer == 1) {
    alert(sum(parseInt (num1), parseInt (num2)))
  } else if (answer == 2) {
    alert(multiply(parseInt (num1), parseInt (num2)))
  } else if (answer == 3) {
    alert(divide(parseInt (num1), parseInt (num2)))
  } else if (answer == 4) {
    alert(subtract(parseInt (num1), parseInt (num2)))
  } else {
    alert("Invalid operation")
  }

  answer = prompt("Enter the operation to perform: \n 1 - sum \n 2 - multiply  \n 3 - divide \n 4- subtract \n 5 - exit")
}

alert("Thank you for using the calculator app!")

