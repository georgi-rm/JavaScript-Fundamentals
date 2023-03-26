function diagonalAttack(inputArray) {

    let matrix = [];

    for (let row = 0; row < inputArray.length; row++) {
        matrix[row] = inputArray[row].split(' ').map(Number);
    }

    let sumPrimaryDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        sumPrimaryDiagonal += matrix[row][row];
    }

    let sumSecondaryDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        sumSecondaryDiagonal += matrix[row][matrix[row].length - row - 1];
    }

    if(sumPrimaryDiagonal == sumSecondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row != col && col != matrix[row].length - row - 1) {
                    matrix[row][col] = sumPrimaryDiagonal;
                }
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
console.log("-------------------------");
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);