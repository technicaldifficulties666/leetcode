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