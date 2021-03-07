import {
  output,
  getUserAnswer,
}
  from './utils.js';

export const maxNum = 100;
export const maxNumMult = 10;

function sendFeedback(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    output('Correct!');
  } else {
    output(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    return false;
  }
  return true;
}

export function startGameIteration(setParams, askQuestion, calcCorrectAnswer) {
  const input = setParams();
  const userAnswer = getUserAnswer(askQuestion(input));
  const correctAnswer = calcCorrectAnswer(input);
  const isAnswercorrect = sendFeedback(userAnswer, correctAnswer);
  return isAnswercorrect;
}
