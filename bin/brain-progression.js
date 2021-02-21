import {
  fHello,
  getRandomNum,
  getFeedback,
  getUserAnswerStr,
  cheerUser,
  excersizesNumber,
  maxNumMult,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('What number is missing in the progression?');
}

function getParamsProgression() {
  const input = [0, 0, 0, 0];
  let start = 0;
  let increase = 0;
  let length = 0;
  let missing = 0;
  start = getRandomNum(maxNumMult, 1);
  increase = getRandomNum(maxNumMult, 1);
  length = getRandomNum(5, 5);
  missing = getRandomNum(length, 0);
  input[0] = start;
  input[1] = increase;
  input[2] = length;
  input[3] = missing;
  return input;
}

function getQuestionProgression(input) {
  let inputStr = '';
  const start = input[0];
  const increase = input[1];
  const length = input[2];
  const missing = input[3];
  for (let i = 0; i < length; i += 1) {
    if (i !== missing) {
      inputStr = `${inputStr}${start + (increase * i)} `;
    } else {
      inputStr = `${inputStr}.. `;
    }
  }
  return inputStr;
}

function getCorrectAnswerProgression(input) {
  const start = input[0];
  const increase = input[1];
  const missing = input[3];
  const correctAnswer = start + (increase * missing);
  return String(correctAnswer);
}

function startProgressionChallange() {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  const playerName = fHello();
  taskDescriptiion();
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = getParamsProgression();
    userAnswer = getUserAnswerStr(getQuestionProgression(input));
    correctAnswer = getCorrectAnswerProgression(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer, playerName);
  }
  cheerUser(isAnswercorrect, playerName);
}

startProgressionChallange();
