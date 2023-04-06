function perfectNumber(number) {

    if (number == getSumOfDivisors(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

    function getSumOfDivisors(number) {
        let sum = 0;

        for (let divisor = 1; divisor < number; divisor++) {
            if (number % divisor == 0) {
                sum += divisor;
            }
        }

        return sum;
    }
}

perfectNumber(6);
console.log('-------------------------');
perfectNumber(28);
console.log('-------------------------');
perfectNumber(1236498);
