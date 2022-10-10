#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * 101);
    return randomInt;
}

const getCorrectAnswer = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
}
const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomInt();
        const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);
        const correctAnswer = getCorrectAnswer(randomNumber);
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);
}
brainEven();