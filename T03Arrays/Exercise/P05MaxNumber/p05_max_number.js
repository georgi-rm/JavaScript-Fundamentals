function maxNumber(inputArray) {
    let biggestInteger = Number.MIN_SAFE_INTEGER;
    const topIntegersArray = [];

    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (inputArray[i] > biggestInteger) {
            topIntegersArray.push(inputArray[i]);
            biggestInteger = inputArray[i];
        }
    }

    console.log(topIntegersArray.reverse().join(' '));
}

maxNumber([1, 4, 3, 2]);
console.log("-------------------------");
maxNumber([14, 24, 3, 19, 15, 17]);
console.log("-------------------------");
maxNumber([41, 41, 34, 20]);
console.log("-------------------------");
maxNumber([27, 19, 42, 2, 13, 45, 48]);