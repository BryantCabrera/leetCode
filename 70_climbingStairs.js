// Climbing Stairs

// https://leetcode.com/problems/climbing-stairs/

// 70. Climbing Stairs
// Easy

// 5456

// 174

// Add to List

// Share
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) { 
	const takeSteps = (stepsRemaining, memo) => {
			// If we overshoot the end/top of the stairs, it is not a valid path.
			if (stepsRemaining < 0) return 0;
			
			// If exactly no more steps remain, it is a valid path.
			if (stepsRemaining === 0) return 1;
			
			// Access stored values in memo.
			if (memo[stepsRemaining]) return memo[stepsRemaining];
			
			memo[stepsRemaining] = takeSteps(stepsRemaining - 1, memo) + takeSteps(stepsRemaining - 2, memo);
			
			return memo[stepsRemaining];
	};
	
	return takeSteps(n, {});
};