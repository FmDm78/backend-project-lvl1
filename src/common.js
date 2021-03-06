import {
  output,
  getUserAnswer,
}
  from './utils.js';

export const maxNum = 100;
export const maxNumMult = 10;

const excersizesNumber = 3;

function sendFeedback(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    output('Correct!');
  } else {
    output(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    return false;
  }
  return true;
}

export function startGame(taskDescriptiion, setParams, askQuestion, calcCorrectAnswer) {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  output(taskDescriptiion());
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = setParams();
    userAnswer = getUserAnswer(askQuestion(input));
    correctAnswer = calcCorrectAnswer(input);
    isAnswercorrect = sendFeedback(userAnswer, correctAnswer);
  }
  return isAnswercorrect;
}
