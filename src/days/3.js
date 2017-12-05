// source: https://rosettacode.org/wiki/Spiral_matrix#Imperative
const buildMatrix = (numberOfPoints) => {
  let edge = Math.ceil(Math.sqrt(numberOfPoints));
  let n = edge * edge;
  const arr = Array(edge);
  let x = 0;
  let y = edge;
  const total = edge * edge--;
  let dx = 1;
  let dy = 0;
  let i = 0;
  let j = 0;
  while (y) {
    arr[--y] = [];
  }
  while (i < total) {
    i++;
    arr[y][x] = n;
    n -= 1;
    x += dx;
    y += dy;
    if (++j === edge) {
      if (dy < 0) {
        x++;
        y++;
        edge -= 2;
      }
      j = dx;
      dx = -dy;
      dy = j;
      j = 0;
    }
  }
  return arr;
};

const findCoordinates = (matrix, target) => {
  const coords = [];

  matrix.filter((row, i) => {
    const tmpX = row.findIndex(item => item === target);
    if (tmpX >= 0) {
      coords.push(tmpX);
      coords.push(i);
      return true;
    }
    return false;
  });

  return coords;
};

const findDistance = (total) => {
  const matrix = buildMatrix(total);
  const startCoords = findCoordinates(matrix, 1);
  const endCoords = findCoordinates(matrix, total);

  // console.log('startCoords', startCoords);
  // console.log('coords', coords);
  const distanceX = startCoords[0] - endCoords[0];
  const distanceY = startCoords[1] - endCoords[1];
  const distance = [distanceX, distanceY].reduce((a, b) => {
    const distanceA = a < 0 ? -a : a;
    const distanceB = b < 0 ? -b : b;
    return distanceA + distanceB;
  });
  return distance;
};

module.exports = {
  buildMatrix,
  findCoordinates,
  findDistance,
};
