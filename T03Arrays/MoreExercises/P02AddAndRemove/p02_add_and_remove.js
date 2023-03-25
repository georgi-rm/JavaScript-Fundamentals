function addAndRemove(inputArray) {
    let currentNumber = 1;
    let outputArray = [];

    for (const command of inputArray) {

        switch (command) {
            case 'add':
                outputArray.push(currentNumber);
                break;
            case 'remove':
                outputArray.pop();
                break;
            default:
                break;
        }

        currentNumber++;
    }

    if(outputArray.length == 0) {
        console.log('Empty');
    } else {
        console.log(outputArray.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
console.log("-------------------------");
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log("-------------------------");
addAndRemove(['remove', 'remove', 'remove']);