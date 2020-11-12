// Serialize and Deserialize BST

// https://leetcode.com/explore/featured/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3489/

// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

 

// Example 1:

// Input: root = [2,1,3]
// Output: [2,1,3]
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	console.log(root, 'root');
	return '1,2,3';
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
	// The string we pass in has to be in ascending order where each node's value is delimited by a ','
	const createBST = (arr, startIndex, endIndex) => {
			// EDGE CASE: If the array is empty or not and array, return null.
	if (arr.length === 0 || !Array.isArray(arr)) return null;

	// Once the endIndex is less than the startIndex, return null.
	// This effectively begins processing a new branch.
	if (endIndex < startIndex) return null;
	
	// Find the value in the middle of the array.  This will be the root.
	// We arbitrarily Math.floor because in the case of an array with an odd length, either the node to the left of the midpoint index value or to the right of the index value (e.g. 2 or 3 in the case the midpoint is 2.5) will suffice as the root.
	const midpoint = Math.floor((startIndex + endIndex) / 2);
	
	// Create a new BinaryTreeNode.
	const node = new TreeNode(parseInt(arr[midpoint]));
	
	// Recursively create the left and right nodes of the current node.
	node.left = createBST(arr, startIndex, midpoint - 1);
	node.right = createBST(arr, midpoint + 1, endIndex);

	return node;
	};
	
	console.log(data.split(','), 'split');
	const dataArr = data.split(',');
	
	
	const root = createBST(dataArr, 0, dataArr.length - 1);
	
	console.log(root, 'root');
	
	return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/