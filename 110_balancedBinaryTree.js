// Balanced Binary Tree

// https://leetcode.com/problems/balanced-binary-tree/

// 110. Balanced Binary Tree
// Easy

// 3092

// 205

// Add to List

// Share
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104


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
 * @return {boolean}
 */
var isBalanced = function(root) {
	// Edge case: If root is null, it is balanced.
	if (root === null) return true;
	
	// If our getHeight recursive call returns a -1, it is unbalanced.
	return getHeight(root) !== -1;
};

const getHeight = (node) => {
	// A null node does not contribute to the height of the tree.
	if (node === null) return 0;
	
	// Recursively determine the heights of the node's children.
	const left = getHeight(node.left);
	const right = getHeight(node.right);
	
	// If any child of the node is unbalanced, the rest of the tree will be unbalanced.
	// If the left branch is greater than the right branch by more than 1 level, the tree is unbalanced.
	if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
			return -1;
	}
	
	// We use the max of left or right because the child with the most nodes will contribute to the overall height of that branch.
	// We add 1 to the max to account for the currentNode contributing to the height of the tree.
	return Math.max(left, right) + 1;
};