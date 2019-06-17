import engine from '../engine';
import { getRandomNumber } from '../utils';

const brainCalc = () => {
  const rules = 'What is the result of the expression?';

  let randomNum1;
  let randomNum2;
  let randomOperator;

  let result;
  let randomOperatorStr = '';

  const makeQuestionGetAnswer = (selector) => {
    if (selector === undefined) {
      randomNum1 = getRandomNumber(1, 10);
      randomNum2 = getRandomNumber(1, 10);
      randomOperator = getRandomNumber(1, 3);

      switch (randomOperator) {
        case 1:
          randomOperatorStr = '+';
          result = randomNum1 + randomNum2;
          break;
        case 2:
          randomOperatorStr = '-';
          result = randomNum1 - randomNum2;
          break;
        case 3:
          randomOperatorStr = '*';
          result = randomNum1 * randomNum2;
          break;
        default:
      }
      return `${randomNum1} ${randomOperatorStr} ${randomNum2}`;
    }
    return String(result);
  };
  engine(rules, makeQuestionGetAnswer, makeQuestionGetAnswer);
};
export default brainCalc;
