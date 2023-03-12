function calculator(fistOperand, operator, secondOperand) {

    let result;

    switch (operator) {
        case '+':
            result = fistOperand + secondOperand;
            break;
        case '-':
            result = fistOperand - secondOperand;
            break;
        case '/':
            result = fistOperand / secondOperand;
            break;
        case '*':
            result = fistOperand * secondOperand;
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
console.log("-------------------------");
calculator(25.5, '-', 3);
console.log("-------------------------");
calculator(25.5, '/', 2);
console.log("-------------------------");
calculator(25.5, '*', 5);