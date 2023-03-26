function magicMatrices(inputMatrix) {

    let magicSum;
    let isMagicMatrix = true;
    let sumsByColumn = [];

    for (let row = 0; row < inputMatrix.length; row++) {
        let sumOfRow = 0;

        for (let col = 0; col < inputMatrix[row].length; col++) {
            sumOfRow += inputMatrix[row][col];

            if (row == 0) {
                sumsByColumn[col] = inputMatrix[row][col];
            } else {
                sumsByColumn[col] += inputMatrix[row][col];
            }
        }

        if (magicSum == undefined) {
            magicSum = sumOfRow;
        }

        if (sumOfRow != magicSum) {
            isMagicMatrix = false;
            break;
        }
    }

    for (const sumOfColumn of sumsByColumn) {
        if (sumOfColumn != magicSum) {
            isMagicMatrix = false;
            break;
        }
    }

    console.log(isMagicMatrix);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
console.log("-------------------------");
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
console.log("-------------------------");
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);
