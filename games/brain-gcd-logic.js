import { greetingUser, getRandomInt, askQuestion, congratsMessage, compareAnswers } from '../src/index.js';

const NOD = (x, y) => {
    if (y > x) {
        return NOD(y, x);
    }
    if (!y) {
        return x;
    }
    return NOD(y, x % y);
}
export function brainGcd() {
    const name = greetingUser();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomInt(10);
        const number2 = getRandomInt(10);
        const answer = askQuestion(`${number1} ${number2}`);
        const correctAnswer = NOD(number1, number2);
        congratsMessage(name, i);
        if (compareAnswers(answer,correctAnswer, name) === 'Correct!') {
            continue;
        } else {
            break;
        }
    }
}