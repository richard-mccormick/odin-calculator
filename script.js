console.log("HELLO WORLD");

//basic math functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2
}

let firstNumber;
let secondNumber;
let chosenOperator;

function operate(num1, num2, operator) {
    return operator(num1, num2);
}