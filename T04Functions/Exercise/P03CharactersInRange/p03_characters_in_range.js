function charactersInRange(firstChar, secondChar) {

    if (firstChar < secondChar) {
        printCharactersInRange(firstChar, secondChar);
    } else {
        printCharactersInRange(secondChar, firstChar);
    }

    function printCharactersInRange(start, end) {

        let output = '';

        for (let i = Number(start.charCodeAt(0)) + 1; i < Number(end.charCodeAt(0)); i++) {
            output += String.fromCharCode(i) + ' ';
        }

        console.log(output);
    }
}

charactersInRange('a', 'd');
console.log('-------------------------');
charactersInRange('#', ':');
console.log('-------------------------');
charactersInRange('C', '#');