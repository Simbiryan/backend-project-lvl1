import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const createGameData = () => {
  const random1 = getRandom(1, 50);
  const random2 = getRandom(1, 50);
  const question = `${random1} ${random2}`;
  const rightAnswer = `${getGcd(random1, random2)}`;
  return cons(question, rightAnswer);
};
export default () => engine(description, createGameData);
