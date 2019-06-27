import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';

const createGameData = () => {
  const random1 = getRandom(0, 9);
  const random2 = getRandom(0, 9);
  const random = operators[getRandom(0, operators.length - 1)];
  const question = `${random1} ${random} ${random2}`;
  let rightAnswer;
  switch (random) {
    case '+': {
      rightAnswer = `${random1 + random2}`;
      break;
    }
    case '-': {
      rightAnswer = `${random1 - random2}`;
      break;
    }
    case '*': {
      rightAnswer = `${random1 * random2}`;
      break;
    }
    default: {
      return null;
    }
  }
  return cons(question, rightAnswer);
};
export default () => engine(description, createGameData);
