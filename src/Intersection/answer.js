/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const result = [];
  const hashMap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    hashMap.set(
      nums1[i],
      hashMap.has(nums1[i]) ? hashMap.get(nums1[i]) + 1 : 1
    );
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hashMap.has(nums2[i]) && hashMap.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      hashMap.set(nums2[i], 0);
    }
  }

  return result;
}
