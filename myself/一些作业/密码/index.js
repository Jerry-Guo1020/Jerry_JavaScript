const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm"
    const upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const number = "1234567890"
    const symbolChars = "!@#$%^&*()_+"

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? number : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // console.log(allowedChars)


    if(length <= 0 ) {
        console.log("out");
        return `（密码至少要有6位）`
    }

    if(allowedChars.length === 0) {
        return`至少需要选择一种字符`
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password;
}



const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`密码生成${password}`);
