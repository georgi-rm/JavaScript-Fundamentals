function arrayRotation(inputArray, inputRotations) {

    const rotations = inputRotations % inputArray.length;

    for (let rotation = 0; rotation < rotations; rotation++) {
        const firstElement = inputArray[0];
        let newArray = [];

        for (let i = 1; i < inputArray.length; i++) {
            newArray.push(inputArray[i]);
        }
        newArray.push(firstElement);
        inputArray = newArray;
    }

    console.log(inputArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
console.log("-------------------------");
arrayRotation([32, 21, 61, 1], 4);
console.log("-------------------------");
arrayRotation([2, 4, 15, 31], 5);