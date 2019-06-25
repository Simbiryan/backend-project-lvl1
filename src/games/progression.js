import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const lenghtProgression = 10;


const createProgression = (begin, step, length, hidden) => {
  if (length === 0) return '';
  if (hidden === length) {
    return `.. ${createProgression(begin + step, step, length - 1, hidden)}`;
  }
  return `${begin} ${createProgression(begin + step, step, length - 1, hidden)}`;
};

const createGameData = () => {
  const begin = getRandom(1, 10);
  const step = getRandom(1, 3);
  const hidden = getRandom(1, lenghtProgression);
  return cons(createProgression(begin, step, lenghtProgression, hidden),
    `${(begin + ((lenghtProgression - hidden) * step))}`);
};

export default () => engine(description, createGameData);
