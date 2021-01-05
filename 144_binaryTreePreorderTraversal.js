// Binary Tree Preorder Traversal

// https://leetcode.com/problems/binary-tree-preorder-traversal/

// 144. Binary Tree Preorder Traversal
// Medium

// 1958

// 78

// Add to List

// Share
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:


// Input: root = [1,2]
// Output: [1,2]
// Example 5:


// Input: root = [1,null,2]
// Output: [1,2]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up:

// Recursive solution is trivial, could you do it iteratively?


// Recursive Solution
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
	const solution = [];
	
	const traversePreorder = (node, arr) => {
			if (node === null) return node;
			
			arr.push(node.val);
			
			const left = traversePreorder(node.left, arr);
			if (left != null) arr.push(left);
			
			const right = traversePreorder(node.right, arr);
			if (right != null) arr.push(right);
	};
	
	traversePreorder(root, solution);
	
	return solution;
};