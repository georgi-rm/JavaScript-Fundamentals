function addAndSubtract(inputArray) {

    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let number = inputArray[i];
        sumOfOriginalArray += number;
        if (number % 2 == 0) {
            number += i;
        } else {
            number -= i;
        }
        sumOfModifiedArray += number;
        inputArray[i] = number;
    }

    console.log(`[ ${inputArray.join(', ')} ]`);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
console.log("-------------------------");
addAndSubtract([-5, 11, 3, 0, 2]);
console.log("-------------------------");