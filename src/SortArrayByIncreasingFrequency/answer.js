/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  const hashMap = new Map();
  
  for(const value of nums){
    hashMap.set(value, hashMap.has(value) ? hashMap.get(value)+1 : 1);
  }
  
  const sorted = [...hashMap].sort((a, b) => {
    if(a[1] - b[1] == 0) return  b[0] - a[0]
    return a[1] - b[1];
  });
  const result = [];
  
  for(let [key,value] of sorted){
    while(value){
      result.push(key);
      value -= 1;
    }
  }
  
  return result
}
