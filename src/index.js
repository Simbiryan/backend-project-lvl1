import readlineSync from 'readline-sync';

// const userName = readlineSync.question('May I have your name? ');

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const startGameEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const startQUIZ = () => {
  const userName = readlineSync.question('May I have your name? ');
  const getRandomNumber = (min = -10, max = 10) => Math.floor(Math.random() * (max - min)) + min;
  const isEven = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEven(randomNumber) === userAnswer) {
      console.log('Correct!');
      if (counter === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      break;
    }
  }
};
