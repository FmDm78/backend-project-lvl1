#!/usr/bin/env node
import {
  getRandomNum,
  maxNum,
  startChallange,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function getParams() {
  const input = getRandomNum(maxNum, 1);
  return input;
}

function getQuestion(input) {
  return input;
}

function getCorrectAnswer(input) {
  return (input % 2 === 0) ? 'yes' : 'no';
}

startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
