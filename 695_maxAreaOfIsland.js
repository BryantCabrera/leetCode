// Max Area of Island

// https://leetcode.com/problems/max-area-of-island/

// 695. Max Area of Island
// Medium

// 2615

// 89

// Add to List

// Share
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	// Edge Case: If the grid is null or has no elements, there are no islands.
	if (grid === null || grid.length === 0) return 0;
	
	let maxArea = 0;
	
	// Loop through each node in the grid to see if it is an island (a '1').
	for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
					if (grid[i][j] === 1) {
							// Determine its area.
							// maxArea is the max of the current max and this island's area.
							maxArea = Math.max(maxArea, getIslandArea(grid, i, j));
					}
			}
	}
	
	return maxArea;
};

const getIslandArea = (matrix, row, col) => {
	// Edge Cases:
	// If the row or col are not in the bounds of the grid, this is not a valid node to check. 
	// If the node is 0, it does not add to the area/does not need to be marked.
	if (row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1 || matrix[row][col] === 0) {
			return 0;
	}
	
	let currentArea = 1;
	// Mark the current node as counted by reassigning its value to '0'.
	matrix[row][col] = 0;
	
	// Find 4-directionally connected land nodes.
	// Up
	currentArea += getIslandArea(matrix, row - 1, col);
	
	// Down
	currentArea += getIslandArea(matrix, row + 1, col);
	
	// Left
	currentArea += getIslandArea(matrix, row, col - 1);
	
	// Right
	currentArea += getIslandArea(matrix, row, col + 1);
	
	return currentArea;
};