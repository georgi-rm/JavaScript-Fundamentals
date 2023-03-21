function mergeArrays(firstArray, secondArray) {

    let mergeArray = [];
    for (let i = 0; i < Math.min(firstArray.length, secondArray.length); i++) {
        if (i % 2 == 0) {
            const firstNumber = Number(firstArray[i]);
            const secondNumber = Number(secondArray[i]);
            mergeArray.push(firstNumber + secondNumber);
        } else {
            mergeArray.push(firstArray[i] + secondArray[i]);
        }
    }

    console.log(mergeArray.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
console.log("-------------------------");
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);