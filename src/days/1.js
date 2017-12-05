const numberArray = integer =>
  `${integer}`.split('').map(number => parseInt(number, 10));

const doubleNumberArray = string =>
  numberArray(string).concat(numberArray(string));

const getIncrement = (a, b) => {
  if (a === b) { return a; }
  return 0;
};

const calculateIncrement = (string, step) => {
  if (step === 'halfway') { return numberArray(string).length / 2; }
  return 1;
};

const calculateNextNumber = (string, index) => {
  const nextNumber = doubleNumberArray(string)[index];
  if (!nextNumber) { return numberArray(string)[0]; }
  return nextNumber;
};

const collectValues = (string, step) => numberArray(string).map((number, i) => {
  const nextNumber = calculateNextNumber(string, i + step);
  return getIncrement(number, nextNumber);
});

const calculatePin = (string, step = null) => {
  const increment = calculateIncrement(string, step);
  const result = collectValues(string, increment).reduce((a, b) => a + b);

  // console.log('result: ', result);
  return result;
};

module.exports = {
  numberArray,
  doubleNumberArray,
  getIncrement,
  calculateIncrement,
  calculateNextNumber,
  collectValues,
  calculatePin,
};
