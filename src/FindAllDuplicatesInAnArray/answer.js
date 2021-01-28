/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  const hashMap = new Map();

  return nums.filter((item) => {
    if (hashMap.has(item)) return true;
    hashMap.set(item, true);
  });
}
