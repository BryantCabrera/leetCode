// Split Linked List In Parts

// https://leetcode.com/problems/split-linked-list-in-parts/

// 725. Split Linked List in Parts
// Medium

// 883

// 148

// Add to List

// Share
// Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

// The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

// The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

// Return a List of ListNode's representing the linked list parts that are formed.

// Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
// Example 1:
// Input:
// root = [1, 2, 3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The input and each element of the output are ListNodes, not arrays.
// For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but it's string representation as a ListNode is [].
// Example 2:
// Input: 
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
// Explanation:
// The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
// Note:

// The length of root will be in the range [0, 1000].
// Each value of a node in the input will be an integer in the range [0, 999].
// k will be an integer in the range [1, 50].



// Solution for variation of problem.
// Created 1 -> 4 -> 7 instead of 1 -> 2 -> 3
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} root
//  * @param {number} k
//  * @return {ListNode[]}
//  */
// var splitListToParts = function(root, k) {
// 	// Edge Case: If root is null, or its length is 0, return an empty solution set.;
// 	if (root === null) return new Array(k).fill(null);
	
// 	// Edge Case:If k is 1, we just return the LinkedList as is.
// 	if (k === 1) return [root];
	
// 	const queue = [];
	
// 	let current = root;
	
// 	// Create the queue of nodes to process/split into new LinkedLists.
// 	while (current !== null) {
// 			queue.push(current); 
// 			current = current.next;
// 	}
	
// 	console.log(queue, '@@@@@queue@@@@@');
	
// 	// Initialize the solution to an empty array filled with nulls so that if there aren't enough nodes to fill all of the indices, empty nodes will already have the value we want to return.
// 	const solution = new Array(k);
// 	solution.fill(null);
// 	console.log(solution, '@@@@@solution array initialized@@@@@');
	
// 	// Process all of the nodes in the queue.
// 	for (let i = 0; i < queue.length; i++) {
// 			// Determine which LinkedList/index the current node will go to.
// 			// If there are more nodes than k, we start adding nodes again at the beginning of the solution array.
// 			const allocatedList = i < k ? i : i % k;
			
// 			if (solution[allocatedList]) { 
// 					// If the current index already has a LinkedList initialized, add the node to the list.
// 					solution[allocatedList] = addNodeToLinkedList(solution[allocatedList], new ListNode(queue[i].val));
// 			} else {
// 					// Else, initialize a new LinkedList with the value of the node from the queue being processed.
// 					solution[allocatedList] = new ListNode(queue[i].val);
// 			}
			
// 			console.log(i, allocatedList, solution, '@@@@@i, allocatedList, solution@@@@@');
// 	}
	
// 	return solution;
// };

// const addNodeToLinkedList = (linkedList, node) => {
// 	let current = linkedList;
	
// 	while (current.next !== null) {
// 			current = current.next;
// 	}
	
// 	current.next = node;
	
// 	return linkedList;
// };