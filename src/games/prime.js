import getRandomNum from '../utils.js';

export const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isNumberPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function getRoundData() {
  const num = getRandomNum(100, 1);
  const question = `${num}`;
  const answer = isNumberPrime(num) ? 'yes' : 'no';
  return { question, answer };
}
