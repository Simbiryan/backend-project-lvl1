import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const description = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = num => num % 2 === 0;

const gameData = () => {
  const randomNum = getRandomNum(1, 50);
  const question = `${randomNum}`;
  const rightAnswer = (isEven(randomNum) ? 'yes' : 'no');
  return cons(question, rightAnswer);
};
export default () => engine(description, gameData);
