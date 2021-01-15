// Fibonacci Number

// https://leetcode.com/problems/fibonacci-number/

// 509. Fibonacci Number
// Easy

// 980

// 214

// Add to List

// Share
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30


// Recursive Solution 
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	const solutionMap = new Map();
	solutionMap.set(0, 0);
	solutionMap.set(1, 1);
	
	const findFib = (num) => {
			if (solutionMap.get(num) != undefined) {
					return solutionMap.get(num);
			} else {
					solutionMap.set(num, findFib(num - 1) + findFib(num - 2));
					return solutionMap.get(num);
			} 
	}
	
	return findFib(n);
};


// Iterative Solution
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	const solutionMap = new Map();
	
	for (let i = 0; i <= n; i++)  {
			if (i === 0 || i === 1) {
					solutionMap.set(i, i);
			} else {
					solutionMap.set(i, solutionMap.get(i - 1) + solutionMap.get(i - 2));
			}
	}
	
	return solutionMap.get(n);
};