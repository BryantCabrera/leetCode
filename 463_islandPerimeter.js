// Island Perimeter

// https://leetcode.com/problems/island-perimeter/

// 463. Island Perimeter
// Easy

// 2504

// 132

// Add to List

// Share
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

// Example 1:


// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4
 

// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.


// Iterative Solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let perimeter = 0;
	
	// Find the land nodes.
	for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
					if (grid[i][j] === 1) {
							// Once we find an island, we assume that its perimeter is 4 until we add more land masses to it.
							let currentPerimeter = 4;
							
							// If the current land mass is connected to anny other land masses, we subtract 1 from what it contributes to the overall perimeter.
							// Up
							if (i - 1 >= 0 && grid[i - 1][j] === 1) {
									currentPerimeter--;
							}
							
							// Down
							if (i + 1 < grid.length && grid[i + 1][j] === 1) {
									currentPerimeter--;
							}
							
							// Left
							if (j - 1 >= 0 && grid[i][j - 1] === 1) {
									currentPerimeter--;
							}
							
							// Right
							if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
									currentPerimeter--;
							}
							
							perimeter += currentPerimeter;
					}
			}
	}
	
	return perimeter;
};


// First Recursive Attempt
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function(grid) {
// 	let solution = 0;
	
// 	const getPerimeter = (matrix, row, col, perimeter) => {
// 			console.log(`matrix[${row}][${col}]: ${matrix[row][col]}`);
// 			// console.log(perimeter, '@@@@@perimeter@@@@@');
			
			
// 			if (matrix[row][col] === 1) {
// 					// Mark island as visited.
// 					matrix[row][col] = 0;
// 					perimeter += 4;
// 					console.log(perimeter, solution, '@@@@@perimeter@@@@@');
					
// 					// Find all adjacent land masses
// 					// Up
// 					if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
// 							getPerimeter(matrix, row - 1, col, perimeter - 1);
// 					}

// 					// Down
// 					if (row + 1 < matrix.length && matrix[row + 1][col] === 1) {
// 							getPerimeter(matrix, row + 1, col, perimeter - 1);
// 					}

// 					// Left
// 					if (col - 1 >= 0 && matrix[row][col - 1] === 1) {
// 							getPerimeter(matrix, row, col - 1, perimeter - 1);
// 					}

// 					// Right
// 					if (col + 1 < matrix[row].length && matrix[row][col] + 1 === 1) {
// 							getPerimeter(matrix, row, col + 1, perimeter - 1);
// 					}
// 			}  else {
// 					return;
// 			}
// 	};
	
// 	// Find the 1st 1/island.
// 	for (let i = 0; i < grid.length; i++) {
// 			for (let j = 0; j < grid[i].length; j++) {
// 					console.log(i, j, '@@@@@i, j@@@@@');
// 					if (grid[i][j] === 1) {
// 							getPerimeter(grid, i, j, solution);
// 							break;
// 					}
// 			}
// 	}
	
// 	return solution;
// };


// Second Recursive Attempt 
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function(grid) {
// 	// We initialize this to 1 because the 1st island we encounter will contribute 4 sides to the perimeter but the recursion only adds 3.
// let solution = 1;

// const getPerimeter = (matrix, row, col) => {
// 	console.log(`matrix[${row}][${col}]: ${matrix[row][col]}`);
// 	// console.log(perimeter, '@@@@@perimeter@@@@@');
	
	
// 	if (matrix[row][col] === 1) {
// 			// Mark island as visited.
// 			matrix[row][col] = 0;
// 			// Each new island we add will be connected to the other islands by 1 side, so we only add 3 to the perimeter.
// 			solution += 3;
// 			console.log(solution, '@@@@@perimeter@@@@@');
			
// 			// Find all adjacent land masses
// 			// Up
// 			if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
// 					solution -= 1;
// 					getPerimeter(matrix, row - 1, col);
// 			}

// 			// Down     
// 			if (row + 1 < matrix.length && matrix[row + 1][col] === 1) {
// 					// console.log(row + 1, matrix[row + 1][col], '@@@@@DOWN@@@@@');
// 					solution -= 1;
// 					getPerimeter(matrix, row + 1, col);
// 			}

// 			// Left
// 			if (col - 1 >= 0 && matrix[row][col - 1] === 1) {
// 					solution -= 1;
// 					getPerimeter(matrix, row, col - 1);
// 			}

// 			// Right
// 			if (col + 1 < matrix[row].length && matrix[row][col + 1] === 1) {
// 					solution -=1;
// 					getPerimeter(matrix, row, col + 1);
// 			}
// 	}  else {
// 			return;
// 	}
// };

// // getPerimeter(grid, 0, 0, perimeter);

// // Find the 1st 1/island.
// for (let i = 0; i < grid.length; i++) {
// 	for (let j = 0; j < grid[i].length; j++) {
// 			console.log(i, j, '@@@@@i, j@@@@@');
// 			if (grid[i][j] === 1) {
// 					getPerimeter(grid, i, j, solution);
// 					return solution;
// 			}
// 	}
// }

// return solution;
// };


// Third Recursive Attempt
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function(grid) {
// 	// We initialize this to 1 because the 1st island we encounter will contribute 4 sides to the perimeter but the recursion only adds 3.
// let perimeter = 0;

// // Find the 1st 1/island.
// for (let i = 0; i < grid.length; i++) {
// 	for (let j = 0; j < grid[i].length; j++) {
// 			// console.log(i, j, '@@@@@i, j@@@@@');
// 			if (grid[i][j] === 1) {
// 					// Once we find 1 island, we assume that perimeter is 4 until we add more land masses to it.
// 					// So we initialize our fourth argument, effectively an accumulator, to 4.
// 					perimeter += getPerimeter(grid, i, j, 4);
// 					return perimeter;
// 			}
// 	}
// }

// return perimeter;
// };

// const getPerimeter = (matrix, row, col, currentPerimeter) => {
// // console.log(`matrix[${row}][${col}]: ${matrix[row][col]}`);
// // Edge Cases:
// // If the row or col are not in the bounds of the grid, this is not a valid node to check. 
// // If the node is '0', it does not add to the perimeter count/does not need to be marked.
// if (row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1 || matrix[row][col] === 0) {
// 	return 0;
// }

// // Mark island as visited.
// matrix[row][col] = 0;

// // Find all adjacent land masses
// // Up
// currentPerimeter += getPerimeter(matrix, row - 1, col, currentPerimeter);

// // Down     
// // console.log(row + 1, matrix[row + 1][col], '@@@@@DOWN@@@@@');
// currentPerimeter += getPerimeter(matrix, row + 1, col, currentPerimeter);

// // Left
// currentPerimeter += getPerimeter(matrix, row, col - 1, currentPerimeter);

// // Right
// currentPerimeter += getPerimeter(matrix, row, col + 1, currentPerimeter);

// // Each new island we add will be connected to the other islands by 1 side, so we effectively only add 2 to the perimeter.
// console.log(currentPerimeter + 2, '@@@@@currentPerimeter');
// return currentPerimeter + 2;
// };


// Fourth Recursive Attempt
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function(grid) {
// 	let perimeter = 0;
	
// 	// Find the 1st 1/island.
// 	for (let i = 0; i < grid.length; i++) {
// 			for (let j = 0; j < grid[i].length; j++) {
// 					if (grid[i][j] === 1) {
// 							// Once we find 1 island, we assume that its perimeter is 4 until we add more land masses to it.
// 							// So, we add 2 to our perimeter as the other 2 for the 1st island will be accounted for in the recursion.
// 							perimeter += 2;
// 							perimeter += getPerimeter(grid, i, j);
// 							return perimeter;
// 					}
// 			}
// 	}
	
// 	return perimeter;
// };

// const getPerimeter = (matrix, row, col) => {
// 	// Edge Cases:
// 	// If the row or col are not in the bounds of the grid, this is not a valid node to check. 
// 	// If the node is '0', it does not add to the perimeter count/does not need to be marked.
// 	if (row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1 || matrix[row][col] === 0) {
// 			return 0;
// 	}
	
// 	// Everytime we find a connected land mass, we are contributing 2 to the perimeter.
// 	let currentPerimeter = 2;
	
// 	// Mark island as visited.
// 	matrix[row][col] = 0;

// 	// Find all adjacent land masses
// 	// Up
// 	currentPerimeter += getPerimeter(matrix, row - 1, col);

// 	// Down     
// 	currentPerimeter += getPerimeter(matrix, row + 1, col);

// 	// Left
// 	currentPerimeter += getPerimeter(matrix, row, col - 1);

// 	// Right
// 	currentPerimeter += getPerimeter(matrix, row, col + 1);
	
// 	// Each new island we add will be connected to the other islands by 1 side, so we effectively only add 2 to the perimeter.
// 	return currentPerimeter;
// };