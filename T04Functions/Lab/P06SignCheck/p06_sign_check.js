function signCheck(firstNumber, secondNumber, thirdNumber) {
    let isNegative = false;

    if (firstNumber < 0) {
        isNegative = !isNegative;
    }

    if (secondNumber < 0) {
        isNegative = !isNegative;
    }

    if (thirdNumber < 0) {
        isNegative = !isNegative;
    }

    if (isNegative) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

signCheck(5, 12, -15);
console.log('-------------------------');
signCheck(-6, -12, 14);
console.log('-------------------------');
signCheck(-1, -2, -3);
console.log('-------------------------');
signCheck(-5, 1, 1);