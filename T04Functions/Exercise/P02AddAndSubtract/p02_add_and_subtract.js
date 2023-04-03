function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    let result = sum(firstNumber, secondNumber);
    result = subtract(result, thirdNumber);

    console.log(result);

    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
}

addAndSubtract(23, 6, 10);
console.log('-------------------------');
addAndSubtract(1, 17, 30);
console.log('-------------------------');
addAndSubtract(42, 58, 100);