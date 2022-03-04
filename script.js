const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const clearButton = document.querySelector('.clear');
const backSpaceButton = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const equalButton = document.querySelector('.equals');
const expressionField = document.querySelector('.expression');
const answerField = document.querySelector('.answer');

let array = [];
let num1 = '', num2 = '', temp = '';
let op = '';
let result = 0;

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
    console.log(array, num1, op)
    array.push(decimal.innerText);
    
})

//Assign the first value to num1 to be processed

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (array.length == 0 || array[length-1] == operator) {
            return
        }
        if (num1 == '') {
            num1 = array.splice(0, array.length);
            op = operator.innerText;
            console.log(array, num1, op)
        }
        
    })
})

//Clear button functionality

clearButton.addEventListener('click', () => {
    array.splice(0, array.length)
    num1 = '', num2 = '';
    op = '';
    console.log(array, num1, op)
})

//Backspace button functionality

backSpaceButton.addEventListener('click', () => {
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
    console.log(array, num1, op)
})

//Equal button functionality (Do the desired computation)

equalButton.addEventListener('click', () => {

    if (array.length == 0) {
        return
    }

    num2 = array.splice(0, array.length);
    console.log(num1, num2);

    for (let i = 0; i < num1.length; i++) {
        temp += num1[i];
    }
    num1 = '';
    num1 = temp;
    temp = ''

    for (let i = 0; i < num2.length; i++) {
        temp += (num2[i]);
    }
    
    num2 = '';
    num2 = temp;
    temp = '';

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (op == '+') {
        result = num1 + num2;
    }
    else if (op == '-') {
        result = num1 - num2;
    }
    else if (op == '/') {
        result = num1/num2;
    }
    else result = num1 * num2;

    console.log(result)

})