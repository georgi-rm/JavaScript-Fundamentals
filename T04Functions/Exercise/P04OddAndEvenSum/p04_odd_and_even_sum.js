function oddAndEvenSum(number) {

    const evenSum = getEvenSum(number);
    const oddSum = getOddSum(number);


    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function getEvenSum(number) {
        let sum = 0;

        while (number != 0) {
            let digit = number % 10;

            if (digit % 2 == 0) {
                sum += digit;
            }

            number = Math.floor(number / 10);
        }

        return sum;
    }

    function getOddSum(number) {
        let sum = 0;

        while (number != 0) {
            let digit = number % 10;

            if (digit % 2 != 0) {
                sum += digit;
            }

            number = Math.floor(number / 10);
        }

        return sum;
    }
}

oddAndEvenSum(1000435);
console.log('-------------------------');
oddAndEvenSum(3495892137259234);
console.log('-------------------------');