function passwordValidator(password) {

    if (isPasswordValid(password)) {
        console.log('Password is valid');
    }

    function isPasswordValid(password) {
        let isPasswordValid = true;

        if (!checkPasswordSize(password)) {
            console.log('Password must be between 6 and 10 characters');
            isPasswordValid = false;
        }

        if (!checkPasswordContent(password)) {
            console.log('Password must consist only of letters and digits');
            isPasswordValid = false;
        }

        if (!checkPasswordDigitsCount(password)) {
            console.log('Password must have at least 2 digits');
            isPasswordValid = false;
        }

        return isPasswordValid;
    }

    function checkPasswordSize(password) {
        return (password.length >= 6 && password.length <= 10);
    }

    function checkPasswordContent(password) {
        for (let i = 0; i < password.length; i++) {
            if (!isLetterOrDigit(password.charAt(i))) {
                return false;
            }
        }

        return true;
    }

    function isLetterOrDigit(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }

    function checkPasswordDigitsCount(password) {
        let countDigits = 0;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password.charAt(i))) {
                countDigits++;
            }
            if (countDigits >= 2) {
                return true;
            }
        }
        return false;
    }
}

passwordValidator('logIn');
console.log('-------------------------');
passwordValidator('MyPass123');
console.log('-------------------------');
passwordValidator('Pa$s$s');