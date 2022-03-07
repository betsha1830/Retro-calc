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

let num = numbers.forEach(number => {
    number.addEventListener('click', () => {
        array.push(number.innerText);
    })
})

//Add decimal place

let deci = decimal.addEventListener('click', () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '.') {
            return
        }
    }
    array.push(decimal.innerText);
    
})

//Assign the first value to num1 to be processed

let ops = operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (array.length == 0 || array[length-1] == operator) {
            return
        }
        if (num1 == '') {
            num1 = array.splice(0, array.length);
            op = operator.innerText;
            expressionField.innerText += op;
        }
    })
})

//Clear button functionality

let clear = clearButton.addEventListener('click', () => {
    array.splice(0, array.length)
    num1 = '', num2 = '';
    op = '';
    result = ''
    answerField.innerText = 0;
    expressionField.innerText = ''
})

//Backspace button functionality

let backsapce = backSpaceButton.addEventListener('click', () => {
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

    let expression = expressionField.innerText;
    let expTemp = '', exp = '';

    for (let i = 0; i < expression.length-2; i++) {
        expTemp += expression[i];
        
        if (op != '' && array.length == 1) {
            expTemp += op;
        }

    }
    
    exp = expTemp;
    expressionField.innerText = exp;
    exp = ''
    expTemp ='';

})

//Equal button functionality (Do the desired computation)

let equal = equalButton.addEventListener('click', () => {

    if (array.length == 0) {
        return
    }

    num2 = array.splice(0, array.length);

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

    answerField.innerText = result;

})

//Print on Expression field

window.addEventListener('click', () => {

    if(array[array.length -1 ] != undefined) {
        expressionField.innerText += array[array.length-1];
    }

    let junk;

    if (result != '' && array.length != 0) {
        array.splice(0, array.length)
        num1 = '', num2 = '';
        op = '';
        result = ''
        answerField.innerText = 0;
        expressionField.innerText = ''
    }
        
})