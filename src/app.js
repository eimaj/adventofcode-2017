import './styles.css';

const dayFour = require('./days/4');
const dayFourData = require('./data/4');

const dayThree = require('./days/3');

const dayTwo = require('./days/2');
const dayTwoData = require('./data/2');

const dayOne = require('./days/1');
const dayOneData = require('./data/1');

function component() {
  const element = document.createElement('div');
  let results = '';

  // console.warn('Day 4:'); // eslint-disable-line
  const day4PartOne = dayFour.wordValidityCount(dayFourData);
  const dayFourPartTwo = dayFour.anagramValidityCount(dayFourData);
  results += `<p><strong>Day 4:</strong> { partOne: ${day4PartOne}, partTwo: ${dayFourPartTwo} }</p><hr />`;

  // console.warn('Day 3:'); // eslint-disable-line
  const day3 = dayThree.findDistance(368078);
  results += `<p><strong>Day 3:</strong> { partOne: ${day3}, partTwo: ? }</p><hr />`;

  // console.warn('Day 2:'); // eslint-disable-line
  const partOne = dayTwo.checkSumPartOne(dayTwoData);
  const partTwo = dayTwo.checkSumPartTwo(dayTwoData);
  results += `<p><strong>Day 2:</strong> { partOne: ${partOne}, partTwo: ${partTwo} }</p><hr />`;

  // console.warn('Day 1:'); // eslint-disable-line
  const firstPin = dayOne.calculatePin(dayOneData);
  const secondPin = dayOne.calculatePin(dayOneData, 'halfway');
  results += `<p><strong>Day 1:</strong> { partOne: ${firstPin}, partTwo: ${secondPin} }</p><hr />`;

  element.innerHTML = results;
  return element;
}

document.body.appendChild(component());
