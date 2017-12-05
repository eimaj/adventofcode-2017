// const dataUrl = 'http://adventofcode.com/2017/day/2/input';
const sum = (a, b) => a + b;

const divide = ([a, b]) => a / b;

const diffMaxMin = array => Math.max(...array) - Math.min(...array);

const removeUndefined = v => v || false;

const flatten = array => [].concat(...array);

const dividePairs = denominator => (value) => {
  if (value === denominator) { return false; }
  if ((value / denominator) % 1 !== 0) { return false; }
  return [value, denominator];
};

const findEvenlyDividedPairs = (value, i, row) => row.map(dividePairs(value));

const checkSumPartOne = dataArray => dataArray.map(diffMaxMin).reduce(sum);

const checkSumPartTwo = dataArray => dataArray.map(row =>
  flatten(flatten(row.map(findEvenlyDividedPairs))).filter(removeUndefined))
  .map(divide)
  .reduce(sum);

module.exports = {
  sum,
  divide,
  diffMaxMin,
  removeUndefined,
  flatten,
  dividePairs,
  findEvenlyDividedPairs,

  checkSumPartOne,
  checkSumPartTwo,
};
