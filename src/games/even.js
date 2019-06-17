import engine from '../engine';
import { getRandomNumber } from '../utils';

const brainEven = () => {
  const rules = ('Answer "yes" if number even otherwise answer "no".');
  const questionFunction = () => getRandomNumber(1, 50);
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  engine(rules, questionFunction, isEven);
};
export default brainEven;
