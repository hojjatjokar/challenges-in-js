/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length == 1) return nums[0];
  const hashMap = new Map();

  for (const value of nums) {
    if (hashMap.get(value) + 1 > nums.length / 2) return value;

    const temp = hashMap.has(value) ? hashMap.get(value) + 1 : 1;
    hashMap.set(value, temp);
  }
};
