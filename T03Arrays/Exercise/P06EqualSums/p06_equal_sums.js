function equalSums(inputArray) {

    let leftSum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        
        let rightSum = 0;

        for (let j = i + 1; j < inputArray.length; j++) {
            rightSum += inputArray[j];
        }

        if (leftSum == rightSum) {
            console.log(i);
            return;
        }

        leftSum += inputArray[i];
    }

    console.log('no');
}

equalSums([1, 2, 3, 3]);
console.log("-------------------------");
equalSums([1, 2]);
console.log("-------------------------");
equalSums([1]);
console.log("-------------------------");
equalSums([1, 2, 3]);
console.log("-------------------------");
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);