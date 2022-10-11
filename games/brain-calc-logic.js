import { greetingUser, getRandomInt, askQuestion } from '../src/index.js';


export function brainCalc() {
    const name = greetingUser();
    const signs = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomInt(100);
        const number2 = getRandomInt(100);
        const sign = signs[getRandomInt(2)];
        const expression = `${number1} ${sign} ${number2}`;
        const answer = askQuestion(expression);
        let correctAnswer = 0;
        switch (sign) {
            case '+':
                correctAnswer = number1 + number2;
                break;
            case '-':
                correctAnswer = number1 - number2;
                break;
            case '*':
                correctAnswer = number1 * number2;
                break;
        }
        if (answer === String(correctAnswer)) {
            console.log('Correct!');
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);
}

