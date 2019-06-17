import engine from '../engine';
import { getRandomNumber } from '../utils';

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  let randomNum1;
  let randomNum2;

  const getNOD = (x, y) => {
    if (y > x) return getNOD(y, x);
    if (!y) return x;
    return getNOD(y, x % y);
  };

  const makeQuestionGetAnswer = (selector) => {
    if (selector === undefined) {
      randomNum1 = getRandomNumber(1, 10);
      randomNum2 = getRandomNumber(1, 10);
      return `${randomNum1} ${randomNum2}`;
    }
    const rightAnswer = String(getNOD(randomNum1, randomNum2));
    return rightAnswer;
  };
  engine(rules, makeQuestionGetAnswer, makeQuestionGetAnswer);
};
export default brainGcd;
