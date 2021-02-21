import {
  fHello,
  getRandomNum,
  getFeedback,
  getUserAnswerStr,
  cheerUser,
  excersizesNumber,
  maxNum,
}
  from '../src/cli.js';

function taskDescriptiion() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function getParamsPrime() {
  return getRandomNum(maxNum, 1);
}

function getQuestionPrime(input) {
  return String(input);
}

function getCorrectAnswerPrime(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function startPrimeChallange() {
  let input;
  let userAnswer;
  let correctAnswer;
  let isAnswercorrect = true;
  const playerName = fHello();
  taskDescriptiion();
  for (let i = 1; (i <= excersizesNumber) && isAnswercorrect; i += 1) {
    input = getParamsPrime();
    userAnswer = getUserAnswerStr(getQuestionPrime(input));
    correctAnswer = getCorrectAnswerPrime(input);
    isAnswercorrect = getFeedback(userAnswer, correctAnswer, playerName);
  }
  cheerUser(isAnswercorrect, playerName);
}

startPrimeChallange();
