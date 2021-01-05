// Binary Tree LEvel Order Traversal II

// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// 107. Binary Tree Level Order Traversal II
// Easy

// 1885

// 232

// Add to List

// Share
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]


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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
	const queue = [root];
	const solution = [];
	
	// Edge Case: Null argument.
	if (root == null) return solution;
	
	while (queue.length) {
			// Take a snapshot of the number of nodes we need to process.
			let numNodesInLevel = queue.length;
			
			const row = [];
			
			while (numNodesInLevel > 0) {
					// Process first node in the queue.
					const currentNode = queue.shift();
					
					// Build the array of the row's values.
					row.push(currentNode.val);
					
					// Add children to the queue.
					if (currentNode.left != null) queue.push(currentNode.left);
					if (currentNode.right != null) queue.push(currentNode.right);
					
					// Decrement the number of nodes in the level we need to process.
					numNodesInLevel--;
			}
			
			solution.unshift(row);
	}
			
	return solution;
};