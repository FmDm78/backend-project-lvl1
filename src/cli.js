import readlineSync from 'readline-sync';

export const excersizesNumber = 3;
export const maxNum = 100;
export const maxNumMult = 10;

export function output(strToScreen) {
  console.log(strToScreen);
}

export function fHello() {
  output('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  output(`Hello, ${name} !`);
  return name;
}

export function getFeedback(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    output('Correct!');
  } else {
    output(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    return false;
  }
  return true;
}

export function getRandomNum(aMaxNum, offset) {
  return Math.floor((Math.random() * aMaxNum) + offset);
}

export function getUserAnswer(task) {
  return readlineSync.question(`Question: ${task} \nYour answer: `);
}

export function cheerUser(isAnswercorrect, playerName) {
  if (isAnswercorrect) {
    output(`Congratulations, ${playerName}!`);
  } else {
    output(`Let's try again, ${playerName}!`);
  }
  return 0;
}

export function startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer) {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  const playerName = fHello();
  taskDescriptiion();
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = getParams();
    userAnswer = getUserAnswer(getQuestion(input));
    correctAnswer = getCorrectAnswer(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer);
  }
  cheerUser(isAnswercorrect, playerName);
}
