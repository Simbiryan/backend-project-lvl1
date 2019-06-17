import readlineSync from 'readline-sync';
import {
  sayWelcome, getUserNameSayHello, sayWrong, sayRight, sayCongra,
} from './utils';

export default (rules, questionFunction, checkFunction) => {
  sayWelcome(rules);
  const userName = getUserNameSayHello();

  for (let counter = 1; counter <= 3; counter += 1) {
    const gameQuestion = questionFunction();
    console.log(`Question: ${String(gameQuestion)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = checkFunction(gameQuestion);
    if (rightAnswer === userAnswer) {
      sayRight();
      if (counter === 3) sayCongra(userName);
    } else {
      sayWrong(userName, userAnswer, rightAnswer);
      break;
    }
  }
};
