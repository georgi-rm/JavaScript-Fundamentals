function condenseArrayToNumber(inputArray) {

    while (inputArray.length > 1) {
        let condensedArray = [];

        for (let i = 0; i < inputArray.length - 1; i++) {
            condensedArray[i] = inputArray[i] + inputArray[i + 1];
        }
        inputArray = condensedArray;
    }

    console.log(inputArray[0]);
}

condenseArrayToNumber([2, 10, 3]);
console.log("-------------------------");
condenseArrayToNumber([5, 0, 4, 1, 2]);
console.log("-------------------------");
condenseArrayToNumber([1]);