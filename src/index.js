import {
  fHello,
  cheerUser,
}
  from './utils.js';

import setCalc from './calc.js';
import setPrime from './prime.js';
import setEven from './even.js';
import setGcd from './gcd.js';
import setProgression from './progression.js';

export default function startChallange(gameToStart) {
  const playerName = fHello();
  let isAnswercorrect = true;
  switch (gameToStart) {
    case 'calc':
      isAnswercorrect = setCalc();
      break;
    case 'prime':
      isAnswercorrect = setPrime();
      break;
    case 'even':
      isAnswercorrect = setEven();
      break;
    case 'gcd':
      isAnswercorrect = setGcd();
      break;
    case 'progression':
      isAnswercorrect = setProgression();
      break;
    default:
      break;
  }
  cheerUser(isAnswercorrect, playerName);
}
