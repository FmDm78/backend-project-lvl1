import getRandomNum from '../utils.js';

export const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function isNumberEven(input) {
  return (input % 2 === 0);
}

export function getRoundData() {
  const num = getRandomNum(100, 1);
  const question = `${num}`;
  const answer = isNumberEven(num) ? 'yes' : 'no';
  return { question, answer };
}
