import readlineSync from 'readline-sync';

export const sayWelcome = (str = '') => console.log(`Welcome to the Brain Games!\n${str}\n`);

export const getUserNameSayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const sayWrong = (userName, userAnswer, result) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
};

export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;
