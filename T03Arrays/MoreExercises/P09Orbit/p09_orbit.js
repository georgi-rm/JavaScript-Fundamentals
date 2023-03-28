function orbit(inputArray) {

    let fieldHeight = inputArray[0];
    let fieldWidth = inputArray[1];
    let coordinateY = inputArray[2];
    let coordinateX = inputArray[3];
    let matrix = [];

    for (let row = 0; row < fieldHeight; row++) {
        matrix[row] = [];
        for (let col = 0; col < fieldWidth; col++) {
            matrix[row][col] = undefined;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        matrix[row][coordinateX] = Math.abs(row - coordinateY) + 1;
    }

    for (let col = 0; col < matrix[coordinateY].length; col++) {
        matrix[coordinateY][col] = Math.abs(col - coordinateX) + 1;
    }
    
    for (let row = coordinateY + 1; row < matrix.length; row++) {
        for (let col = coordinateX + 1; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1]);
        }
    }

    for (let row = coordinateY + 1; row < matrix.length; row++) {
        for (let col = coordinateX - 1; col >= 0; col--) {
            matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col + 1]);
        }
    }

    for (let row = coordinateY - 1; row >= 0; row--) {
        for (let col = coordinateX + 1; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(matrix[row + 1][col], matrix[row][col - 1]);
        }
    }

    for (let row = coordinateY - 1; row >= 0; row--) {
        for (let col = coordinateX - 1; col >= 0; col--) {
            matrix[row][col] = Math.max(matrix[row + 1][col], matrix[row][col + 1]);
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

orbit([4, 4, 0, 0]);
console.log("-------------------------");
orbit([5, 5, 2, 2]);
console.log("-------------------------");
orbit([3, 3, 2, 2]);
console.log("-------------------------");
orbit([3, 2, 0, 1]);