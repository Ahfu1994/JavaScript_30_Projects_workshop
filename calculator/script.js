const calculatorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// console.log(inputBtn);

//number1 operand nuber2
//10 + 20
//99.99 + 100

const calculate = {
    "/": (firstNumber, secondNumber) => secondNumber != 0 ? firstNumber / secondNumber : "error",
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "=": (firstNumber, secondNumber) => secondNumber

};

let firstValue = 0; // number1
let operatorValue = '' //operand
let waitForNext = false; // keep firstvalue and operand before accept seccondevalue

inputBtn.forEach((input) => {
    //number button
    if (input.classList.length === 0) {
        input.addEventListener('click', () => setNumberValue(input.value));

    } else if (input.classList.contains('operator')) {
        input.addEventListener('click', () => callOperator(input.value));
    } else if (input.classList.contains('decimal')) {
        input.addEventListener('click', () => addDecimal());
    }

});

function addDecimal() {
    if (waitForNext) {
        return;
    }
    if (!calculatorDisplay.textContent.includes('.')) { // check all charecter dont have . in string 
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }

}

function callOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);

    if (operatorValue && waitForNext) {
        operatorValue = operator;
        return;
    }
    if (!firstValue) {
        firstValue = currentValue; // init value
    } else {
        const result = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = result;
        firstValue = result;
        if (firstValue === 'error') {
            resetAll();

        }
    }
    waitForNext = true;
    operatorValue = operator;
}

function setNumberValue(number) {
    // console.log(number);
    if (waitForNext) {
        calculatorDisplay.textContent = number;
        waitForNext = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }

}

function resetAll() {
    firstValue = 0;
    operatorValue = '';
    waitForNext = false;
    calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', () => resetAll());