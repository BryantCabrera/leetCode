// Symmetric Tree

// https://leetcode.com/problems/symmetric-tree/

// 101. Symmetric Tree
// Easy

// 5201

// 126

// Add to List

// Share
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3
 

// Follow up: Solve it both recursively and iteratively.


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
var isSymmetric = function(root) {
	// Edge Case: If the root is null, it is symmetric.
	if (root === null) return true;
	
	return isReflection(root.left, root.right);
};

const isReflection = (tree1, tree2) => {
	// Edge Case: If both trees are null, it is symmetric.
	if (tree1 === null || tree2 === null) return tree1 === tree2;
	
	// If the roots of each tree are not equal, it is not symmetric.
	if (tree1.val !== tree2.val) return false;
	
	// The tree is a reflection, and thus symmetric, if tree1.left === tree2.right AND tree1.right === tree2.left;
	return isReflection(tree1.left, tree2.right) && isReflection(tree1.right, tree2.left);
};


// First Recursive Attempt
// var isSymmetric = function(root) {
// 	// Edge Case: If the root is null, it is symmetric.
// 	if (root === null) return true;
	
// 	const left = isSymmetric(root.left);
// 	const right = isSymmetric(root.right);
// 	console.log(left, right, '@@@@@left, right@@@@@');
// 	console.log(left.left === right.right && left.right === right.left, '@@@@@is it balanced@@@@@');
// 	if (left.left === right.right && left.right === right.left) return true;
	
// 	return false;
// };