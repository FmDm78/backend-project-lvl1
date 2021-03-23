import getRandomNum from '../utils.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
}

export function getRoundData() {
  const num1 = getRandomNum(100, 1);
  const num2 = getRandomNum(100, 1);
  const question = `${num1} ${num2}`;
  const answer = String(getGCD(num1, num2));
  return { question, answer };
}
