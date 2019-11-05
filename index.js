/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
    const linkedLists = [l1, l2];
    const numbersMap = {
        l1: [l1.val],
        l1num: 0,
        l2: [l2.val],
        l2num: 0
    };
    
    for (let i = 0; i < 2; i++) {
        let current = linkedLists[i];
        while (current.next !== null) {
            current = current.next;
            numbersMap[`l${i+1}`].push(current.val);
        }
        
        numbersMap[`l${i+1}num`] = parseInt(numbersMap[`l${i+1}`].join(''));
    } 

    const l3num = numbersMap.l1num + numbersMap.l2num;   
    const l3arr = l3num.toString().split('').map((num) => parseInt(num));
    
    class Node {
        constructor(val, next) {
            this.val = val;
            this.next = next || null;
        }
    }
    
    class LinkedList {
        constructor() {
            this.val = null;
            this.next = null;
        }
        
        prepend (val) {
            if (!this.val) {
                this.val = val;
            } else {
                let temp = new Node(this.val, this.next);
                console.log(temp, 'temp');
                this.val = val;
                this.next = temp;
            }
        }
    }
    
    const createLinkedList = (arr) => {
        const l3LinkedList = new LinkedList;
        for (let i = 0; i < arr.length; i++) {
            l3LinkedList.prepend(arr[i]);
        }
        return l3LinkedList;
    }
    
    createLinkedList(l3arr);
    console.log(l3arr, 'l3arr');
    console.log(createLinkedList(l3arr));
    
    return createLinkedList(l3arr);
};