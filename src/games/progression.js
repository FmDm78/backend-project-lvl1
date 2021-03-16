import getRandomNum from '../utils.js';

export const taskDescription = 'What number is missing in the progression?';

const progressionLength = getRandomNum(5, 5);

function getQuestion(progression, missing) {
  let inputStr = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== missing) {
      inputStr = `${inputStr}${progression[i]} `;
    } else {
      inputStr = `${inputStr}.. `;
    }
  }
  return inputStr;
}

export function getRoundData() {
  const start = getRandomNum(10, 1);
  const step = getRandomNum(10, 1);
  const missing = getRandomNum(progressionLength, 0);
  const progression = Array.from({ length: progressionLength }, (_, i) => start + (i * step));
  const question = getQuestion(progression, missing);
  const answer = String(progression[missing]);
  return { question, answer };
}
