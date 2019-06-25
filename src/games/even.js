import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = num => num % 2 === 0;

const createGameData = () => {
  const question = getRandom(1, 50);
  const rightAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, rightAnswer);
};
export default () => engine(description, createGameData);
