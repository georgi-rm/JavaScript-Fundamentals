function reverseInPlace(inputArray) {

    for (let i = 0; i < inputArray.length / 2; i++) {
        swapElements(inputArray, i, inputArray.length - 1 - i);
    }

    console.log(inputArray.join(" "));

    function swapElements(inputArray, firstIndex, secondIndex) {
        const temp = inputArray[firstIndex];
        inputArray[firstIndex] = inputArray[secondIndex];
        inputArray[secondIndex] = temp;
    }
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
console.log("-------------------------");
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
console.log("-------------------------");
reverseInPlace(['33', '123', '0', 'dd']);
console.log("-------------------------");