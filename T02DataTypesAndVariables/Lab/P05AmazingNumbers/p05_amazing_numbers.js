function amazingNumbers(number) {

    const numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    let isAmazing = 'False';
    const sumAsString = String(sum);

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '9') {
            isAmazing = 'True';
            break;
        }
    }

    console.log(`${number} Amazing? ${isAmazing}`);
}

amazingNumbers(1233);
console.log("-------------------------");
amazingNumbers(999);