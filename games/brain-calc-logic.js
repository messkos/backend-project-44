import { greetingUser, getRandomInt, askQuestion, compareAnswers, congratsMessage } from '../src/index.js';

export function brainCalc() {
    const name = greetingUser();
    const signs = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomInt(10);
        const number2 = getRandomInt(10);
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
        congratsMessage(name, i);
        if (compareAnswers(answer,correctAnswer, name) === 'Correct!') {
            continue;
        } else {
            break;
        }
    }
}

