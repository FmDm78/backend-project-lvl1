import getRandomNum from '../utils.js';

export const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getParams() {
  const maxNum = 100;
  return getRandomNum(maxNum, 1);
}

function askQuestion(input) {
  return input;
}

function calcCorrectAnswer(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export function getRoundData() {
  const input = getParams();
  const question = askQuestion(input);
  const answer = calcCorrectAnswer(input);
  return { question, answer };
}
