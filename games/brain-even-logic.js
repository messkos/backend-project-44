import {greetingUser, getRandomInt, getCorrectAnswerEven, askQuestion, congratsMessage, compareAnswers} from '../src/index.js'

export function brainEven() {
    const name = greetingUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomInt(100);
        const answer = askQuestion(randomNumber);
        const correctAnswer = getCorrectAnswerEven(randomNumber);
        let result = compareAnswers(answer,correctAnswer, name);
        if ( result === 'Correct!') {
            console.log(result);
        } else {
            break;
        }
        congratsMessage(name, i);
    }
}