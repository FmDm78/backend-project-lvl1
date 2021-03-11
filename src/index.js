import readlineSync from 'readline-sync';

const roundsNumber = 3;

export default function startChallange(taskDescription, getRoundData) {
  let isAnswercorrect = true;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName} !`);
  console.log(taskDescription);
  for (let i = 1; (i <= roundsNumber); i += 1) {
    const { question, answer } = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      isAnswercorrect = false;
      break;
    }
  }
  if (isAnswercorrect) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
}
