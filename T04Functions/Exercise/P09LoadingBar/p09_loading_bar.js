function loadingBar(percentage) {

    if (percentage == 100) {
        console.log('100% Complete!');
    } else {
        printLoadingBar(percentage);
        console.log('Still loading...');
    }

    function printLoadingBar(percentage) {
        let output = `${percentage}% [`;

        for (let i = 0; i < 10; i++) {
            if (i < Math.floor(percentage / 10)) {
                output += '%';
            } else {
                output += '.';
            }
        }

        output += ']';

        console.log(output);
    }
}

loadingBar(30);
console.log('-------------------------');
loadingBar(50);
console.log('-------------------------');
loadingBar(100);