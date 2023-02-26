function sumOfOddNumbers(n) {
    let sumOfOddNumbers = 0;
    let countOfOddNumbers = 0;

    let number = 1;

    while (countOfOddNumbers < n) {
        console.log(number);
        sumOfOddNumbers += number;
        number += 2;
        countOfOddNumbers++;
    }

    console.log(`Sum: ${sumOfOddNumbers}`);
}

sumOfOddNumbers(5);
console.log("-------------------------");
sumOfOddNumbers(3);