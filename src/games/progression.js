import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const lenghtProgression = 10;

const createQuestion = (begin, step, length, hiddenElementIndex) => {
  let question = '';
  let newElement;
  for (let i = 0; i < length; i += 1) {
    if (i !== hiddenElementIndex) {
      newElement = begin + step * i;
    } else {
      newElement = '..';
    }
    question = i === 0 ? `${question}${newElement}` : `${question} ${newElement}`;
  }
  return question;
};

const createGameData = () => {
  const begin = getRandom(1, 10);
  const step = getRandom(1, 3);
  const hiddenElementIndex = getRandom(0, lenghtProgression - 1);
  const question = createQuestion(begin, step, lenghtProgression, hiddenElementIndex);
  const rightAnswer = `${begin + hiddenElementIndex * step}`;
  return cons(question, rightAnswer);
};

export default () => engine(description, createGameData);
