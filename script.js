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

function modulo(num1, num2){
    return num1 % num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}



//registering buttons pressed

const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll(".number");

function clearOnPress(){
    if(!(chosenOperator == null)){
        screen.textContent = "";
    }
}

numbers.forEach((item) => {
    item.addEventListener("click", () => {
        if(screen.textContent.length >= 15){
            return;
        }
        clearOnPress();
        screen.append(item.textContent);
    })
})

//storing values

let firstNumber;
let secondNumber;
let chosenOperator;

function operatorChoice(operator){
    if(operator === "add"){
        return chosenOperator = add;
    }else if(operator === "subtract"){
        return chosenOperator = subtract;
    }else if(operator === "multiply"){
        return chosenOperator = multiply;
    }else if(operator === "divide"){
        return chosenOperator = divide;
    }else if(operator === "modulo"){
        return chosenOperator = modulo;
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((item) => {
        item.addEventListener("click", () => {
            if (!(firstNumber == null)){
               getTotal();
               operatorChoice(item.id);
               return firstNumber = Number(screen.textContent);
            }
            firstNumber = Number(screen.textContent);
            operatorChoice(item.id);
            screen.textContent = "";
    })
})


//getting product

const equals = document.querySelector("#equals");

function getTotal() {
    secondNumber = Number(screen.textContent);
    let result = operate(firstNumber, secondNumber, chosenOperator);
    screen.textContent = result;
}
equals.addEventListener("click", () => {
    getTotal();
})

//square root

const squareRoot = document.querySelector("#sqrt");

squareRoot.addEventListener("click", () => {
    screen.textContent = Math.sqrt(Number(screen.textContent));
})

//clear button

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    chosenOperator = null;
    screen.textContent = "";
})

//sign change button

const sign = document.querySelector("#sign");

sign.addEventListener("click", () => {
    let currentTotal = Number(screen.textContent);
    screen.textContent = currentTotal - currentTotal*2;
})

//decimal button

const decimalButton = document.querySelector("#decimal")

decimalButton.addEventListener("click", () => {
    if(screen.textContent.includes(".")){
        return;
    }else if(screen.textContent === ""){
        screen.append("0");
    }

    screen.append(".");
})