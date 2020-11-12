// Maximum Depth of Binary Tree

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

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
 * @return {number}
 */
var maxDepth = function(root) {
	// Edge Cases
	if (root === null) return 0;
	
	let globalDepth = 0;
	let currentDepth = 0;
	
	const depthFirstSearch = (node, currentDepth = 0) => {
			if (node === null) {
					globalDepth = Math.max(globalDepth, currentDepth);
					return;
			}
			
			// Left branch
			depthFirstSearch(node.left, currentDepth + 1);
			// Right branch
			depthFirstSearch(node.right, currentDepth + 1);
	};
	
	depthFirstSearch(root);
	
	return globalDepth;
};