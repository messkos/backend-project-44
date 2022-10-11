import {greetingUser, getRandomInt, getCorrectAnswerEven, askQuestion} from '../src/index.js'

export function brainEven() {
    const name = greetingUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomInt(100);
        const answer = askQuestion(randomNumber);
        const correctAnswer = getCorrectAnswerEven(randomNumber);
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);
}