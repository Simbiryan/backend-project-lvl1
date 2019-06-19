import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';
const lenghtProgression = 10;

const makeProgressionWithHidden = (str, begin, difference, countNumbers, index) => {
  if (countNumbers === 0) return `${str} `;
  if (index === countNumbers) {
    return makeProgressionWithHidden(`${str} .. `, begin + difference, difference,
      countNumbers - 1, index);
  }
  return makeProgressionWithHidden(`${str} ${begin}`, begin + difference, difference,
    countNumbers - 1, index);
};

const gameData = () => {
  const begin = getRandomNum(1, 10);
  const difference = getRandomNum(1, 3);
  const indexOfHiden = getRandomNum(1, lenghtProgression);
  return cons(makeProgressionWithHidden('', begin, difference, lenghtProgression, indexOfHiden),
    `${(begin + ((lenghtProgression - indexOfHiden) * difference))}`);
};
export default () => engine(description, gameData);
