import { getRandomNum } from '../utils.js';

export const taskDescription = 'What is the result of the expression?';

const operators = '+-*';

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

export function getRoundData() {
  const indexOperator = getRandomNum(operators.length, 0);
  const operator = operators[indexOperator];
  const num1 = getRandomNum(10, 1);
  const num2 = getRandomNum(10, 1);
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));
  return { question, answer };
}
