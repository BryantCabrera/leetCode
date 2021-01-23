// Count Negative Numbers in a Sorted Matrix

// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

// 1351. Count Negative Numbers in a Sorted Matrix
// Easy

// 747

// 43

// Add to List

// Share
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
// Example 3:

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
 

// Follow up: Could you find an O(n + m) solution?


/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
	let count = 0;
	
	// Edge Case: If the grid is null, there are no negative numbers in the matrix.
	if (grid === null) return count;
	
	
	for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
					// If the number is negative, the count of negative numbers is the length of the row minus the current index, j.
					// Add the count of negative numbers to overall count.
					// Break from the inner loop as there is no need to process the rest of the row.
					if (grid[i][j] < 0) {
							count += grid[i].length - j;
							break;
					}
			}
	}
		
	return count;
};


// First Attempt at Binary Search
// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var countNegatives = function(grid) {
// 	let count = 0;
	
// 	// Edge Case: If the grid is unll, there are no negative numbers in the matrix.
// 	if (grid === null) return count;
	
	
// 	for (let i = 0; i < grid.length; i++) {
// 			// Implement binary search.
// 			count  += binarySearch(grid[i]);
// 	}
		
// 	return count;
// };

// const binarySearch = (arr) => {
// 	let startIndex = 0;
// 	let endIndex = arr.length - 1;
	
// 	while (startIndex < endIndex) {
// //         console.log(startIndex, endIndex,  '@@@@@startIndex, endIndex@@@@@');
// //         let median = Math.floor((startIndex + endIndex) / 2);
// //         console.log(median, '@@@@@median@@@@@');
			
// //         if (arr[median] < 0) {
// //             console.log('arr[median] < 0');
// //             endIndex = median - 1;
// //         } if (arr[median] === 0) {
// //             console.log('arr[median] === 0');
// //             return arr.length - 1 - median;
// //         } else if (arr[median] > 0) {
// //             console.log('arr[median] > 0');
// //             startIndex = median + 1;
// //         } 
			
// 			const median = Math.floor((startIndex + endIndex) / 2);
			
// 			if (arr[median - 1] >= 0 && arr[median + 1] < 0) {
// 					if (arr[median] < 0) {
// 							return arr.length - median;
// 					} else {
// 							return arr.length - median - 1;
// 					}
// 			} else if (arr[median - 1] >= 0 && arr[median + 1] >= 0) {
// 					endIndex = median - 1;
// 			} else {
// 					startIndex = median + 1;
// 			}
// 	}
	
	
// 	// if (arr[endIndex] >= 0) {
// 	//     console.log(0, '@@@@@0@@@@@');
// 	//     return 0;
// 	// } else {
// 	//     console.log(arr.length - startIndex, '@@@@@arr.length - startIndex;@@@@@');
// 	//     return arr.length - startIndex;
// 	// }  
// };