const errorMessages = {
  missingArgument: 'Missing argument',
  invalidArgument: 'Invalid argument',
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function intersection(nums1, nums2){
  if(!nums1 || !nums2) throw new Error(errorMessages.missingArgument);
  if(!Array.isArray(nums1) || !Array.isArray(nums2)) throw new Error(errorMessages.invalidArgument);
  
  const result = new Map;
  const nums1Map = new Map;

  for(const item of nums1){
    if(!nums1Map.has(item)) nums1Map.set(item, true);
  }

  for(const item of nums2){
    if(nums1Map.has(item) && !result.has(item)) result.set(item, true);
  }

  return Array.from(result.keys());
}

intersection([1,2,2,1], [2,2])

export {
  errorMessages
}
export default intersection;
