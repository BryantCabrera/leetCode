// Pascals Triangle

// https://leetcode.com/problems/pascals-triangle/

// 118. Pascal's Triangle
// Easy

// 1988

// 123

// Add to List

// Share
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	const solution = [];
	
	let counter = 1;
	while (counter <= numRows) {
			const row = [];
			for (let i = 0; i < counter; i++) {
					if (i === 0 || i === counter - 1) {
							row.push(1);
					} else {
							row.push(solution[counter - 2][i - 1] + solution[counter - 2][i])
					}
			}
			
			solution.push(row);

			counter++;
	}
	
	return solution;
};