import engine from '../engine';
import getRandomNumber from '../utils';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const brainEven = () => {
  const description = ("Answer 'yes' if number even otherwise answer 'no'.");
  const questionFunction = () => getRandomNumber(1, 50);

  const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

  engine(description, questionFunction, getRightAnswer);
};
export default brainEven;
