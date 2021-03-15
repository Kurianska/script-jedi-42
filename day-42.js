// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j];
      }
    }
  }
};


function twoSum(arr, target) {
  arr.some((x, i) => {
    a = arr[i];
    b = arr[i + 1];
    if (a + b === target) return [arr.indexOf(a), arr.indexOf(b)];
  });
}
