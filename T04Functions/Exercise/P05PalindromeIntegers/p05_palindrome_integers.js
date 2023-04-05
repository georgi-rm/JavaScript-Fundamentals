function palindromeIntegers(numbers) {

    for (const number of numbers) {
        const numberAsString = '' + number;

        let isPalindrome = true;
        for (let i = 0; i < Math.floor(numberAsString.length / 2); i++) {
            if (numberAsString[i] != numberAsString[numberAsString.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

palindromeIntegers([123, 323, 421, 121]);
console.log('-------------------------');
palindromeIntegers([32, 2, 232, 1010]);
