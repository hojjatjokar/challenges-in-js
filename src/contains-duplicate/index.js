const errorMessages = {
  argumentType: 'ContainsDuplicate function expect the argument to be a type of array',
  argumentContent: 'ContainsDuplicate function expect the argument to be a array of numers, your array is likely contain a type of other than number',
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums){
  if(!Array.isArray(nums)) throw new Error(errorMessages.argumentType);
  const numsMap = new Map();

  for(const item of nums){
    if(typeof item !== 'number' || Number.isNaN(item)) throw Error(errorMessages.argumentContent);
    if(numsMap.has(item)) return true;
    numsMap.set(item, true);
  }

  return false;
}

export {
  errorMessages,
}
export default containsDuplicate;
