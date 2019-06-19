import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGsd = (x, y) => {
  if (y > x) return getGsd(y, x);
  if (!y) return x;
  return getGsd(y, x % y);
};

const gameData = () => {
  const randomNum1 = getRandomNum(1, 50);
  const randomNum2 = getRandomNum(1, 50);
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = `${getGsd(randomNum1, randomNum2)}`;
  return cons(question, rightAnswer);
};
export default () => engine(description, gameData);
