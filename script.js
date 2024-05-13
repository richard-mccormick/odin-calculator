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
    if(num2 === 0 || num2 == null){
        return "ERROR"
    }
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
    if(!(result == null)){
        screen.textContent = "";
        result = null;
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
            if (!(firstNumber == null) && result == null){
                secondNumber = Number(screen.textContent);
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
let result;
function getTotal() {
    result = operate(firstNumber, secondNumber, chosenOperator);
    screen.textContent = result;
    resultLength();
    firstNumber = Number(screen.textContent);
}
equals.addEventListener("click", () => {
    if(!(result == null)){
        return getTotal();
    }
    secondNumber = Number(screen.textContent);
    getTotal();
})

//square root

const squareRoot = document.querySelector("#sqrt");

squareRoot.addEventListener("click", () => {
    screen.textContent = Math.sqrt(Number(screen.textContent))
    resultLength();
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

//trimming result to 15 characters max


function resultLength(){
    if(screen.textContent.includes(".")){
        let splitResult = screen.textContent.split(".");
        let intHalf = splitResult[0];
        let decHalf = splitResult[1];
        let theResult = Number(screen.textContent)
    

        if(intHalf.length > 15 || theResult > 1e20){
            return screen.textContent = "ERROR";
        }else if(decHalf.length > (14 - intHalf.length)){
            return screen.textContent = theResult.toFixed(14-intHalf.length);
        }
    }else if (String(screen.textContent.length) > 15) {
        return screen.textContent = "ERROR";
    }
}

//checking for values