/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums){
  const numsMap = new Map();

  for(const item of nums){
    if(numsMap.has(item)) return true;
    numsMap.set(item, true);
  }

  return false;
}

export default containsDuplicate;

// function containsDuplicate(nums) {
//   const hashMap = new Map();

//   for (const value of nums) {
//     if (hashMap.has(value)) return true;
//     hashMap.set(value, true);
//   }

//   return false;
// }
