function sortNumbers(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            console.log(firstNumber);

            if (secondNumber > thirdNumber) {
                console.log(secondNumber);
                console.log(thirdNumber);
            } else {
                console.log(thirdNumber);
                console.log(secondNumber);
            }
        } else {
            console.log(thirdNumber);
            console.log(firstNumber);
            console.log(secondNumber);
        }
    } else {
        if (secondNumber > thirdNumber) {
            console.log(secondNumber);

            if (firstNumber > thirdNumber) {
                console.log(firstNumber);
                console.log(thirdNumber);
            } else {
                console.log(thirdNumber);
                console.log(firstNumber);
            }
        } else {
            console.log(thirdNumber);
            console.log(secondNumber);
            console.log(firstNumber);
        }
    }
}

sortNumbers(2, 1, 3);
console.log("-------------------------");
sortNumbers(-2, 1, 3);
console.log("-------------------------");
sortNumbers(0, 0, 2);