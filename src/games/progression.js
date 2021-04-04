import getRandomNum from '../utils.js';

export const taskDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function getQuestion(progression, hiddenElementIndex) {
  const projressionWithHiddenElement = [...progression];
  projressionWithHiddenElement[hiddenElementIndex] = '..';
  return projressionWithHiddenElement.join(' ');
}

export function getRoundData() {
  const start = getRandomNum(10, 1);
  const step = getRandomNum(10, 1);
  const hiddenElementIndex = getRandomNum(progressionLength, 0);
  const progression = Array.from({ length: progressionLength }, (_, i) => start + (i * step));
  const question = getQuestion(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);
  return { question, answer };
}
