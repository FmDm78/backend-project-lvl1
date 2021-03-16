import getRandomNum from '../utils.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

function getGreatestCommonDivisor(num1, num2) {
  let a = Math.min(num1, num2);
  let b = Math.max(num1, num2);
  while (a > 0) {
    if (b === 0) return String(a);
    a %= b;
    if (a === 0) return String(b);
    b %= a;
  }
  return -1;
}

export function getRoundData() {
  const guaranteedCommonDivisor = getRandomNum(7, 2);
  const num1 = getRandomNum(10, 1) * guaranteedCommonDivisor;
  const num2 = getRandomNum(10, 1) * guaranteedCommonDivisor;
  const question = `${num1} ${num2}`;
  const answer = getGreatestCommonDivisor(num1, num2);
  return { question, answer };
}
