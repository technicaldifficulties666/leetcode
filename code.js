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

//twoSum([3,2,4], 6);
//twoSum([2,7,11,15], 9);
//twoSum([3,3], 6);

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
  // let n1 = getNumFromList(l1);
  // let n2 = getNumFromList(l2);
  // let sum = n1 + n2;
  // let stringSum = sum.toString();
  // let answer = [];
  // for (i = 0; i < stringSum.length; i++) {
  //     answer.unshift(stringSum.charAt(i));
  //     answer[i] = Number(answer[i]);
  // }

  // const linkedList = createLinkedListFromArray(answer);
  // for (i = 0; i < answer.length; i++){
  //   console.log(answer[i]);
  // }
  
  // return linkedList;

  // Leet code solution 
  let dummyhead = new ListNode(0);
  let tail = dummyhead;
  let carry = 0;

  while (l1 != null || l2 != null || carry != 0) {
      let digit1 = (l1 != null) ? l1.val : 0;
      let digit2 = (l2 != null) ? l2.val : 0;

      let sum = digit1 + digit2 + carry;
      let digit = sum % 10;
      carry = Math.floor(sum / 10); // integer division

      let node = new ListNode(digit);
      tail.next = node;
      tail = tail.next;

      l1 = (l1 != null) ? l1.next : null;
      l2 = (l2 != null) ? l2.next : null;
  }

  let result = dummyhead.next;
  dummyhead.next = null;
  // let output = copyList(result);
  // while (output!= null){
  //   console.log(output.val);
  //   output = output.next;
  // }
  return result;
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

function copyList(l1){
  if (l1 == null){
    return null;
  }
  let result = new ListNode;
    result.val = l1.val;
    result.next = copyList(l1.next);
    return result;
}

/*
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
*/

var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let maxLength = 0;
  let charMap = {};
  let left = 0;

  for (right = 0; right < n; right++){
    if(!(s[right] in charMap) || charMap[s[right]] < left){
      charMap[s[right]] = right;
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      left = charMap[s[right]] + 1;
      charMap[s[right]] = right;
    }
  }
  return maxLength;
}



////////
////TEST CASES

let arr1 = [9,9,9,9,9,9,9];
let arr2 = [9,9,9,9];
let arr3 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let arr4 = [5,6,4];
let arr5 = [2,4,3];
let arr6 = [7,0,8];
const linkedListArr1 = createLinkedListFromArray(arr1);
const linkedListArr2 = createLinkedListFromArray(arr2);
const linkedListArr3 = createLinkedListFromArray(arr3);
const linkedListArr4 = createLinkedListFromArray(arr4);
const linkedListArr5 = createLinkedListFromArray(arr5);
const linkedListArr6 = createLinkedListFromArray(arr6);

addTwoNumbers(linkedListArr4, linkedListArr5);
addTwoNumbers(linkedListArr1, linkedListArr2);

let testcase = "abcabcbb";
let testcase1 = "pwwkew";
let testcase2 = "anviaj";

let answer = lengthOfLongestSubstring(testcase);
let answer1 = lengthOfLongestSubstring(testcase1);
let answer2 = lengthOfLongestSubstring(testcase2);

console.log("longest substring in " + testcase + " is " + answer);
console.log("longest substring in " + testcase1 + " is " + answer1);
console.log("longest substring in " + testcase2 + " is " + answer2);