// Range Sum Query - Immutable

// https://leetcode.com/problems/range-sum-query-immutable/

// 303. Range Sum Query - Immutable
// Easy

// 1189

// 1301

// Add to List

// Share
// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))
 

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
 

// Constraints:

// 0 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= i <= j < nums.length
// At most 104 calls will be made to sumRange.


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.data = nums;
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
	let solution = 0;
	
	// Loop from indexes i to j and add the elements at those indices together.
	// Because i and j are contrained to be between 0 and nums.length, there aren't any bound checks we need to perform.
	for (let index = i; index <= j; index++) {
			solution += this.data[index];
	}
	
	return solution;
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/