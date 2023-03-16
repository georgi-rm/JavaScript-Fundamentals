function binaryToDecimal(binaryNumberAsString) {

    let numberDecimal = 0;

    for (let i = 0; i < binaryNumberAsString.length; i++) {
        if(binaryNumberAsString[binaryNumberAsString.length - 1 - i] == '1') {
            numberDecimal += Math.pow(2, i);
        }
    }

    console.log(numberDecimal);
}

binaryToDecimal('00001001');
console.log("-------------------------");
binaryToDecimal('11110000');