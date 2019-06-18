import readlineSync from 'readline-sync';

export default (description, getQuestion, getRightAnswer) => {
  const sayWelcome = (str = '') => console.log(`Welcome to the Brain Games!\n${str}\n`);
  const getUserNameSayHello = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    return userName;
  };
  const sayWrong = (userName, userAnswer, rightAnswer) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  };
  const sayRight = () => console.log('Correct!');
  const sayCongratulation = userName => console.log(`Congratulations, ${userName}!`);


  sayWelcome(description);
  const userName = getUserNameSayHello();

  const countOfQuestion = 3;
  for (let counter = 1; counter <= countOfQuestion; counter += 1) {
    const gameQuestion = getQuestion();
    console.log(`Question: ${String(gameQuestion)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = getRightAnswer(gameQuestion);
    if (rightAnswer === userAnswer) {
      sayRight();
      if (counter === 3) sayCongratulation(userName);
    } else {
      sayWrong(userName, userAnswer, rightAnswer);
      break;
    }
  }
};
