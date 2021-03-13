import readlineSync from 'readline-sync';

const roundsNumber = 3;

export default function startChallange(taskDescription, getRoundData) {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName} !`);
  console.log(taskDescription);
  for (let i = 1; i <= roundsNumber; i += 1) {
    const { question, answer } = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
}
