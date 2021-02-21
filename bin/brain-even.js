import {
  fHello,
  getRandomNum,
  getFeedback,
  getUserAnswerStr,
  cheerUser,
  excersizesNumber,
  maxNum,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function getParamsOdd() {
  const input = getRandomNum(maxNum, 1);
  return input;
}

function getQuestionOdd(input) {
  return String(input);
}

function getCorrectAnswerOdd(input) {
  return (input % 2 === 0) ? 'yes' : 'no';
}

function startOddChallange() {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  const playerName = fHello();
  taskDescriptiion();
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = getParamsOdd();
    userAnswer = getUserAnswerStr(getQuestionOdd(input));
    correctAnswer = getCorrectAnswerOdd(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer, playerName);
  }
  cheerUser(isAnswercorrect, playerName);
}

startOddChallange();
