import readlineSync from 'readline-sync';

export function output(strToScreen) {
  console.log(strToScreen);
}

export function getRandomNum(aMaxNum, offset) {
  return Math.floor((Math.random() * aMaxNum) + offset);
}

export function getUserAnswer(task) {
  return readlineSync.question(`Question: ${task} \nYour answer: `);
}

export function fHello() {
  output('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  output(`Hello, ${name} !`);
  return name;
}

export function cheerUser(isAnswercorrect, playerName) {
  if (isAnswercorrect) {
    output(`Congratulations, ${playerName}!`);
  } else {
    output(`Let's try again, ${playerName}!`);
  }
  return 0;
}
