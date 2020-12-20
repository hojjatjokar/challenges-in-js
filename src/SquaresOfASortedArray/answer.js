/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  return nums.map((value) => value ** 2).sort((a, b) => a - b);
}
