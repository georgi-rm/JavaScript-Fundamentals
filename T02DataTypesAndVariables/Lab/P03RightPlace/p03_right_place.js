function rightPlace(text, replacement, match) {
    const result = text.replace('_', replacement);

    console.log(result == match ? 'Matched' : 'Not Matched' );
}

rightPlace('Str_ng', 'I', 'Strong');
console.log("-------------------------");
rightPlace('Str_ng', 'i', 'String');