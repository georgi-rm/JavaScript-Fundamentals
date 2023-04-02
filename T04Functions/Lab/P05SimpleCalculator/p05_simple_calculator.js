function simpleCalculator(firstOperand, secondOperand, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = firstOperand + secondOperand;
            break;
        case 'subtract':
            result = firstOperand - secondOperand;
            break;
        case 'divide':
            result = firstOperand / secondOperand;
            break;
        case 'multiply':
            result = firstOperand * secondOperand;
            break;
        default:
            break;
    }

    console.log(result);
}

simpleCalculator(5, 5, 'multiply');
console.log('-------------------------');
simpleCalculator(40, 8, 'divide');
console.log('-------------------------');
simpleCalculator(12, 19, 'add');
console.log('-------------------------');
simpleCalculator(50, 13, 'subtract');