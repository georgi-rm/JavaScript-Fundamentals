function matrixNxN(matrixLength) {

    for (let i = 0; i < matrixLength; i++) {
        printLine(matrixLength);

    }

    function printLine(size) {
        let output = '';

        for (let i = 0; i < size; i++) {
            output += size + ' ';
        }

        console.log(output);
    }
}

matrixNxN(3);
console.log('-------------------------');
matrixNxN(7);
console.log('-------------------------');
matrixNxN(2);