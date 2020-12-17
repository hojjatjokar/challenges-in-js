/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];

    if (hashMap.has(temp) && hashMap.get(temp) !== i) {
      return [i, hashMap.get(temp)];
    }
  }
}
