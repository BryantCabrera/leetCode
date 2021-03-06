// Convert Sorted Array to Binary Search Tree

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// 108. Convert Sorted Array to Binary Search Tree
// Easy

// 3081

// 236

// Add to List

// Share
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	const createBST = (startIndex, endIndex) => {
			if (endIndex < startIndex) return null;
			
			const rootIndex = Math.ceil((endIndex + startIndex) / 2);
			const currentNode = new TreeNode(nums[rootIndex]);
			
			currentNode.left = createBST(startIndex, rootIndex - 1);
			currentNode.right = createBST(rootIndex + 1, endIndex);
			
			return currentNode;
	};
	
	const binarySearchTree = createBST(0, nums.length - 1);
	
	return binarySearchTree;
};