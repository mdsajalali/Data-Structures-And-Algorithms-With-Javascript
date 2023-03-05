// missing number problem number 268 in Leetcode

function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum = sum + i;
  }

  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 = sum2 + nums[i];
  }

  return sum - sum2;
}

console.log(missingNumber([1, 2, 4, 5, 0]));
