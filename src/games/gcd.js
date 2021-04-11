import { generateNumber } from '../utils.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export function getRoundData() {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return { question, answer };
}
