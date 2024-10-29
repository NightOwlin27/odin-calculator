// Grabbed Elements ------------------------------
const display = document.querySelector(".display");
const clear = document.querySelector(".ac");
const plusMinusOp = document.querySelector(".PM .Op");
const remainderOp = document.querySelector(".Remainder .Op");
const additionOp = document.querySelector(".Addition .Op");
const subtractionOp = document.querySelector(".Subtraction .Op");
const multiplyOp = document.querySelector(".Multiply .Op");
const divisionOp = document.querySelector(".Division .Op");
const equalsOp = document.querySelector(".Equals .Op")
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const period = document.querySelector(".display");


// eventListeners-------------------------------

one.addEventListener('click', () =>  += display.textContent)

additionOp.addEventListener('click', function() {

})

equalsOp.addEventListener('click', () => operate())


// Variables-------------------------------------

let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";


// Operators -----------------------------------

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


// Operator Main Function ----------------------

function operate (num1, num2, operator) {
        if (operator === additionOp) {
            add(num1, num2);
        } else (operator === subtractionOp) {
            subtract(num1, num2);
        } else (operator === multiplyOp) {
            multiply(num1, num2);
        } else (operator === divisionOp) {
            divide(num1, num2);
        }
}