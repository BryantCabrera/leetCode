// Pascals Traingle II

// https://leetcode.com/problems/pascals-triangle-ii/

// 119. Pascal's Triangle II
// Easy

// 1207

// 215

// Add to List

// Share
// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?

 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	const row = [];
	
	// The outer loop builds each row until we reach rowIndex.
	for (let i = 0; i <= rowIndex; i++) {
			// The inner loop builds each row by reassigning elements in the row's index.
			// Each index's element will become the element at the previous index plus the current element at the index.
			// We decrement, otherwise the sum would not be correct for indices that come later.
			for (let j = row.length - 1; j > 0; j--) {
					row[j] = row[j - 1] + row[j];
			}
			
			// To complete the row, we push a 1 so that the row is bookended by 1s.
			row.push(1);
	}
	
	return row;
};