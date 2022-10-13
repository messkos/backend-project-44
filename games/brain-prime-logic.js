import {
    greetingUser, askQuestion, compareAnswers, congratsMessage,
    getRandomIntInclusive,
} from '../src/index.js';

const isPrimeNum = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    return num > 1;
};
const brainPrime = () => {
    const name = greetingUser();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const question = getRandomIntInclusive(1, 30);
        const answer = askQuestion(question);
        let correctAnswer = '';
        if (isPrimeNum(question)) {
            correctAnswer = 'yes';
        } else { correctAnswer = 'no'; }
        const result = compareAnswers(answer, correctAnswer, name);
        if (result === 'Correct!') {
            console.log(result);
        } else {
            break;
        }
        congratsMessage(name, i);
    }
};
export { brainPrime };
