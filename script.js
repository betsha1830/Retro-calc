const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const clearButton = document.querySelector('.clear');
const backSpaceButton = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const equalButton = document.querySelector('.equals');
const expressionField = document.querySelector('.expression');
const answerField = document.querySelector('.answer');

let array = [], fieldArray = []; // This will be used to store the expression for the expression field.
let num1 = '', num2 = '', temp = ''; // temp is used to copy from variable to another.
let op = '';
let result = 0;
let expression = ''; // To store the expression that is suppose to be printed for the user.

function printExpression () {

    expression = '';

    for (let item in fieldArray) {
        expression += fieldArray[item];
    }

    expressionField.innerText = expression;
}


let num = numbers.forEach(number => {
    number.addEventListener('click', () => {
        array.push(number.innerText);

        fieldArray.push(number.innerText);

        printExpression();
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
    
    fieldArray.push(decimal.innerText);

    printExpression();
    
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
            
            fieldArray.push(operator.innerText);

            printExpression();
            
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
    expression = '';
    expressionField.innerText = '';
    fieldArray = [];
})

//Backspace button functionality

let backsapce = backSpaceButton.addEventListener('click', () => {
    if (array.length != 0) {
        array.pop();
        fieldArray.pop();

        printExpression();
    }
    else if (num1 != '') {
        op = '';
        fieldArray.pop();
        printExpression();
        for (let values of num1) {
            array.push(values);
        }
        num1 = '';
    }
    else if (op != '') {
        array.pop();
        fieldArray.pop();

        printExpression();
    }    
    

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
    
    num1 = '', num2 = '';
    op = '';
    result = ''
    expression = '';
    expressionField.innerText = '';
    fieldArray = [];

})
