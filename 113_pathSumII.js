// Path Sum II

// https://leetcode.com/problems/path-sum-ii/

// 113. Path Sum II
// Medium

// 2459

// 86

// Add to List

// Share
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
	const solution = [];
	
	// Edge Case: If the root is null, there are no leaves.
	if (root === null) return solution;
	
	// Recursively traverse the tree (Depth First Search) and build each subpath.
	getPaths(root, targetSum, '', solution);
	
	return solution;
};

const getPaths = (node, goalSum, subPath, allPaths) => {
	// Once we have reached a null node, we don't add that to the subpath string.
	if (node === null) return null;
	
	// Build the subpath string.  We choose to do this instead of an array because the same array instance would have kept getting passed into the recursion and contain eventually conntain all nodes, whereas the string will build for each path.
	subPath += `${node.val},`;
	
	// Decrement the goalSum by the current node's value.
	goalSum -= node.val;
	
	const left = getPaths(node.left, goalSum, subPath, allPaths);
	const right = getPaths(node.right, goalSum, subPath, allPaths);
	
	// Only when both children are null (a.k.a. the node has no children) AND the goalSum === 0 (meaning the current path's sum is exactly equal to the goalSum) do we complete the subpath string and add it to the array.
	if (left === null && right === null && goalSum === 0) {
			// Create an array from the string we built.
			allPaths.push(subPath.substring(0, subPath.length - 1).split(','));
	}
};