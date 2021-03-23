import getRandomNum from '../utils.js';

export const taskDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function getQuestion(progression, hiddenNumberIndex) {
  const inputStr = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== hiddenNumberIndex) {
      inputStr.push(progression[i]);
    } else {
      inputStr.push('..');
    }
  }
  return inputStr.join(' ');
}

export function getRoundData() {
  const start = getRandomNum(10, 1);
  const step = getRandomNum(10, 1);
  const hiddenNumberIndex = getRandomNum(progressionLength, 0);
  const progression = Array.from({ length: progressionLength }, (_, i) => start + (i * step));
  const question = getQuestion(progression, hiddenNumberIndex);
  const answer = String(progression[hiddenNumberIndex]);
  return { question, answer };
}
