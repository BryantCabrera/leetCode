// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/

// 62. Unique Paths
// Medium

// 3817

// 223

// Add to List

// Share
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
// Example 3:

// Input: m = 7, n = 3
// Output: 28
// Example 4:

// Input: m = 3, n = 3
// Output: 6
 

// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 109.


// Solution
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	const pathMap = new Map();
	
	const findPaths = (currentPosition) => {     
		if (!pathMap.has(`${currentPosition}`)) {
			let right = 0,
			down = 0;
			
			if (currentPosition[0] == n && currentPosition[1] == m) {
				return 1;
			} else {
				if (currentPosition[0] !== n) {
					right = findPaths([currentPosition[0] + 1, currentPosition[1]]);
				}

				if (currentPosition[1] !== m) {
					down = findPaths([currentPosition[0], currentPosition[1] + 1]);
				}

				pathMap.set(`${currentPosition}`, right + down);
			}           
		}

		
		return pathMap.get(`${currentPosition}`);
	}
	
	return findPaths([1, 1]);
};


// Unmemoized Recursive Solution
// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {
// 	const findPaths = (currentPosition) => {
// 		let right = 0,
// 			down = 0;
// 		if (currentPosition[0] == n && currentPosition[1] == m) {
// 			return 1;
// 		} else {
// 			if (currentPosition[0] !== n) {
// 				right = findPaths([currentPosition[0] + 1, currentPosition[1]]);
// 			}
			
// 			if (currentPosition[1] !== m) {
// 				down = findPaths([currentPosition[0], currentPosition[1] + 1]);
// 			}
			
// 			console.log(`currentPosition: ${currentPosition}, right: ${right}, down: ${down}`);
// 			return right + down;
// 		}
// 	}
	
// 	return findPaths([1, 1]);
// };


// 1st Attempt
// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {
// 	let pathCount = 0;
	
// 	// Perform DFS.
// 	const currentPosition = [1,1];
// 	const stack = [currentPosition];
	
// 	while (stack.length) {
// 			current = stack.pop();
// 			console.log(current, '@@@@@current@@@@@');
// 			if (current[0] === n && current[1] === m) {
// 					pathCount++;
// 					continue;
// 			}
// 			// The right neighbor.
// 			if (current[0] !== n) stack.push([current[0] + 1, current[1]]);
			
// 			// The down neighbor.
// 			if (current[1] !== m) stack.push([current[0], current[1] + 1]);
// 	}
	
// 	return pathCount;
// };