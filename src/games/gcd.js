import getRandomNum from '../utils.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export function getRoundData() {
  const num1 = getRandomNum(100, 1);
  const num2 = getRandomNum(100, 1);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return { question, answer };
}
