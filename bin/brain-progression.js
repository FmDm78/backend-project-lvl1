#!/usr/bin/env node

import executeChallange from '../src/index.js';

import {
  setGame,
  taskDescription,
}
  from '../src/games/progression.js';

executeChallange(taskDescription, setGame);
