// Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]





// Debugging consols.logs()
// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function(matrix) {
// 	// Edge Case: If matrix is empty
// 	if (matrix.length === 0) {
// 			return matrix;
// 	}
	
// 	const solution = [];
// 	// for (let i = 0; i < matrix.length; i++) {
// 	//     for (let j = 0; j < matrix[i].length; j++) {
// 	//         if (j === matrix[i].length -1) {
// 	//             break;
// 	//         }
// 	//         solution.push(i);
// 	//     }
// 	// }
	
// 	let xMin = 0;
// 	let xMax = matrix[0].length - 1;
// 	let x = 0;
// 	let yMin = 0;
// 	let yMax = matrix.length - 1;;
// 	let y = 0;
// 	const matrixArea = matrix[0].length * matrix.length;
// 	// const matrixLength = (matrix.reduce( (acc, array) => {
// 	//     return acc += array.length;
// 	// }, 0));
// 	// console.log(matrixLength, 'matrixLength');
	
	
// 	// Edge Case: Matrix contains empty arrays
// 	if (matrixArea === 0) {
// 			return [];
// 	}
			
// 	const iterateForward = (arrayIndex, xMin, xMax) => {
// 			console.log('Entering iterateForward');
// 			for (let k = xMin; k <= xMax; k++) {
// 					solution.push(matrix[arrayIndex][k]);
// 			}
// 			yMin = yMin < yMax ? yMin + 1 : yMax;
// 			// x = xMax - 1;
// 			x = xMax;
// 			// y = y > yMin ? arrayIndex - 1 : yMax;
// 			y = yMin;
// 			console.log(`xMax: ${xMax}, xMin: ${xMin}, x: ${x},
// 			yMax: ${yMax}, yMin: ${yMin}, y: ${y},`);
// 	};
	
// 	const iterateBackward = (arrayIndex, xMin, xMax) => {
// 			console.log('Entering iterateBackward');
// 			for (let l = xMax; l >= xMin; l--) {
// 					solution.push(matrix[arrayIndex][l]);
// 			}
// 			yMax--;
// 			// x = xMin + 1;
// 			x = xMin;
// 			// y = y < yMax ? arrayIndex + 1 : yMin;
// 			y = yMax;
// 			console.log(`xMax: ${xMax}, xMin: ${xMin}, x: ${x},
// 			yMax: ${yMax}, yMin: ${yMin}, y: ${y},`);
// 	};
	
// 	const iterateDown = (arrayIndex, yMax, elementIndex) => {
// 			console.log('Entering iterateDown');
// 			for (let m = arrayIndex; m <= yMax; m++) {
// 					solution.push(matrix[m][elementIndex]);
// 			}
// 			xMax--;
// 			// x = x > xMin ? elementIndex - 1 : xMax;
// 			x = xMax;
// 			y = yMax - 1;
// 			console.log(`xMax: ${xMax}, xMin: ${xMin}, x: ${x},
// 			yMax: ${yMax}, yMin: ${yMin}, y: ${y},`);
// 	};
	
// 	const iterateUp = (arrayIndex, yMin, elementIndex) => {
// 			console.log('Entering iterateUp');
// 			for (let n = arrayIndex; n >= yMin; n--) {
// 					solution.push(matrix[n][elementIndex]);
// 			}
// 			xMin = xMin < xMax ? xMin + 1 : xMax;
// 			// x = x < xMax ? elementIndex + 1 : xMin;
// 			x = xMin;
// 			y = yMin;
// 			console.log(`xMax: ${xMax}, xMin: ${xMin}, x: ${x},
// 			yMax: ${yMax}, yMin: ${yMin}, y: ${y},`);
// 	};
	
// 	const traversalPattern = ['iterateForward', 'iterateDown', 'iterateBackward', 'iterateUp'];
// 	let currentAction = 0;
	
// 	while (solution.length < matrixArea) {
// //         solution.push(matrix[x][y]);
			
// //         if (x < matrix[x].length - 1) {
// //             x++;
// //         } else {
// //             y++;
// //         }
			
// 			switch(traversalPattern[currentAction]) {
// 					case 'iterateForward':
// 							iterateForward(x, xMin, xMax);
// 							break;
// 					case 'iterateDown':
// 							iterateDown(y, yMax, x);
// 							break;
// 					case 'iterateBackward':
// 							iterateBackward(yMax, xMin, xMax);
// 							break;
// 					case 'iterateUp':
// 							iterateUp(y, yMin, x);
// 							break;
// 					default:
// 							console.log('No appropriate action found.');
// 			}
			
// 			console.log(solution, 'SOLUTION');
			
// 			// Move onto next traveralPattern Action
// 			currentAction = currentAction === traversalPattern.length - 1 ? 0 : currentAction + 1;
// 			console.log(currentAction, traversalPattern[currentAction], 'nextAction');
			
// 	}
	
// 	return solution;
// };