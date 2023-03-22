function maxSequenceOfEqualElements(inputArray) {

    let longestSequenceIndex = 0;
    let longestSequenceLength = 0;
    let currentSequenceIndex = 0;
    let currentSequenceLength = 0;
    let currentSequenceNumber;

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == currentSequenceNumber) {
            currentSequenceLength++;
            if (currentSequenceLength > longestSequenceLength) {
                longestSequenceIndex = currentSequenceIndex;
                longestSequenceLength = currentSequenceLength;
            }
        } else {
            currentSequenceNumber = inputArray[i];
            currentSequenceIndex = i;
            currentSequenceLength = 1;
        }
    }

    let outputArray = [];
    for (let i = longestSequenceIndex; i < longestSequenceIndex + longestSequenceLength; i++) {
        outputArray.push(inputArray[i]);
    }

    console.log(outputArray.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("-------------------------");
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log("-------------------------");
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log("-------------------------");
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);