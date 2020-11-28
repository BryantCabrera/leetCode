// Merge Two Sorted Lists

// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let l1Current = l1;
	let l2Current = l2;
	
	let startingValue = null;
	if (l1Current !== null && l2Current !== null) {
			if (l1Current.val < l2Current.val) {
					startingValue = l1Current.val;
					l1Current = l1Current.next;
			} else {
					// If l2's head value is less than OR equal to l1's head value, use l2's head for the starting value.
					startingValue = l2Current.val;
					l2Current = l2Current.next;
			}
	} else if (l1Current !== null && l2Current === null) {
			startingValue = l1Current.val;
			l1Current = l1Current.next;
	} else if (l1Current === null && l2Current !== null) {
			startingValue = l2Current.val;
			l2Current = l2Current.next;
	} else if (l1Current === null && l2Current === null) {
			// Edge case: if both nodes are null.
			return null;
	}
	
	
	const solution = new ListNode(startingValue);
	
	let solutionCurrent = solution;
	while (l1Current ?? l2Current) {
			if (solutionCurrent === null) break;
			
			if (l1Current !== null && l2Current !== null) {
					if (l1Current.val < l2Current.val) {
							solutionCurrent.next = new ListNode(l1Current.val);
							l1Current = l1Current.next;
					} else {
							// If l2Current's value is less than or equal to l1Current's value, use l2Current's value for the next node's value.
							solutionCurrent.next = new ListNode(l2Current.val);
							l2Current = l2Current.next;
					}
			} else if (l1Current !== null && l2Current === null) {
					// If l2Current is null, use l1Current's value for the next node's value.
					if (l2Current === null || l1Current.val < l2Current.val) {
							solutionCurrent.next = new ListNode(l1Current.val);
							l1Current = l1Current.next;
					}
			} else if (l2Current !== null && l1Current === null) {
					// If l1Current is null, use l2Current's value for the next node's value.
					solutionCurrent.next = new ListNode(l2Current.val);
					l2Current = l2Current.next;
			}
			
			if (solutionCurrent !== null) {
					solutionCurrent = solutionCurrent.next;
			}
	}
	
	return solution;
};

// Second Attempt on 11.28.20
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
// 	let l1Current = l1;
// 	let l2Current = l2;
	
// 	let startingValue;
// 	if (l1Current.val < l2Current.val) {
// 			startingValue = l1Current.val;
// 			l1Current = l1Current.next;
// 	} else {
// 			// If l2's head value is less than OR equal to l1's head value, use l2's head for the starting value.
// 			startingValue = l2Current.val;
// 			l2Current = l2Current.next;
// 	}
	
// 	const solution = new ListNode(startingValue);
// 	console.log(solution, solution.next, '@@@@@solution@@@@@');
	
// 	let solutionCurrent = solution;
// 	while (l1Current !== null ?? l2Current !== null) {
// 			if (solutionCurrent === null) break;
			
// 			if (l1Current !== null && l2Current !== null) {
// 					if (l1Current.val < l2Current.val) {
// 							solutionCurrent.next = new ListNode(l1Current.val);
// 							l1Current = l1Current.next;
// 					} else {
// 							solutionCurrent.next = new ListNode(l2Current.val);
// 							l2Current = l2Current.next;
// 					}
					
// 			} else if (l1Current !== null && l2Current === null) {
// 					if (l2Current === null || l1Current.val < l2Current.val) {
// 							solutionCurrent.next = new ListNode(l1Current.val);
// 							l1Current = l1Current.next;
// 					}
// 			} else if (l2Current !== null && l1Current === null) {
// 					// If l2's head value is less than or equal to l1's head value OR l1Current is null, use l2's head for the next node's value.
// 					solutionCurrent.next = new ListNode(l2Current.val);
// 					l2Current = l2Current.next;
// 			}
			
// 			if (solutionCurrent !== null) {
// 					solutionCurrent = solutionCurrent.next;
// 			}
// 			console.log(l1Current, l2Current, solutionCurrent, '@@@@@solutionCurrent@@@@@');
// 	}
	
// 	return solution;
// };

// First Attempt from 10.01.2019
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
// 	console.log(l1, 'l1');
// 	console.log(l2, 'l2');
	
// 	function listNode(val) {
// 			this.val = val;
// 			this.next = null;
// 	}
	
// 	let mergedList;
	
// 	let temp;
// 	let temp1 = l1;
// 	let temp2 = l2;
	
// 	if (temp1.val < temp2.val) {
// 			mergedList = listNode(temp1.val);
// 			temp1 = temp1.next;
// 	} else {
// 			mergedList = listNode (temp2.val);
// 			temp2 = temp2.next;
// 	}
	
// 	while (temp1.next !== null && temp2.next !== null) {
// 			// find the next lowest value and make it mergedList's next node
			
// 			// find the next lower value   
// 			if (temp1.val < temp2.val) {
// 					 // make it mergedList's next node
// 					mergedList.next = (listNode(temp1.val));
// 					// traverse down that respective linkedList
// 					temp1 = temp1.next;
// 			} else {
// 					 // make it mergedList's next node
// 					mergedList.next = (listNode(temp2.val));
// 					// traverse down that respective linkedList
// 					temp2 = temp2.next;
// 			}
// 	}
	
// 	return mergedList;
// };