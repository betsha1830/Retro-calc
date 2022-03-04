const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const expressionField = document.querySelector('.expression');
const answerField = document.querySelector('.answer');

let array = [];
let num1 = 0, num2 = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        array.push(number.innerText);
        console.log(array)
    })
})

decimal.addEventListener('click', () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '.') {
            return
        }
    }

    array.push(decimal.innerText);
    
})

