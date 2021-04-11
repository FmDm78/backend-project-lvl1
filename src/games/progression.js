import { generateNumber } from '../utils.js';

export const taskDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function getQuestion(progression, hiddenElementIndex) {
  const progressionWithHiddenElement = [...progression];
  progressionWithHiddenElement[hiddenElementIndex] = '..';
  return progressionWithHiddenElement.join(' ');
}

export function getRoundData() {
  const start = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const hiddenElementIndex = generateNumber(0, progressionLength - 1);
  const progression = Array.from({ length: progressionLength }, (_, i) => start + (i * step));
  const question = getQuestion(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);
  return { question, answer };
}
