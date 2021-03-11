#!/usr/bin/env node

import executeChallange from '../src/index.js';

import {
  getRoundData,
  taskDescription,
}
  from '../src/games/prime.js';

executeChallange(taskDescription, getRoundData);
