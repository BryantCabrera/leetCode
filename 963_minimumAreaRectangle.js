// Minimum Area Rectangle II

// https://leetcode.com/problems/minimum-area-rectangle-ii/

// 963. Minimum Area Rectangle II
// Medium

// 193

// 284

// Add to List

// Share
// Given a set of points in the xy-plane, determine the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the x and y axes.

// If there isn't any rectangle, return 0.

 

// Example 1:



// Input: [[1,2],[2,1],[1,0],[0,1]]
// Output: 2.00000
// Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.
// Example 2:



// Input: [[0,1],[2,1],[1,1],[1,0],[2,0]]
// Output: 1.00000
// Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.
// Example 3:



// Input: [[0,3],[1,2],[3,1],[1,3],[2,1]]
// Output: 0
// Explanation: There is no possible rectangle to form from these points.
// Example 4:



// Input: [[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]
// Output: 2.00000
// Explanation: The minimum area rectangle occurs at [2,1],[2,3],[3,3],[3,1], with an area of 2.
 

// Note:

// 1 <= points.length <= 50
// 0 <= points[i][0] <= 40000
// 0 <= points[i][1] <= 40000
// All points are distinct.
// Answers within 10^-5 of the actual value will be accepted as correct.


// First Attempt Scaffold
// /**
//  * @param {number[][]} points
//  * @return {number}
//  */
// var minAreaFreeRect = function(points) {
    
// };

// const isParallel = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
//     // Parallel lines have the same slope.
    
//     // Determine the slope of line 1.
//     const slope1 = (y2 - y1) / (x2 - x1);
    
//     // Determine the slope of line 2.
//     const slope2 = (y4 - y3) / (x4 - x3);
    
//     return slope1 === slope2;
// };

// const isPerpendicular = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
//     // Perpendicular lines have negative reciprocal slopes of each other.
    
//     // Determine the slope of line 1.
//     const slope1 = (y2 - y1) / (x2 - x1);
    
//     // Determine the slope of line 2.
//     const slope2 = (y4 - y3) / (x4 - x3);
    
//     return slope1 === -(1 / slope2);
// };

// const findDistance = ([x1, y1], [x2, y2]) => {
//     // The distance is the length of the hypotenuse where the legs are the differences of the x and y coordinates.
    
//     return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
// };
