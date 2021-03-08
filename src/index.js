import readlineSync from 'readline-sync';

const excersizesNumber = 3;

function output(strToScreen) {
  console.log(strToScreen);
}

export default function startChallange(taskDescription, setGame) {
  let isAnswercorrect = true;
  output('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  output(`Hello, ${playerName} !`);
  output(taskDescription());
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    let gameIteration = setGame();    
    output(`Question: ${gameIteration.question}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameIteration.answer) {
      output('Correct!');
    } else {
      output(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameIteration.answer}"`);
      isAnswercorrect = false;
    }
  }
  if (isAnswercorrect) {
    output(`Congratulations, ${playerName}!`);
  } else {
    output(`Let's try again, ${playerName}!`);
  }
}
