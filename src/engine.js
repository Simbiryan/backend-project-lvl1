import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfQuestion = 3;
const welcome = 'Welcome to the Brain Games! \n';

export default (description, getGameData) => {
  console.log(welcome);
  console.log(`${description}  \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let counter = 1; counter <= countOfQuestion; counter += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      if (counter === countOfQuestion) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
