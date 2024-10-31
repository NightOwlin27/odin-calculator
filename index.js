// Grabbed Elements ------------------------------
const display = document.querySelector(".display");
const clear = document.querySelector(".ac");
const plusMinusOp = document.querySelector(".pm .op");
const percentageOp = document.querySelector(".percentage .op");
const additionOp = document.querySelector(".addition .op");
const subtractionOp = document.querySelector(".subtraction .op");
const multiplyOp = document.querySelector(".multiply .op");
const divisionOp = document.querySelector(".division .op");
const equalsOp = document.querySelector(".equals")
const zero = document.querySelector(".num .zero");
const one = document.querySelector(".num .one");
const two = document.querySelector(".num .two");
const three = document.querySelector(".num .three");
const four = document.querySelector(".num .four");
const five = document.querySelector(".num .five");
const six = document.querySelector(".num .six");
const seven = document.querySelector(".num .seven");
const eight = document.querySelector(".num .eight");
const nine = document.querySelector(".num .nine");
const period = document.querySelector(".period");

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll('.op')


// Variables-------------------------------------

let arr = [];
// could always make a second arr and have the equals event list
// push that value into the second and then have the op function work it out
let value = '';
let operator = '';
let sum = '';


// Operations -----------------------------------

const add = (a, b) => sum = a + b;

const subtract = (a, b) => sum = a - b;

const multiply = (a, b) => sum = a * b;

const divide = (a, b) => sum = a / b;

const percentage = (a) => sum = a / 100;


// Operator Main Function ----------------------

function operate () {
    let num1 = +arr[0];
    let op = arr[1];
    let num2 = +arr[2];
        if (op === '+') {
            add(num1, num2);
            console.log(op);
            display.textContent = sum;
        } else if (op === '-') {
            subtract(num1, num2);
            console.log(op);
            display.textContent = sum;
        } else if (op === 'x') {
            multiply(num1, num2);
            console.log(op);
            display.textContent = sum;
        } else if (op === '/') {
            divide(num1, num2);
            console.log(op);
            display.textContent = sum;
        }
        // } else if (op === '%') {
        //     remainder(num1);
        //     console.log(op);
        //     display.textContent = sum;
        // }
}


// eventListeners-------------------------------
numbers.forEach(num => {
    num.addEventListener('click', () => {
        value += num.textContent
        display.textContent = value
        // arr.push(value);
        // console.log(arr);
    })  
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.textContent
        arr.push(value);
        arr.push(operator)
        console.log(arr);
        value = "";
        display.textContent = value; 
    })
})

equalsOp.addEventListener('click', () => {
    arr.push(value);
    console.log(arr);
    operate(arr);
    // If array does not contain two values, clear. This is to prevent adding arr elements by continuously pressing equals sign.
})

clear.addEventListener('click', () => {
    arr = [];
    value = "";
    display.textContent = value;
})