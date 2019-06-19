import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const gameData = () => {
  const randomNum1 = getRandomNum(0, 9);
  const randomNum2 = getRandomNum(0, 9);
  const operator = getRandomNum(1, 3);
  switch (operator) {
    case 1: {
      return cons(`${randomNum1} + ${randomNum2}`, `${randomNum1 + randomNum2}`);
    }
    case 2: {
      return cons(`${randomNum1} - ${randomNum2}`, `${randomNum1 - randomNum2}`);
    }
    default: {
      return cons(`${randomNum1} * ${randomNum2}`, `${randomNum1 * randomNum2}`);
    }
  }
};
export default () => engine(description, gameData);
