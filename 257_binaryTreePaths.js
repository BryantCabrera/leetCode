// Binary Tree Paths

// https://leetcode.com/problems/binary-tree-paths/

// 257. Binary Tree Paths
// Easy

// 2292

// 122

// Add to List

// Share
// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {  
	const solution = [];
	
	// Edge Case: If the root is null, there are no leaves.
	if (root === null) return solution;
	
	// Recursively traverse the tree (Depth First Search) and build each subpath.
	getPath(root, '', solution);

	return solution;
};

const getPath = (node, str, arr) => {
	// Once we have reached a null node, we don't add that to the subpath string.
	if (node === null) return null;
	
	// Build the subpath string.
	str += `${node.val}->`;
	
	const left = getPath(node.left, str, arr);
	const right = getPath(node.right, str, arr);
	
	// Only when both children are null (a.k.a. the node has no children) do we complete the subpath string and add it to the array.
	if (left === null && right === null) {
			arr.push(str.substring(0, str.length - 2));
	}
};