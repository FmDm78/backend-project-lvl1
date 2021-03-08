#!/usr/bin/env node

import readlineSync from 'readline-sync';

function output(strToScreen) {
  console.log(strToScreen);
}

output('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
output(`Hello, ${playerName} !`);
