/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const dictionary = {};

  nums2.forEach((val) => {
    dictionary[val] = dictionary[val] ? dictionary[val] + 1 : 1;
  });

  let result = [];

  for (const key of nums1) {
    if (dictionary[key] > 0) {
      result.push(key);
      dictionary[key] = dictionary[key] - 1;
    }
  }

  return result;
}
