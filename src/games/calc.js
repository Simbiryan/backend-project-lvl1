import engine from '../engine';
import getRandomNumber from '../utils';

const brainCalc = () => {
  const description = 'What is the result of the expression?';

  let randomNum1;
  let randomNum2;
  let randomOperator;

  let rightAnswer;
  let randomOperatorForQuestion = '';

  const countOfOperator = 3;

  const makeQuestionGetAnswer = (selector) => {
    if (selector === undefined) {
      randomNum1 = getRandomNumber(1, 10);
      randomNum2 = getRandomNumber(1, 10);
      randomOperator = getRandomNumber(1, countOfOperator);

      switch (randomOperator) {
        case 1:
          randomOperatorForQuestion = '+';
          rightAnswer = randomNum1 + randomNum2;
          break;
        case 2:
          randomOperatorForQuestion = '-';
          rightAnswer = randomNum1 - randomNum2;
          break;
        case 3:
          randomOperatorForQuestion = '*';
          rightAnswer = randomNum1 * randomNum2;
          break;
        default:
      }
      return `${randomNum1} ${randomOperatorForQuestion} ${randomNum2}`;
    }
    return String(rightAnswer);
  };
  engine(description, makeQuestionGetAnswer, makeQuestionGetAnswer);
};
export default brainCalc;
