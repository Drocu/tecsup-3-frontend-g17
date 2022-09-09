'use strict';

const documentReady = () => {
    const calculatorForm = document.getElementById('calculatorForm');

    const calculate = (e) => {
        e.preventDefault();
        const number1 = +document.getElementById('number1').value;
        const operator = document.getElementById('operator').value;
        const number2 = +document.getElementById('number2').value;
        const result = document.getElementById('result');

        let operationResult = 0;

        switch (operator) {
            case '+':
                operationResult = number1 + number2;
                break;
            case '-':
                operationResult = number1 - number2;
                break;
            case '*':
                operationResult = number1 * number2;
                break;
            case '/':
                operationResult = number1 / number2;
                break;
        
            default:
                break;
        }

        result.innerHTML = operationResult;
    };

    calculatorForm.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);