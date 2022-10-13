import {
  greetingUser, getRandomInt, getCorrectAnswerEven, askQuestion, congratsMessage, compareAnswers,
}
  from '../src/index.js';

const brainEven = () => {
  const name = greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(100);
    const answer = askQuestion(randomNumber);
    const correctAnswer = getCorrectAnswerEven(randomNumber);
    const result = compareAnswers(answer, correctAnswer, name);
    if (result === 'Correct!') {
      console.log(result);
    } else {
      break;
    }
    congratsMessage(name, i);
  }
};

export default brainEven;
