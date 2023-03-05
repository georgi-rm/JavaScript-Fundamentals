function reverseString(text) {

    let reversedText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }

    console.log(reversedText);
}

reverseString('Hello');
console.log("-------------------------");
reverseString('SoftUni');
console.log("-------------------------");
reverseString('1234');