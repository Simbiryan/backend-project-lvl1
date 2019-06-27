import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const lenghtProgression = 10;

const createQuestion = (begin, step, length, hiddenElementIndex) => {
  let question = '';
  let newElement = begin;
  for (let i = 0; i <= length; i += 1) {
    if (i !== hiddenElementIndex) {
      question = `${question} ${newElement}`;
    } else {
      question = `${question} .. `;
    }
    newElement += step;
  }
  return question;
};

const createGameData = () => {
  const begin = getRandom(1, 10);
  const step = getRandom(1, 3);
  const hiddenElementIndex = getRandom(1, lenghtProgression);
  const question = createQuestion(begin, step, lenghtProgression, hiddenElementIndex);
  const rightAnswer = `${begin + hiddenElementIndex * step}`;
  return cons(question, rightAnswer);
};

export default () => engine(description, createGameData);
