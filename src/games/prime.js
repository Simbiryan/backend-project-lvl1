import engine from '../engine';
import getRandomNumber from '../utils';

const isPrime = (n) => {
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

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionFunction = () => getRandomNumber(2, 50);
  const getRightAnswer = num => (isPrime(num) ? 'yes' : 'no');

  engine(description, questionFunction, getRightAnswer);
};
export default brainPrime;
