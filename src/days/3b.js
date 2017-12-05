const dayThree = require('./3');


export default (total) => {
  const matrix = dayThree.buildMatrix(total);
  // nope.
};

// module.exports = (total) => {
//   const matrix = buildMatrix(total);
//
//   console.log(matrix);
//   const start = []
//   const coords = []
//
//   matrix.filter((row, i) => {
//     const tmpX = row.findIndex(item => item === total);
//     if (tmpX >= 0) {
//       coords.push(tmpX);
//       coords.push(i);
//       return true;
//     }
//     return false;
//   });
//
//   matrix.filter((row, i) => {
//     const tmpX = row.findIndex(item => item === 1);
//     if (tmpX >= 0) {
//       start.push(tmpX);
//       start.push(i);
//       return true;
//     }
//     return false;
//   });
//
//   // console.log('start', start);
//   // console.log('coords', coords);
//   const distX = start[0] - coords[0];
//   const distY = start[1] - coords[1];
//   const distance = [distX, distY].reduce((a, b) => {
//     const distA = a < 0 ? -a : a;
//     const distB = b < 0 ? -b : b;
//     return distA + distB;
//   });
//   return distance;
// };
//
//
// //
// // [5, 4, 3]
// // [6, 1, 2]
// // [6, 8, 9]
// //
// // [5, 4, 3, 6, 1, 2, 6, 8, 9]
