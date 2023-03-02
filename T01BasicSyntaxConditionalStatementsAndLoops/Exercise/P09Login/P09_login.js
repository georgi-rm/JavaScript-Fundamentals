function login(input) {
    const username = input[0];
    const password = username.split("").reverse().join("");

    let countOfWrongPasswords = 0;

    for (let index = 1; index < input.length; index++) {
        if (password == input[index]) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (countOfWrongPasswords == 3) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log('Incorrect password. Try again.');
        countOfWrongPasswords++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
console.log("-------------------------");
login(['momo', 'omom']);
console.log("-------------------------");
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);