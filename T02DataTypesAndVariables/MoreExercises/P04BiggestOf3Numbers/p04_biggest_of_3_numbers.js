function biggestOf3Numbers(firstNumber, secondNumber, thirdNumber) {
    let maxNumber = firstNumber;

    if (secondNumber > maxNumber) {
        maxNumber = secondNumber;
    }

    if (thirdNumber > maxNumber) {
        maxNumber = thirdNumber;
    }

    console.log(maxNumber);
}

biggestOf3Numbers(-2, 7, 3);
console.log("-------------------------");
biggestOf3Numbers(130, 5, 99);
console.log("-------------------------");
biggestOf3Numbers(43, 43.2, 43.1);
console.log("-------------------------");
biggestOf3Numbers(2, 2, 2);