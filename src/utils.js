/* eslint-disable import/prefer-default-export */

export function generateNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
