function ladybugs(inputArray) {
    let sizeOfTheField = Number(inputArray[0]);
    let initialLadyBugs = inputArray[1].split(' ');
    let field = [];

    for (let i = 0; i < sizeOfTheField; i++) {
        field.push('0');
    }

    for (const initialLadyBugIndex of initialLadyBugs) {
        const fieldIndex = Number(initialLadyBugIndex);

        if (fieldIndex >= 0 && fieldIndex < field.length) {
            field[fieldIndex] = '1';
        }
    }

    for (let commandIndex = 2; commandIndex < inputArray.length; commandIndex++) {
        const commandArray = inputArray[commandIndex].split(' ');
        const index = Number(commandArray[0]);

        if (index >= 0 && index < field.length && field[index] == '1') {
            field[index] = '0';
            const flyLength = Number(commandArray[2]);
            let newIndex = index;
            let sign = 1;

            if (commandArray[1] == 'left') {
                sign = -1;
            }

            while (true) {
                newIndex += sign * flyLength;
                if (newIndex < 0 || newIndex >= field.length) {
                    break;
                }

                if (field[newIndex] == '0') {
                    field[newIndex] = '1';
                    break;
                }
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
console.log("-------------------------");
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
console.log("-------------------------");
ladybugs([5, '3', '3 left 2', '1 left -2']);