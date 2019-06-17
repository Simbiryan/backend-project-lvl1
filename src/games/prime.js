import engine from '../engine';
import { getRandomNumber } from '../utils';


const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (n) => {
    if (n === 2) {
      return 'yes';
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'no';
      }
      i += 1;
    }
    return 'yes';
  };
  const questionFunction = () => getRandomNumber(2, 50);
  engine(rules, questionFunction, isPrime);
};
export default brainPrime;
