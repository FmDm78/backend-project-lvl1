#!/usr/bin/env node
import {
  getRandomNum,
  maxNumMult,
  startChallange,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('What number is missing in the progression?');
}

function getParams() {
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

function getQuestion(input) {
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

function getCorrectAnswer(input) {
  const start = input[0];
  const increase = input[1];
  const missing = input[3];
  const correctAnswer = start + (increase * missing);
  return String(correctAnswer);
}

startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
