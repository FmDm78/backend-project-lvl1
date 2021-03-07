import {
  fHello,
  cheerUser,
  output,
}
  from './utils.js';

const excersizesNumber = 3;

export default function startChallange(taskDescription, startGameIteration) {
  let isAnswercorrect = true;
  const playerName = fHello();
  output(taskDescription());
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    isAnswercorrect = startGameIteration();
  }
  cheerUser(isAnswercorrect, playerName);
}
