function rotateArray(inputArray) {
    let rotations = Number(inputArray.pop());

    rotations = rotations % inputArray.length;

    for (let i = 0; i < rotations; i++) {
        inputArray.unshift(inputArray.pop());
    }

    console.log(inputArray.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
console.log("-------------------------");
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);