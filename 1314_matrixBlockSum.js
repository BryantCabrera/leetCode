// Matric Block Sum

// https://leetcode.com/problems/matrix-block-sum/

// 1314. Matrix Block Sum
// Medium

// 782

// 139

// Add to List

// Share
// Given a m * n matrix mat and an integer K, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.
 

// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
// Output: [[12,21,16],[27,45,33],[24,39,28]]
// Example 2:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
// Output: [[45,45,45],[45,45,45],[45,45,45]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n, K <= 100
// 1 <= mat[i][j] <= 100


/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
	// Initialize an array the same size as mat.
	const solution = new Array(mat.length);
	
	// Determine the values for each cell of the solution matrix.
	for (let i = 0; i < solution.length; i++) {
			// Initialize the solution matrix's row with an array the same size as a row in mat.
			solution[i] = (new Array(mat[i].length))
			for (let j = 0; j < solution[i].length; j++) {
					// Determine the sum for that cell given the parameters outline in the problem.
					solution[i][j] = determineSum(mat, i - K, i + K, j - K, j + K);
			}
	}

	return solution;
};
	
const determineSum = (matrix, rowMin, rowMax, colMin, colMax) => {
	let sum = 0;
	
	// For each possible row index,
	for (let i = rowMin; i <= rowMax; i++) {
			// If the row index falls out of bounds of the matrix, ignore it.
			if (i < 0 || i > matrix.length - 1) continue;
			
			// Pair each possible row value with every possible column index.
			for (let j = colMin; j <= colMax; j++) {
					// If the column index falls out of bounds of the matrix, ignore it.
					if (j < 0 || j > matrix[i].length - 1) continue;
					
					// Add the cell's value to the running sum.
					sum += matrix[i][j];
			}
	}
	
	return sum;
};