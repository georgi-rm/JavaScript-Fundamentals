function sumDigits(number) {
    const numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    console.log(sum);
}

sumDigits(245678);
console.log("-------------------------");
sumDigits(97561);
console.log("-------------------------");
sumDigits(543);