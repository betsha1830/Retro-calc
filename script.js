const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const expressionField = document.querySelector('.expression');
const answerField = document.querySelector('.answer');

let array = [];
let num1 = '', num2 = '';
let op = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        array.push(number.innerText);
        console.log(array, num1, op)
    })
})

//Add decimal place

decimal.addEventListener('click', () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '.') {
            return
        }
    }
    array.push(decimal.innerText);
    
})

//Assign the first value to num1 to be processed

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (array.length == 0 || array[length-1] == operator) {
            return
        }
        if (num1 == 0) {
            num1 = array.splice(0, array.length);
            op = operator.innerText;
        }
        
    })
})

//Clear button functionality

clear.addEventListener('click', () => {
    array.splice(0, array.length)
    num1 = '', num2 = '';
    op = '';
})

//Backspace button functionality

backSpace.addEventListener('click', () => {
    if (array.length != 0) {
        array.pop();
    }
    else if (num1 != '') {
        op = ''
        for (let values of num1) {
            array.push(values) 
        }
        num1 = ''
    }
    else if (op != '') {
        array.pop();
    }
})



