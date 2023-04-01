function repeatString(text, repeatTimes) {
    let output = '';

    for (let i = 0; i < repeatTimes; i++) {
        output += text;
    }

    return output;
}

console.log(repeatString("abc", 3));
console.log('-------------------------');
console.log(repeatString("String", 2));