import {
  getRandomNum,
}
  from './utils.js';

import {
  maxNum,
  startGame,
}
  from './common.js';

export function taskDescriptiion() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

export function setParams() {
  return getRandomNum(maxNum, 1);
}

export function askQuestion(input) {
  return input;
}

export function calcCorrectAnswer(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function setGame() {
  return startGame(taskDescriptiion, setParams, askQuestion, calcCorrectAnswer);
}
