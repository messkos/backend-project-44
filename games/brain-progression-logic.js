import {
  greetingUser, getRandomInt, askQuestion, congratsMessage, compareAnswers,
  getRandomIntInclusive,
} from '../src/index.js';

const generatArrOfNumbers = () => {
  const coll = [getRandomInt(20)];
  const increaser = getRandomIntInclusive(1, 5);
  for (let i = 0; i < getRandomIntInclusive(5, 10); i += 1) {
    coll.push(coll[i] + increaser);
  }
  return coll;
};
const getArrQuestion = (arr) => {
  const replacedNum = arr.splice(getRandomIntInclusive(1, arr.length - 1), 1, '..');
  const result = String(arr).replace(/,/g, ' ');
  return [result, replacedNum[0]];
};
const brainProgression = () => {
  const name = greetingUser();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const genesis = getArrQuestion(generatArrOfNumbers());
    const lineOfNumbers = genesis[0];
    const correctAnswer = genesis[1];
    const answer = askQuestion(lineOfNumbers);
    const result = compareAnswers(answer, correctAnswer, name);
    if (result === 'Correct!') {
      console.log(result);
    } else {
      break;
    }
    congratsMessage(name, i);
  }
};
export default brainProgression;
