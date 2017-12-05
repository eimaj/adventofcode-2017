/* global describe it */
const assert = require('assert');
const dayTwo = require('../src/days/2');

const partOneData = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
const partTwoData = [[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]];

describe('Day2', () => {
  describe('#checkSumPartOne()', () => {
    it(`${partOneData} produces a sum of 18`, () => {
      const pin = dayTwo.checkSumPartOne(partOneData);
      assert.equal(pin, 18);
    });
  });

  describe('#checkSumPartTwo()', () => {
    it(`${partTwoData} produces a sum of 9`, () => {
      const pin = dayTwo.checkSumPartTwo(partTwoData);
      assert.equal(pin, 9);
    });
  });

  describe('#sum()', () => {
    console.log('test this: sum()'); // eslint-disable-line
  });

  describe('#divide()', () => {
    console.log('test this: divide()'); // eslint-disable-line
  });

  describe('#diffMaxMin()', () => {
    console.log('test this: diffMaxMin()'); // eslint-disable-line
  });

  describe('#removeUndefined()', () => {
    console.log('test this: removeUndefined()'); // eslint-disable-line
  });

  describe('#flatten()', () => {
    console.log('test this: flatten()'); // eslint-disable-line
  });

  describe('#dividePairs()', () => {
    console.log('test this: dividePairs()'); // eslint-disable-line
  });

  describe('#findEvenlyDividedPairs()', () => {
    console.log('test this: findEvenlyDividedPairs()'); // eslint-disable-line
  });
});
