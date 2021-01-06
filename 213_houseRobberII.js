// House Robber II

// https://leetcode.com/problems/house-robber-ii/

// 213. House Robber II
// Medium

// 2459

// 60

// Add to List

// Share
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [0]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	// Edge Cases
	if (nums.length === null) return null;
	if (nums.length === 1) return nums[0];
	
	const determineMaxLoot = (arr) => {
			// Edge Cases
			if (arr === null || arr.length === 0) return 0;
			if (arr.length === 1) return arr[0];

			const maxLoot = [arr[0], Math.max(arr[0], arr[1])];

			for (let i = 2; i < arr.length; i++) {
					maxLoot[i] = Math.max(maxLoot[i - 1], arr[i] + maxLoot[i - 2]);
			}
			
			return maxLoot[maxLoot.length - 1];
	}
	
	const numsWithoutTail = [...nums];
	numsWithoutTail.pop();
	const numsWithoutHead = [...nums];
	numsWithoutHead.shift();
	
	return Math.max(determineMaxLoot(numsWithoutTail), determineMaxLoot(numsWithoutHead));
};


// Attempt #1
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function(nums) {
// 	// Edge Cases
// 	if (nums === null || nums.length === 0) return 0;
// 	if (nums.length === 1) return nums[0];
	
// 	const maxLoot = [nums[0], Math.max(nums[0], nums[1])];
// 	// Edge Case addressed in firstHouseRobbed[1] below, we have to distinguish whether or not the first house was robbed.  When we determine the max, there is a case where both the 1st and 2nd houses have equal loot, which we need to account for.
// 	const firstHouseRobbed = [true, maxLoot[1] === maxLoot[0] && nums[1] !== nums[0] ? true : false];
	
// 	for (let i = 2; i < nums.length; i++) {
// 			if (i === nums.length - 1) {
// 					if (firstHouseRobbed[i - 2]) {
// 							// If we decide the maxLoot at the last house will be the sum of this house's loot and the max from 2 houses back, we look to see if that max included loot from the first house.
// 							// If it does, we cannot rob the last house as it is adjacent to the first house.
// 							maxLoot[i] = maxLoot[i - 1];
// 					} else {
// 							maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);
// 					}
// 					// if (Math.max(nums[0], nums[1]) === nums[0]) {
// 					//     maxLoot[i] = maxLoot[i - 1];
// 					// } else {
// 					//     maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);
// 					// }
// 			} else {
// 					maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);
					
// 					// A separate array that keeps track of whether the max at the current house includes loot robbed from the first house.
// 					firstHouseRobbed[i] = maxLoot[i] === maxLoot[i - 1] ? firstHouseRobbed[i - 1] : firstHouseRobbed[i - 2];
// 			} 
// 			console.log(maxLoot, '@@@@@maxLoot@@@@@');
// 			// console.log(firstHouseRobbed, '@@@@@firstHouseRobbed@@@@@');
// 	}
	
// 	return maxLoot[maxLoot.length - 1];
// };


// Attempt #2
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function(nums) {
// 	// Edge Cases
// 	if (nums === null || nums.length === 0) return 0;
// 	if (nums.length === 1) return nums[0];
	
// 	const maxLoot = [nums[0], Math.max(nums[0], nums[1])];
// 	// Edge Case addressed in firstHouseRobbed[1] below, we have to distinguish whether or not the first house was robbed.  When we determine the max, there is a case where both the 1st and 2nd houses have equal loot, which we need to account for.
// 	const firstHouseRobbed = [true, maxLoot[1] === maxLoot[0] && nums[1] !== nums[0] ? true : false];
	
// 	for (let i = 2; i < nums.length; i++) {
// 			maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);

// 			// A separate array that keeps track of whether the max at the current house includes loot robbed from the first house.
// 			firstHouseRobbed[i] = maxLoot[i] === maxLoot[i - 1] ? firstHouseRobbed[i - 1] : firstHouseRobbed[i - 2];
			
// 			if (i === nums.length - 1) {
// 					// if (firstHouseRobbed[i - 2]) {
// 					//     // If we decide the maxLoot at the last house will be the sum of this house's loot and the max from 2 houses back, we look to see if that max included loot from the first house.
// 					//     // If it does, we cannot rob the last house as it is adjacent to the first house.
// 					//     maxLoot[i] = maxLoot[i - 1];
// 					// } else {
// 					//     maxLoot[i] = Math.max(maxLoot[i - 1], nums[i] + maxLoot[i - 2]);
// 					// }
// 					if (maxLoot[i] === nums[i] + maxLoot[i - 2] && firstHouseRobbed[i]) {
// 							maxLoot[i] = maxLoot[i - 1];
// 					}
// 			}
					
// 			console.log(maxLoot, '@@@@@maxLoot@@@@@');
// 			// console.log(firstHouseRobbed, '@@@@@firstHouseRobbed@@@@@');
// 	}
	
// 	return maxLoot[maxLoot.length - 1];
// };