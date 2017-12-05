/* global describe it */
const assert = require('assert');
const dayOne = require('../src/days/1');

describe('Day1', () => {
  describe('#calculatePin()', () => {
    it('1122 produces a sum of 3', () => {
      assert.equal(3, dayOne.calculatePin('1122'));
    });
    it('1111 produces a sum of 4', () => {
      assert.equal(4, dayOne.calculatePin('1111'));
    });
    it('1234 produces a sum of 0', () => {
      assert.equal(0, dayOne.calculatePin('1234'));
    });
    it('91212129 produces a sum of 9', () => {
      assert.equal(9, dayOne.calculatePin('91212129'));
    });
  });

  describe('#numberArray', () => {
    console.log('test this: numberArray()'); // eslint-disable-line
  });

  describe('#doubleNumberArray', () => {
    console.log('test this: doubleNumberArray()'); // eslint-disable-line
  });

  describe('#getIncrement', () => {
    console.log('test this: getIncrement()'); // eslint-disable-line
  });

  describe('#calculateIncrement', () => {
    console.log('test this: calculateIncrement()'); // eslint-disable-line
  });

  describe('#calculateNextNumber', () => {
    console.log('test this: calculateNextNumber()'); // eslint-disable-line
  });

  describe('#collectValues', () => {
    console.log('test this: collectValues()'); // eslint-disable-line
  });
});
