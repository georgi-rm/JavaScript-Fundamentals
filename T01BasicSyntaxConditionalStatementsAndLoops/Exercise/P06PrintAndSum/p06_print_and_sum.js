function printAndSum(startNumber, endNumber) {
    let sum = 0;

    let output = '';

    for (let number = startNumber; number <= endNumber; number++) {
        sum += number;
        output += `${number} `;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
console.log("-------------------------");
printAndSum(0, 26);
console.log("-------------------------");
printAndSum(50, 60);