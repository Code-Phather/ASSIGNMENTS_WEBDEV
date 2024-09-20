// DECLARATION IS HERE
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const resultElement = document.getElementById('result');

// FUCTION FOR CALCULATION
function calculate(operator) {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Invalid operator';
            return;
    }

    resultElement.textContent = result;
}

addBtn.addEventListener('click', () => calculate('+'));
subtractBtn.addEventListener('click', () => calculate('-'));
multiplyBtn.addEventListener('click', () => calculate('*'));
divideBtn.addEventListener('click', () => calculate('/'));