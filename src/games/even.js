import getRandomNum from '../utils.js';

export function taskDescription() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

function setParams() {
  const maxNum = 100;
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
  const input = setParams();
  const question = askQuestion(input);
  const answer = calcCorrectAnswer(input);
  return { question, answer };
}
