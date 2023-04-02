function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    let minNumber = getMinNumber(firstNumber, secondNumber);
    minNumber = getMinNumber(minNumber, thirdNumber);

    console.log(minNumber);

    function getMinNumber(firstNumber, secondNumber) {
        if (firstNumber < secondNumber) {
            return firstNumber;
        } else {
            return secondNumber;
        }
    }
}

smallestOfThreeNumbers(2, 5, 3);
console.log('-------------------------');
smallestOfThreeNumbers(600, 342, 123);
console.log('-------------------------');
smallestOfThreeNumbers(25, 21, 4);
console.log('-------------------------');
smallestOfThreeNumbers(2, 2, 2);