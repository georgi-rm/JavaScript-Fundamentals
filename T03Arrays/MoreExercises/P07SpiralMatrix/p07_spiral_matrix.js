function spiralMatrix(matrixRows, matrixColumns) {

    let number = 1;
    let matrix = [];

    for (let row = 0; row < matrixRows; row++) {
        matrix[row] = [];
    }

    let offset = 0;
    for (let rowLevel = matrixRows, colLevel = matrixColumns; rowLevel > 0 || colLevel > 0; rowLevel -= 2, colLevel -= 2) {

        if (rowLevel < 0) {
            rowLevel = 0;
        }

        if (colLevel < 0) {
            colLevel = 0;
        }

        for (let col = offset; col < offset + colLevel; col++) {
            matrix[offset][col] = number++;
        }

        for (let row = offset + 1; row < offset + rowLevel; row++) {
            matrix[row][colLevel + offset - 1] = number++;

        }

        for (let col = colLevel + offset - 2; col >= offset; col--) {
            matrix[rowLevel + offset - 1][col] = number++;
        }

        for (let row = rowLevel + offset - 2; row > offset; row--) {
            matrix[row][offset] = number++;
        }

        offset++;
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

spiralMatrix(5, 5);
console.log("-------------------------");
spiralMatrix(3, 3);
