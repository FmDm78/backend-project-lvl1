import getRandomNum from '../utils.js';

export function taskDescription() {
  return 'Find the greatest common divisor of given numbers.';
}

function setParams() {
  const maxNumMult = 10;    
  const input = [0, 0];
  let num1 = getRandomNum(maxNumMult, 1);
  let num2 = getRandomNum(maxNumMult, 1);
  const num3 = getRandomNum(maxNumMult, 1);
  num1 *= num3;
  num2 *= num3;
  input[0] = num1;
  input[1] = num2;
  return input;
}

function askQuestion(input) {
  const num1 = input[0];
  const num2 = input[1];
  return `${num1} ${num2}`;
}

function calcCorrectAnswer(input) {
  let a = Math.min(input[0], input[1]);
  let b = Math.max(input[0], input[1]);
  while (input.length > 0) {
    if (b === 0) return String(a);
    a %= b;
    if (a === 0) return String(b);
    b %= a;
  }
  return undefined;
}

export function setGame() { 
  const input = setParams();
  const question = askQuestion(input);
  const answer = calcCorrectAnswer(input); 
  return {question, answer}; 
}

