import {
  getRandomNum,
  maxNum,
  output,
}
  from './cli.js';

export function taskDescriptiion() {
  output('Answer "yes" if the number is even, otherwise answer "no".');
}

export function getParams() {
  const input = getRandomNum(maxNum, 1);
  return input;
}

export function getQuestion(input) {
  return input;
}

export function getCorrectAnswer(input) {
  return (input % 2 === 0) ? 'yes' : 'no';
}
