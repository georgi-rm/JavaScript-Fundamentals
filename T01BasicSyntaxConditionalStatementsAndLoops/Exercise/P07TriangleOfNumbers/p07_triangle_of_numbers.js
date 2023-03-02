function triangleOfNumbers(n) {

    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 0; col < row; col++) {
            line += `${row} `
        }
        console.log(line.trimEnd());
    }
}

triangleOfNumbers(3);
console.log("-------------------------");
triangleOfNumbers(5);
console.log("-------------------------");
triangleOfNumbers(6);