// Range Sum of BST

// https://leetcode.com/problems/range-sum-of-bst/

// 938. Range Sum of BST
// Easy

// 1942

// 272

// Add to List

// Share
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.


// Optimized Solution
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
	let sum = 0;
	
	const traverseTree = (node) => {
			if (node === null) return 0;
			
			// If the node falls within the range, inclusively, add it to the sum.
			if (node.val >= low && node.val <= high) {
					sum += node.val;
			}
			
			// We only need to traverse down the left branches if the current node's value is greater than the lowest value in the range.
			if (node.val > low) {
					const left = traverseTree(node.left);
			}
			
			// We only need to traverse down the right branches if the current node's value is less than the highest value in the range.
			if (node.val < high) {
					const right = traverseTree(node.right);
			}
			

			return node.val;
	};
	
	traverseTree(root);
	
	return sum;
};


// First Attempt
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
	let sum = 0;
	
	const traverseTree = (node) => {
			if (node === null) return 0;
			
			if (node.val >= low && node.val <= high) {
					sum += node.val;
			}
			
			const left = traverseTree(node.left);
			const right = traverseTree(node.right);

			return node.val;
	};
	
	traverseTree(root);
	
	return sum;
};