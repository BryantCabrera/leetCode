// House Robber

// https://leetcode.com/problems/house-robber/

// 198. House Robber
// Medium

// 6230

// 182

// Add to List

// Share
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	// Edge Cases
	if (nums === null || nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	
	// Initialize maxLoot with first 2 houses.
	const maxLoot = [nums[0], Math.max(nums[0], nums[1])];
	
	for (let i = 2; i < nums.length; i++) {
			// The max loot at the current house i is the max of either (a) the max at the previous house (b) the sum of this house's loot plus the max 2 houses back (because you cannot rob houses next to each other).
			maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);
			console.log(maxLoot, `@@@@@maxLoot at ${i}@@@@@`);
	}
	
	return maxLoot[maxLoot.length - 1];
};