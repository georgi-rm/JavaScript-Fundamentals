function sumEvenNumbers(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let number = Number(inputArray[i]);
        if (number % 2 == 0) {
            sum += number;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
console.log("-------------------------");
sumEvenNumbers(['3', '5', '7', '9']);
console.log("-------------------------");
sumEvenNumbers(['2', '4', '6', '8', '10']);