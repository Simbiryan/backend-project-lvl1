import readlineSync from 'readline-sync';
import {
  sayWelcome, getUserNameSayHello, sayWrong, getNOD, getRandomNumber,
} from './utils/utils';

export const brainEven = () => {
  sayWelcome('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserNameSayHello();
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = getRandomNumber(1, 50);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (result === userAnswer) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      sayWrong(userName, userAnswer, result);
      break;
    }
  }
};

export const brainCalc = () => {
  sayWelcome('What is the result of the expression?');
  const userName = getUserNameSayHello();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNum1 = getRandomNumber(1, 10);
    const randomNum2 = getRandomNumber(1, 10);
    let result = 0;
    const randomOperator = getRandomNumber(1, 3);
    let randomOperatorStr = '';
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
    console.log(`Question: ${randomNum1} ${randomOperatorStr} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result === Number(userAnswer)) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      sayWrong(userName, userAnswer, result);
      break;
    }
  }
};

export const brainGcd = () => {
  sayWelcome('Find the greatest common divisor of given numbers.');
  const userName = getUserNameSayHello();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNum1 = getRandomNumber(1, 47);
    const randomNum2 = getRandomNumber(1, 47);
    const result = getNOD(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result === Number(userAnswer)) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      sayWrong(userName, userAnswer, result);
      break;
    }
  }
};

export const brainProgression = () => {
  sayWelcome('What number is missing in the progression?');
  const userName = getUserNameSayHello();

  const makeProgressionWithHidden = (str, begin, difference, countNumbers, indexOfHidenNumber) => {
    if (countNumbers === 0) return `${str} `;
    if (indexOfHidenNumber === countNumbers) {
      return makeProgressionWithHidden(`${str} .. `, begin + difference, difference,
        countNumbers - 1, indexOfHidenNumber);
    }
    return makeProgressionWithHidden(`${str} ${begin}`, begin + difference, difference,
      countNumbers - 1, indexOfHidenNumber);
  };
  for (let counter = 1; counter <= 3; counter += 1) {
    const beginNumber = getRandomNumber(1, 10);
    const differenceNumber = getRandomNumber(1, 3);
    const indexOfHidenNumber = getRandomNumber(1, 10);
    const result = beginNumber + ((10 - indexOfHidenNumber) * differenceNumber);
    const questionStr = makeProgressionWithHidden('', beginNumber, differenceNumber, 10, indexOfHidenNumber);
    console.log(`Question: ${questionStr}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result === Number(userAnswer)) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      sayWrong(userName, userAnswer, result);
      break;
    }
  }
};
