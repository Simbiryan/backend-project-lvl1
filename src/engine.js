import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfQuestion = 3;
const greeting = 'Welcome to the Brain Games!';

export default (description, getGameData) => {
  console.log(`${greeting}`);
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= countOfQuestion; i += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    if (i === countOfQuestion) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
