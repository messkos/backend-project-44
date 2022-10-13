import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};
const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * (max + 1));
  return randomInt;
};

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getCorrectAnswerEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const askQuestion = (terms) => readlineSync.question(`Question: ${terms}\nYour answer:`);

const compareAnswers = (answer, correctAnswer, name) => {
  if (answer === String(correctAnswer)) {
    return 'Correct!';
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
};

// eslint-disable-next-line consistent-return
const congratsMessage = (name, i) => {
  if (i === 2) { return console.log(`Congratulations, ${name}!`); }
};
export {
  greetingUser, getRandomInt, getRandomIntInclusive, getCorrectAnswerEven,
  askQuestion, compareAnswers, congratsMessage,
};
