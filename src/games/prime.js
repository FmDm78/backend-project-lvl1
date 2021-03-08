import getRandomNum from '../utils.js';

export function taskDescription() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

function setParams() {
  const maxNum = 100;  
  return getRandomNum(maxNum, 1);
}

function askQuestion(input) {
  return input;
}

function calcCorrectAnswer(input) {
  for (let i = 2; i < input; i += 1) {
    if (input % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export function setGame() {  
  const input = setParams();
  const question = askQuestion(input);
  const answer = calcCorrectAnswer(input); 
  return {question, answer};  
}
