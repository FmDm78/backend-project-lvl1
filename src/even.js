import {
  getRandomNum,
}
  from './utils.js';

import {
  maxNum,
  startGame,
}
  from './common.js';

function taskDescriptiion() {
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

export default function setGame() {
  return startGame(taskDescriptiion, setParams, askQuestion, calcCorrectAnswer);
}
