import readlineSync from 'readline-sync';

// const userName = readlineSync.question('May I have your name? ');

export const sayWelcome = (str = '') => console.log(`Welcome to the Brain Games!\n${str}\n`);

export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

const getRandomNumber = (min = -10, max = 10) => Math.round(Math.random() * (max - min)) + min;

export const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (result === userAnswer) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${userName}!`);
      break;
    }
  }
};

export const brainCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNum1 = getRandomNumber();
    const randomNum2 = getRandomNumber();
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
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (result === userAnswer) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};
