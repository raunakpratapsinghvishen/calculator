
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const resultField = document.getElementById('result');
const num1Field = document.getElementById('num1');
const num2Field = document.getElementById('num2');
const operation = document.getElementById('operation');

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Field.value);
    const num2 = parseFloat(num2Field.value);
    let result;

    try{
        switch(operation.value){
            case 'add':
                result = add(num1, num2);
                break;
            case 'subs':
                result = substract(num1, num2);
                break;
            case 'multi':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            }
            resultField.value = `Result = ${result}`;
    }catch(error){
        resultField.value = `Error: ${error.message}`;
    }
});

clearBtn.addEventListener('click', () => {
    num1Field.value = '';
    num2Field.value = '';
    resultField.value = '';
});