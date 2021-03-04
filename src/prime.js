import {
  getRandomNum,
  maxNum,
  output,
  startChallange,
}
  from './cli.js';

export function taskDescriptiion() {
  output('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export function getParams() {
  return getRandomNum(maxNum, 1);
}

export function getQuestion(input) {
  return input;
}

export function getCorrectAnswer(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export function executeChallange() {
  startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
}
