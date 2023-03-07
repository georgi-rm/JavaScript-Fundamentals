function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    const sum = firstNumber + secondNumber + thirdNumber;

    const typeOfSum = sum % 1 == 0 ? 'Integer' : 'Float';

    console.log(`${sum} - ${typeOfSum}`);
}

integerAndFloat(9, 100, 1.1);
console.log("-------------------------");
integerAndFloat(100, 200, 303);