import {
  getRandomNum,
  maxNum,
  startChallange,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function getParams() {
  return getRandomNum(maxNum, 1);
}

function getQuestion(input) {
  return String(input);
}

function getCorrectAnswer(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
