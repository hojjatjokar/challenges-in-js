/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i];
  }

  return sum;
}
