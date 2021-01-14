// Find Positive Integer Solutio For A Given Equation

// https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/

// 1237. Find Positive Integer Solution for a Given Equation
// Easy

// 192

// 848

// Add to List

// Share
// Given a function  f(x, y) and a value z, return all positive integer pairs x and y where f(x,y) == z.

// The function is constantly increasing, i.e.:

// f(x, y) < f(x + 1, y)
// f(x, y) < f(x, y + 1)
// The function interface is defined like this: 

// interface CustomFunction {
// public:
//   // Returns positive integer f(x, y) for any given positive integer x and y.
//   int f(int x, int y);
// };
// For custom testing purposes you're given an integer function_id and a target z as input, where function_id represent one function from an secret internal list, on the examples you'll know only two functions from the list.  

// You may return the solutions in any order.

 

// Example 1:

// Input: function_id = 1, z = 5
// Output: [[1,4],[2,3],[3,2],[4,1]]
// Explanation: function_id = 1 means that f(x, y) = x + y
// Example 2:

// Input: function_id = 2, z = 5
// Output: [[1,5],[5,1]]
// Explanation: function_id = 2 means that f(x, y) = x * y
 

// Constraints:

// 1 <= function_id <= 9
// 1 <= z <= 100
// It's guaranteed that the solutions of f(x, y) == z will be on the range 1 <= x, y <= 1000
// It's also guaranteed that f(x, y) will fit in 32 bit signed integer if 1 <= x, y <= 1000


/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
	const solution = [];
	
	// Implement a binary search.
	// Since we know the function is always increasing, X and Y can never be more than Z, otherwise if one of these was greater than Z, the other would have to be decreasing to compensate.
	// We can find our target value by incrementing through all values of X and using a binary search for values of its corresponding Y.
	// We start our loop at 1 because X has to be a positive integer.
	for (let x = 1; x <= z; x++) {
			// Y Values.
			// We start at 1 because Y has to be a positive integer.
			let start = 1;
			// We end at Z for the same reason listed above the for loop.
			let end = z;
			
			while (start <= end) {
					const median = Math.floor((start + end) / 2);
					const currentResult = customfunction.f(x, median);
					
					if (currentResult === z) {
							solution.push([x, median]);
							// Once we have found the Y to our X, we can break from this instance of the while loop and continue on to the next X value in the outer for loop.
							break;
					} else if (currentResult < z) {
							// If the function result is lower than the target value z, adjust the ranges of the binary search accordingly.
							// Namely, perform a binary search above the median.
							start = median + 1;
					} else if (currentResult > z) {
							// If the function result is lower than the target value z, adjust the ranges of the binary search accordingly.
							// Namely, perform a binary search below the median.
							end = median - 1;
					}
			}
	}
	
	return solution;
};