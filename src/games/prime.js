import { generateNumber } from '../utils.js';

export const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function getRoundData() {
  const num = generateNumber(1, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
}
