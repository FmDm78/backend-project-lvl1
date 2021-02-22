import readlineSync from 'readline-sync';

export const excersizesNumber = 3;
export const maxNum = 100;
export const maxNumMult = 10;

export function fHello() {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  return name;
}

export function getFeedback(userAnswer, correctAnswer, playerName) {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"${correctAnswer}\"`); 
    return false;
  }
  return true;
}

export function getRandomNum(maxNum, offset) {
  return Math.floor((Math.random() * maxNum) + offset);
}

export function getUserAnswerStr(task) {
  return readlineSync.question(`Question:  ${task} \nYour answer: `);
}

export function getUserAnswerInt(task) {
  return readlineSync.questionInt(`Question:  ${task} \nYour answer: `);
}

export function cheerUser(isAnswercorrect, playerName) {
  if (isAnswercorrect) {
    console.log(`Congratulations, ${playerName} !`);
  } else {
    console.log(`Let\`s try again, ${playerName} !`);
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
    userAnswer = getUserAnswerStr(getQuestion(input));
    correctAnswer = getCorrectAnswer(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer, playerName);
  }
  cheerUser(isAnswercorrect, playerName);
}