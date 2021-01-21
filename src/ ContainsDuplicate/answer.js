/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const hashMap = new Map();

  for (const value of nums) {
    if (hashMap.has(value)) return true;
    hashMap.set(value, true);
  }

  return false;
}
