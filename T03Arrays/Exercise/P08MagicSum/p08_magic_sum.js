function magicSum(inputArray, magicNumber) {

    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] == magicNumber) {
                console.log(`${inputArray[i]} ${inputArray[j]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("-------------------------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("-------------------------");
magicSum([1, 2, 3, 4, 5, 6], 6);