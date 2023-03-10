function triplesOfLatinLetters(number) {

    for (let fistCounter = 0; fistCounter < number; fistCounter++) {
        for (let secondCounter = 0; secondCounter < number; secondCounter++) {
            for (let thirdCounter = 0; thirdCounter < number; thirdCounter++) {
                const fistLetter = String.fromCharCode(97 + fistCounter);
                const secondLetter = String.fromCharCode(97 + secondCounter);
                const thirdLetter = String.fromCharCode(97 + thirdCounter);

                console.log(`${fistLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(3);
console.log("-------------------------");
triplesOfLatinLetters(2);