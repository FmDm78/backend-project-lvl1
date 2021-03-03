import {
  getRandomNum,
  maxNum,
  maxNumMult,
  output,
}
  from './cli.js';

export function taskDescriptiion() {
  output('What is the result of the expression?');
}

export function getParams() {
  const input = [0, 0, 0];
  const numberOpers = 3; // 0 = '+', 1 = '-', 2 = '*', 3 = '/',
  let num1 = 0;
  let num2 = 0;
  let oper = 0;
  oper = getRandomNum(numberOpers, 0);
  if (oper <= 1) {
    num1 = getRandomNum(maxNum, 1);
    num2 = getRandomNum(maxNum, 1);
  } else {
    num1 = getRandomNum(maxNumMult, 1);
    num2 = getRandomNum(maxNumMult, 1);
  }
  if (oper === 3) {
    num1 *= num2;// let`s make (num1 * num2) / num2 === num1
  }
  input[0] = oper;
  input[1] = num1;
  input[2] = num2;
  return input;
}

export function getQuestion(input) {
  let operStr = '';
  const oper = input[0];
  const num1 = input[1];
  const num2 = input[2];
  switch (oper) {
    case 0:
      operStr = '+';
      break;
    case 1:
      operStr = '-';
      break;
    case 2:
      operStr = '*';
      break;
    case 3:
      operStr = '/';
      break;
    default:
      operStr = '';
  }
  return `${num1} ${operStr} ${num2}`;
}

export function getCorrectAnswer(input) {
  const oper = input[0];
  const num1 = input[1];
  const num2 = input[2];
  let correctAnswer;
  switch (oper) {
    case 0:
      correctAnswer = num1 + num2;
      break;
    case 1:
      correctAnswer = num1 - num2;
      break;
    case 2:
      correctAnswer = num1 * num2;
      break;
    case 3:
      correctAnswer = num1 / num2;
      break;
    default:
      correctAnswer = undefined;
  }
  return String(correctAnswer);
}
