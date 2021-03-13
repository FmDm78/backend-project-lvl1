import getRandomNum from '../utils.js';

export const taskDescription = 'What is the result of the expression?';

const operators = '+-*';
const addition = 0;
const subtraction = 1;
const multiplication = 2;

function calcCorrectAnswer(operator, num1, num2) {
  let correctAnswer;
  switch (operator) {
    case addition:
      correctAnswer = num1 + num2;
      break;
    case subtraction:
      correctAnswer = num1 - num2;
      break;
    case multiplication:
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = undefined;
  }
  return String(correctAnswer);
}

export function getRoundData() {
  const operator = getRandomNum(operators.length, 0);
  const num1 = getRandomNum(10, 1);
  const num2 = getRandomNum(10, 1);
  const question = `${num1} ${operators[operator]} ${num2}`;
  const answer = calcCorrectAnswer(operator, num1, num2);
  return { question, answer };
}
