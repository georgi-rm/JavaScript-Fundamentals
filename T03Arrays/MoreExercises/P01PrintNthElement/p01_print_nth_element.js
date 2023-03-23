function printNthElement(inputArray) {
    const step = Number(inputArray[inputArray.length - 1]);
    let outputArray = [];

    for (let i = 0; i < inputArray.length - 1; i += step) {
        outputArray.push(inputArray[i]);
    }

    console.log(outputArray.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
console.log("-------------------------");
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
console.log("-------------------------");
printNthElement(['1', '2', '3', '4', '5', '6']);