function reverseAnArrayOfNumbers(n, inputArray) {
    let revercedArray = [];

    for (let i = n - 1; i >= 0; i--) {
        revercedArray.push(inputArray[i]);
    }

    console.log(revercedArray.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log("-------------------------");
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log("-------------------------");
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);