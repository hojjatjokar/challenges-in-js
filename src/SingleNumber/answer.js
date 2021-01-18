/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hashMap = new Map();

  for (let value of nums) {
    if (hashMap.has(value)) hashMap.delete(value);
    else hashMap.set(value, true);
  }

  return hashMap.keys().next().value;
};
