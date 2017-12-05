const filterDuplicateWords = wordCounts =>
  Object.keys(wordCounts).filter(key => wordCounts[key] <= 1);

const countWords = wordArray => wordArray.reduce((counts, word) => {
  const newTotal = counts;
  if (!Object.prototype.hasOwnProperty.call(counts, word)) {
    newTotal[word] = 0;
  }

  newTotal[word] += 1;
  return newTotal;
}, {});

const isPhraseValid = (phraseArray) => {
  const anagramCounts = countWords(phraseArray);
  const uniqAnagramArray = filterDuplicateWords(anagramCounts);
  return uniqAnagramArray.length === phraseArray.length;
};

const isAnagramPhraseValid = (phrase) => {
  const anagramArray = phrase.split(' ').map(word => word.split('').sort().join(''));
  return isPhraseValid(anagramArray);
};

const isWordPhraseValid = (phrase) => {
  const wordArray = phrase.split(' ');
  return isPhraseValid(wordArray);
};

const filterAndCount = phraseValidityArray =>
  phraseValidityArray.filter(value => value === true).length;

const wordValidityCount = phrases =>
  filterAndCount(phrases.map(isWordPhraseValid));

const anagramValidityCount = phrases =>
  filterAndCount(phrases.map(isAnagramPhraseValid));

module.exports = {
  filterDuplicateWords,
  countWords,
  isPhraseValid,
  filterAndCount,

  isAnagramPhraseValid,
  isWordPhraseValid,

  wordValidityCount,
  anagramValidityCount,
};
