#!/usr/bin/env node
import {
  taskDescriptiion,
  getParams,
  getQuestion,
  getCorrectAnswer,
}
  from '../src/progression.js';

import {
  startChallange,
}
  from '../src/cli.js';

startChallange(taskDescriptiion, getParams, getQuestion, getCorrectAnswer);
