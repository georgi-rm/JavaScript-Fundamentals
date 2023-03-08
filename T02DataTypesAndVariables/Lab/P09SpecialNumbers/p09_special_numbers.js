function specialNumbers(n) {

    for (let number = 1; number <= n; number++) {
        const numberAsString = String(number);
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }

        let isAmazing = 'False';
        if (sum == 5 || sum == 7 || sum == 11) {
            isAmazing = 'True';
        }

        console.log(`${number} -> ${isAmazing}`);
    }
}

specialNumbers(15);
console.log("-------------------------");
specialNumbers(20);