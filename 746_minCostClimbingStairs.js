// Min Cost Climbing Stairs

// https://leetcode.com/problems/min-cost-climbing-stairs/

// 746. Min Cost Climbing Stairs
// Easy

// 2617

// 574

// Add to List

// Share
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999].


/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
	// Initializes a list of the minimum cost up to and including that step (index).    
	const costList = new Array(cost.length);
	
	// Edge Cases: If the cost array is null or has no steps, there is no cost.
	if (cost === null || cost.length === 0) return 0;
	
	// Edge Case: If cost array's length is 1, return the 1st and only cost (the 1st element).
	if (cost.length === 1) return cost[0];
	
	// Assign the 1st 2 elements of costList.
	costList[0] = cost[0];
	costList[1] = Math.min(cost[0] + cost[1], cost[1]);
	
	// Loop through the rest of the steps/costs.
	for (let i = 2; i < cost.length; i++) {
			// The min cost for this step is the min of (getting to this step from 1 steps back) and (getting to this step from 2 steps back).
			costList[i] = Math.min(costList[i - 1] + cost[i], costList[i - 2] + cost[i]);
	}
			
	// The last element's index in the costList will correspond to the last step. The element itself represents the minimum cost to get to that step.
	// To get to the top of the stairs, we can either get there from the step before or from 2 steps before.  So whichever provides the minimum cost is the answer.
	return Math.min(costList[costList.length - 1], costList[costList.length - 2]);
};


// First Attempt
// /**
//  * @param {number[]} cost
//  * @return {number}
//  */
// var minCostClimbingStairs = function(cost) {
// 	// Initializes a list of the minimum cost up to and including that step (index).    
// 	const costList = new Array(cost.length);
	
// 	// Edge Cases: If the cost array is null or has no steps, there is no cost.
// 	if (cost === null || cost.length === 0) return 0;
	
// 	// Edge Case: If cost array's length is 1, return the 1st and only cost (the 1st element).
// 	if (cost.length === 1) return cost[0];
	
// 	// Assign the 1st 2 elements of costList.
// 	costList[0] = cost[0];
// 	costList[1] = Math.min(cost[0] + cost[1], cost[1]);
	
// 	// Loop through the rest of the steps/costs.
// 	for (let i = 2; i < cost.length; i++) {
// 			// The min cost for this step is the min of (getting to this step from 1 steps back) and (getting to this step from 2 steps back).
// 			costList[i] = Math.min(costList[i - 1], costList[i - 2] + cost[i]);
// 	}
			
// 	console.log(costList, '@@@@@costList@@@@@');
// 	// The last element's index in the costList will correspond to the last step. The element itself represents the minimum cost to get to that step.
// 	return costList[costList.length - 1];
// };