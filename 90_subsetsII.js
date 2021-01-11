// Subsets  II

// https://leetcode.com/problems/subsets-ii/

// 90. Subsets II
// Medium

// 2145

// 94

// Add to List

// Share
// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]





// First Attempt
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsetsWithDup = function(nums) {
// 	const subsets = new Set();
// 	const solution = [[]];
	
// 	const isSuperset = (set, subset) => {
// 			for (let elem of subset) {
// 					if (!set.has(elem)) {
// 							return false;
// 					}
// 			}
// 			return true;
// 	};
	
// 	// To create a new subset, we can loop through the integers in the nums array and create a copy of each subset array currently in solution that includes the current integer.
// 	for (let i = 0; i < nums.length; i++) {
// 			// Snapshot of current length of solution.
// 			let counter = solution.length;
			
// 			for (let j = 0; j < counter; j++) {
// 					const subset = new Set();
// 					// console.log(...solution[j], '...');
// 					for (let k = 0; k < solution[j].length; k++) {
// 							subset.add(solution[j][k]);
// 					}
// 					// subset.add(...solution[j]);
// 					subset.add(nums[i]);
// 					// const subArray = [...solution[j], nums[i]];
					
// 					console.log(subsets, '@@@@@subsets@@@@@');
// 					console.log(subset, subsets.has(subset), isSuperset(subsets, subset), '@@@@@subsets, subsets.has(subset)@@@@@');
// 					if (!subsets.has(subset)) {
// 							subsets.add(subset);
// 							solution.push([...subset]);
// 					}
// 			}
// 	}
	
// 	console.log(solution, '@@@@@solution@@@@@');
// 	return solution;
// };