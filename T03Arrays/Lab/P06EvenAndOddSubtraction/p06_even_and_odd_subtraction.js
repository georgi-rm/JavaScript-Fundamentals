function evenAndOddSubtraction(inputArray) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let number = inputArray[i];
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
console.log("-------------------------");
evenAndOddSubtraction([3, 5, 7, 9]);
console.log("-------------------------");
evenAndOddSubtraction([2, 4, 6, 8, 10]);
console.log("-------------------------");