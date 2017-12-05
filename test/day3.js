/* global describe it */
const assert = require('assert');
const dayThree = require('../src/days/3');

describe('Day 3', () => {
  describe('#distance()', () => {
    it('Data from square 1 is carried 0 steps', () => {
      assert.equal(0, dayThree.findDistance(1));
    });

    it('Data from square 2 is carried 1 steps', () => {
      assert.equal(1, dayThree.findDistance(2));
    });

    it('Data from square 12 is carried 3 steps', () => {
      assert.equal(3, dayThree.findDistance(12));
    });

    it('Data from square 23 is carried only 2 steps', () => {
      assert.equal(2, dayThree.findDistance(23));
    });

    it('Data from square 1024 must be carried 31 steps', () => {
      assert.equal(31, dayThree.findDistance(1024));
    });
  });

  describe('#findCoordinates()', () => {
    console.log('test this: findCoordinates()'); // eslint-disable-line
  });

  describe('#findDistance()', () => {
    console.log('test this: findDistance()'); // eslint-disable-line
  });
});
