// Rectangle Overlap

// https://leetcode.com/problems/rectangle-overlap/

// 836. Rectangle Overlap
// Easy

// 908

// 223

// Add to List

// Share
// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

// Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

 

// Example 1:

// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true
// Example 2:

// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false
// Example 3:

// Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
// Output: false
 

// Constraints:

// rect1.length == 4
// rect2.length == 4
// -109 <= rec1[i], rec2[i] <= 109
// rec1[0] <= rec1[2] and rec1[1] <= rec1[3]
// rec2[0] <= rec2[2] and rec2[1] <= rec2[3]





// First Attempt
// /**
//  * @param {number[]} rec1
//  * @param {number[]} rec2
//  * @return {boolean}
//  */
// var isRectangleOverlap = function(rec1, rec2) {
// 	// If either X coordinate of rec2 falls within the range of the X coordinates of rec1,
// 	// and either Y coordinate of rec2 falls within the range of the Y coordinates od rec1,
// 	// then the rectangles overlap.
// 	const rec2XWithinRec1XRange = (rec2[0] > rec1[0] && rec2[0] < rec1[2]) || (rec2[2] > rec1[0] && rec2[2] < rec1[2]);
// 	console.log(rec2XWithinRec1XRange, '@@@@@rec2XWithinRec1XRange@@@@@');
// 	const rec2YWithinRec1YRange = (rec2[1] > rec1[1] && rec2[1] < rec1[3]) || (rec2[3] > rec1[1] && rec2[3] < rec1[3]);
// 	console.log(rec2YWithinRec1YRange, '@@@@@rec2YWithinRec1YRange@@@@@');
	
// 	if (rec2XWithinRec1XRange && rec2YWithinRec1YRange) {
// 			return true;
// 	}
	
// 	return false;
// };


// Second Attempt
// /**
//  * @param {number[]} rec1
//  * @param {number[]} rec2
//  * @return {boolean}
//  */
// var isRectangleOverlap = function(rec1, rec2) {
// 	// If either X coordinate of rec2 falls within the range of the X coordinates of rec1,
// 	// and either Y coordinate of rec2 falls within the range of the Y coordinates od rec1,
// 	// then the rectangles overlap.
// 	return rec2[0] < rec1[2] && rec2[2] > rec1[0] && rec2[1] < rec1[3] && rec2[3] > rec1[1];
// };


// Third Attempt
// /**
//  * @param {number[]} rec1
//  * @param {number[]} rec2
//  * @return {boolean}
//  */
// var isRectangleOverlap = function(rec1, rec2) {
// 	// If one of the corners of rec2 falls within the X coordinate ranges and Y coordinate ranges of X 1,
// 	// then the rectangles overlap.
	
// 	// Check to see if the coordinate of a corner in rec2 falls within rec1.
// 	const inRangeOfRect1 = (rec2X, rec2Y) => {
// 			return rec2X >= rec1[0] && rec2X <= rec1[2] && rec2Y >= rec1[1] && rec2Y <= rec1[3];
// 	};
	
// 	// Flesh out the coordinates of the corners of rec2.
// 	const rec2Coordinates = [[rec2[0], rec2[1]], [rec2[0], rec2[3]], [rec2[2], rec2[3]], rec2[2], rec2[1]];
	
// 	// Loop through all of the coordinates of rec2's 4 corners.
// 	for (const coordinate of rec2Coordinates) {
// 			console.log(coordinate, '@@@@@coordinate@@@@@');
// 			// Once we find one point of overlap, break out of the loop by returning true.
// 			if (inRangeOfRect1(coordinate[0], coordinate[1])) return true;
// 	}
	
// 	// If no cornner of rec2 falls within rec1, the rectangles don't overlap.
// 	return false;
// };