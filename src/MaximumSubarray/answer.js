function maxSubArray(nums) {
  let result = nums[0];
  let temp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp) {
      temp = Math.max(temp, nums[i]);
    } else {
      temp += nums[i];
    }

    if (temp > result) {
      result = temp;
    }
  }
}
