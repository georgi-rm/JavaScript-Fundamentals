function sumFirstAndLastArrayElements(inputArray) {
    const firstElement = inputArray[0];
    const lastElement = inputArray[inputArray.length - 1];
    console.log(firstElement + lastElement);
}

sumFirstAndLastArrayElements([20, 30, 40]);
console.log("-------------------------");
sumFirstAndLastArrayElements([10, 17, 22, 33]);
console.log("-------------------------");
sumFirstAndLastArrayElements([11, 58, 69]);
console.log("-------------------------");