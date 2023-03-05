function echoType(parameter) {
    const typeOfParameter = typeof (parameter);

    console.log(typeOfParameter);

    if (typeOfParameter == 'string' || typeOfParameter == 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
console.log("-------------------------");
echoType(18);
console.log("-------------------------");
echoType(null);