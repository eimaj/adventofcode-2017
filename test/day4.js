/* global describe it */
const assert = require('assert');
const dayFour = require('../src/days/4');
const dayFourData = require('../src/data/4');

const testArray = ['aa bb cc dd ee', 'aa bb cc dd aa', 'aa bb cc dd aaa', 'act cat dog bear'];

describe('Day 4', () => {
  describe('#isWordPhraseValid()', () => {
    it('should determine id the password is valid', () => {
      assert.equal(true, dayFour.isWordPhraseValid(testArray[0]));
      assert.equal(false, dayFour.isWordPhraseValid(testArray[1]));
      assert.equal(true, dayFour.isWordPhraseValid(testArray[2]));
      assert.equal(true, dayFour.isWordPhraseValid(testArray[3]));
    });
  });

  describe('#wordValidityCount()', () => {
    it('should count the number of valid passwords', () => {
      assert.equal(3, dayFour.wordValidityCount(testArray));

      // The correct answer:
      assert.equal(451, dayFour.wordValidityCount(dayFourData));
    });
  });

  describe('#isAnagramPhraseValid()', () => {
    it('should determine id the password is valid', () => {
      assert.equal(true, dayFour.isAnagramPhraseValid(testArray[0]));
      assert.equal(false, dayFour.isAnagramPhraseValid(testArray[1]));
      assert.equal(true, dayFour.isAnagramPhraseValid(testArray[2]));
      assert.equal(false, dayFour.isAnagramPhraseValid(testArray[3]));
    });
  });

  describe('#anagramValidityCount()', () => {
    it('should count the number of valid passwords', () => {
      assert.equal(2, dayFour.anagramValidityCount(testArray));

      // The correct answer:
      assert.equal(223, dayFour.anagramValidityCount(dayFourData));
    });
  });

  describe('#filterDuplicateWords()', () => {
    console.log('test this: filterDuplicateWords()'); // eslint-disable-line
  });

  describe('#countWords()', () => {
    console.log('test this: countWords()'); // eslint-disable-line
  });

  describe('#isPhraseValid()', () => {
    console.log('test this: isPhraseValid()'); // eslint-disable-line
  });

  describe('#filterAndCount()', () => {
    console.log('test this: filterAndCount()'); // eslint-disable-line
  });
});
