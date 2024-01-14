// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
  // using hash map, space / memory complexity = O(n), time = O(nlogn)
  var dict = {};
  var size = nums.length;
  for (i = 0; i < size; i++){
    var left = target - nums[i];
    if(left in dict){
      console.log("[" + dict[left] + "," + i + "]");
      return [dict[left], i];
    }
    dict[nums[i]] = i;
  }
  return [-1, -1];

  // Brute force method: memory / space complexity = O(1), time = O(n^2) 
  // var len = nums.length;
  // var i = 0;
  // while (i < len - 1) {
  //     for (j = i + 1; j < len; j++) {
  //         if (nums[i] + nums[j] == target) {
  //             console.log("[" + i + "," + j + "]");
  //             return [i, j];
  //         }
  //     }
  //     i++;
  // }
};

twoSum([3,2,4], 6);
twoSum([2,7,11,15], 9);
twoSum([3,3], 6);

//2. Add Two Numbers
//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
  let n1 = getNumFromList(l1);
  let n2 = getNumFromList(l2);
  let sum = n1 + n2;
  let stringSum = sum.toString();
  let answer = [];
  for (i = 0; i < stringSum.length; i++) {
      answer.unshift(stringSum.charAt(i));
      answer[i] = Number(answer[i]);
  }

  const linkedList = createLinkedListFromArray(answer);
  for (i = 0; i < answer.length; i++){
    console.log(answer[i]);
  }
  
  return linkedList;
};

var getNumFromList = function (list) {
  let num = [];
  while (list.next) {
      num.unshift(list.val)
      list = list.next;
  }
  num.unshift(list.val);
  let value = "";
  for (i = 0; i < num.length; i++) {
      value += num[i];
  }
  return BigInt(value);
}

function createLinkedListFromArray(arr) {
  // Base case: an empty array returns null
  if (arr.length === 0) {
      return null;
  }

  // Create a new node with the first element of the array
  const node = new ListNode(arr[0]);

  // Recursively create the rest of the linked list from the remaining elements
  node.next = createLinkedListFromArray(arr.slice(1));

  return node;
}

let arr1 = [9,9,9,9,9,9,9];
let arr2 = [9,9,9,9];
let arr3 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let arr4 = [5,6,4];
const linkedListArr1 = createLinkedListFromArray(arr1);
const linkedListArr2 = createLinkedListFromArray(arr2);
const linkedListArr3 = createLinkedListFromArray(arr3);
const linkedListArr4 = createLinkedListFromArray(arr4);

addTwoNumbers(linkedListArr1, linkedListArr2);
addTwoNumbers(linkedListArr3, linkedListArr4);