import {
  getRandomNum,
}
  from './utils.js';

import {
  maxNum,
  startGameIteration,
}
  from './common.js';

export function taskDescription() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

function setParams() {
  const input = getRandomNum(maxNum, 1);
  return input;
}

function askQuestion(input) {
  return input;
}

function calcCorrectAnswer(input) {
  return (input % 2 === 0) ? 'yes' : 'no';
}

export function setGame() {
  return startGameIteration(setParams, askQuestion, calcCorrectAnswer);
}
