function nonDecreasingSubset(inputArray) {
    let currentBiggestNumber = Number.MIN_SAFE_INTEGER;

    let outputArray = inputArray.filter(e => {
        if (e >= currentBiggestNumber) {
            currentBiggestNumber = e;
            return true;
        }
        return false;
    });

    console.log(outputArray.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("-------------------------");
nonDecreasingSubset([1, 2, 3, 4]);
console.log("-------------------------");
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);