// Invert Binary Tree

// https://leetcode.com/problems/invert-binary-tree/

// 226. Invert Binary Tree
// Easy

// 4521

// 69

// Add to List

// Share
// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:

// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.


// Recursive Solution



// Iterative Attempt
const invertLevel = (arr) => {
	console.log(arr, '@@@@@arr of currentLevel@@@@@');
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	
	while(leftIndex < rightIndex) {
			const temp = arr[leftIndex] ? arr[leftIndex].val : arr[leftIndex];
			arr[leftIndex].val = arr[rightIndex] ? arr[rightIndex].val : arr[rightIndex];
			arr[rightIndex].val = temp;
			
			leftIndex++;
			rightIndex--;
	}
};

const levelOrderTraversal = (node) => {  
	const queue = [node];
	
	while (queue.length) {
			console.log(queue, '@@@@@queue@@@@@');
			let numNodesInLevel = queue.length;
			
			const currentLevel= [];
			
			while (numNodesInLevel > 0) {
					const currentNode = queue.shift();
					currentLevel.push(currentNode);
					
					if (currentNode != null) queue.push(currentNode.left);
					if (currentNode != null) queue.push(currentNode.right);
					
					numNodesInLevel--;
			}
			
			invertLevel(currentLevel);
	}
};
	
levelOrderTraversal(root);

return root;