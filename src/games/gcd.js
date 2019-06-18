import engine from '../engine';
import getRandomNumber from '../utils';

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  let randomNum1;
  let randomNum2;

  const getNod = (x, y) => {
    if (y > x) return getNod(y, x);
    if (!y) return x;
    return getNod(y, x % y);
  };

  const makeQuestionGetAnswer = (selector) => {
    if (selector === undefined) {
      randomNum1 = getRandomNumber(1, 10);
      randomNum2 = getRandomNumber(1, 10);
      return `${randomNum1} ${randomNum2}`;
    }
    const rightAnswer = String(getNod(randomNum1, randomNum2));
    return rightAnswer;
  };
  engine(description, makeQuestionGetAnswer, makeQuestionGetAnswer);
};
export default brainGcd;
