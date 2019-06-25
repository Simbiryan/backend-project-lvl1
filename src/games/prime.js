import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  if (n <= 1) {
    return true;
  }
  if (n === 2) {
    return true;
  }
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const createGameData = () => {
  const question = getRandom(1, 20);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export default () => engine(description, createGameData);
