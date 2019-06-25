import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';

const createGameData = () => {
  const random1 = getRandom(0, 9);
  const random2 = getRandom(0, 9);
  const random = getRandom(0, operators.length - 1);
  switch (random) {
    case 0: {
      return cons(`${random1} ${operators[random]} ${random2}`, `${random1 + random2}`);
    }
    case 1: {
      return cons(`${random1} ${operators[random]} ${random2}`, `${random1 - random2}`);
    }
    default: {
      return cons(`${random1} ${operators[random]} ${random2}`, `${random1 * random2}`);
    }
  }
};
export default () => engine(description, createGameData);
