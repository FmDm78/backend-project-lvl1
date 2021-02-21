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
  console.log('Find the greatest common divisor of given numbers.');
}

function getParamsGcd() {
  const input = [0, 0];
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  num1 = getRandomNum(maxNumMult, 1);
  num2 = getRandomNum(maxNumMult, 1);
  num3 = getRandomNum(maxNumMult, 1);
  num1 *= num3;
  num2 *= num3;
  input[0] = num1;
  input[1] = num2;
  return input;
}

function getQuestionGcd(input) {
  const num1 = input[0];
  const num2 = input[1];
  return `${num1} ${num2}`;
}

function getCorrectAnswerGcd(input) {
  const num1 = input[0];
  const num2 = input[1];
  let a = num1;
  let b = num2;
  if (b > a) {
    a = num2;
    b = num1;
  }
  while (input.length > 0) {
    if (b === 0) return String(a);
    a %= b;
    if (a === 0) return String(b);
    b %= a;
  }
  return undefined;
}

function startGcdChallange() {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  const playerName = fHello();
  taskDescriptiion();
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = getParamsGcd();
    userAnswer = getUserAnswerStr(getQuestionGcd(input));
    correctAnswer = getCorrectAnswerGcd(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer, playerName);
  }
  cheerUser(isAnswercorrect, playerName);
}

startGcdChallange();
