import engine from '../engine';
import { getRandomNumber } from '../utils';

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';

  let beginNumber;
  let differenceNumber;
  let indexOfHidenNumber;

  const makeProgressionWithHidden = (str, begin, difference, countNumbers, index) => {
    if (countNumbers === 0) return `${str} `;
    if (index === countNumbers) {
      return makeProgressionWithHidden(`${str} .. `, begin + difference, difference,
        countNumbers - 1, index);
    }
    return makeProgressionWithHidden(`${str} ${begin}`, begin + difference, difference,
      countNumbers - 1, index);
  };

  const makeQuestionGetAnswer = (selector) => {
    const countNumbers = 10;
    if (selector === undefined) {
      beginNumber = getRandomNumber(1, 10);
      differenceNumber = getRandomNumber(1, 3);
      indexOfHidenNumber = getRandomNumber(1, 10);
      return makeProgressionWithHidden('', beginNumber, differenceNumber, countNumbers, indexOfHidenNumber);
    }
    const rightAnswer = String(beginNumber + ((10 - indexOfHidenNumber) * differenceNumber));
    return rightAnswer;
  };
  engine(rules, makeQuestionGetAnswer, makeQuestionGetAnswer);
};
export default brainProgression;
