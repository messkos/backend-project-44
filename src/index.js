import readlineSync from 'readline-sync';

const greetingUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    return name
}
const getRandomInt = (max) => {
    const randomInt = Math.floor(Math.random() * (max + 1));
    return randomInt;
}

const getCorrectAnswerEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
}
const askQuestion = (terms) => {
    return readlineSync.question(`Question: ${terms}\nYour answer:`);
}

export {greetingUser, getRandomInt, getCorrectAnswerEven, askQuestion}