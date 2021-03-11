#!/usr/bin/env node

import executeChallange from '../src/index.js';

import {
  getRoundData,
  taskDescription,
}
  from '../src/games/even.js';

executeChallange(taskDescription, getRoundData);
