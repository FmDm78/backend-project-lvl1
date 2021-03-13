import getRandomNum from '../utils.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

function calcCorrectAnswer(num1, num2) {
  let a = Math.min(num1, num2);
  let b = Math.max(num1, num2);
  while (a > 0) {
    if (b === 0) return String(a);
    a %= b;
    if (a === 0) return String(b);
    b %= a;
  }
  return undefined;
}

export function getRoundData() {
  const divider = getRandomNum(7, 2);
  const num1 = getRandomNum(10, 1) * divider;
  const num2 = getRandomNum(10, 1) * divider;
  const question = `${num1} ${num2}`;
  const answer = calcCorrectAnswer(num1, num2);
  return { question, answer };
}
