// NNumber of Islands

// https://leetcode.com/problems/number-of-islands/

// 200. Number of Islands
// Medium

// 7419

// 232

// Add to List

// Share
// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	// Edge Case: If the grid is null or has no elements, there are no islands.
	if (grid === null || grid.length === 0) return 0;
	
	// Keep count of the number of islands.
	let numberOfIslands = 0;
	
	// Loop through each node in the grid to see if it is an island (a '1').
	for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
					if (grid[i][j] === '1') {
							// We call a function that will mark every 4-directionally connected piece of land as counted by turning it into a '0'.
							numberOfIslands += countIslands(grid, i, j);
					}
			}
	}
	
	return numberOfIslands;
};

const countIslands = (matrix, row, col) => {
	// Edge Cases:
	// If the row or col are not in the bounds of the grid, this is not a valid node to check. 
	// If the node is '0', it does not add to the island count/does not need to be marked.
	if (row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1 || matrix[row][col] === '0') {
			return 0;
	}
	
	// Mark the current node as counted by reassigning its value to '0'.
	matrix[row][col] = '0';
	
	// Mark adjacent land nodes as counted by reassigning their values to '0'.
	// Up
	countIslands(matrix, row - 1, col);
	
	// Down
	countIslands(matrix, row + 1, col);
	
	// Left
	countIslands(matrix, row, col - 1);
	
	// Right
	countIslands(matrix, row, col + 1);
	
	// Return the count of the island, which is 1.
	return 1;
};