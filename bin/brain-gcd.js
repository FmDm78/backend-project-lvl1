#!/usr/bin/env node

import executeChallange from '../src/index.js';

import {
  setGame,
  taskDescription,
}
  from '../src/gcd.js';

executeChallange(taskDescription, setGame);
