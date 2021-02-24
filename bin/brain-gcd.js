#!/usr/bin/env node
import {
  getRandomNum,
  maxNumMult,
  startChallange,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('Find the greatest common divisor of given numbers.');
}

function getParams() {
  const input = [0, 0];
  let num1 = getRandomNum(maxNumMult, 1);
  let num2 = getRandomNum(maxNumMult, 1);
  let num3 = getRandomNum(maxNumMult, 1);
  num1 *= num3;
  num2 *= num3;
  input[0] = num1;
  input[1] = num2;
  return input;
}

function getQuestion(input) {
  const num1 = input[0];
  const num2 = input[1];
  return `${num1} ${num2}`;
}

function getCorrectAnswer(input) {
  const num1 = input[0];
  const num2 = input[1];
  let a;
  let b;
  if (num1 >= num2) {
    a = num1;
    b = num2;
  } else {
    b = num1;
    a = num2;    
  }
  while (input.length > 0) {
    if (b === 0) return String(a);
    a %= b;
    if (a === 0) return String(b);
    b %= a;
  }
  return undefined;
}

startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
