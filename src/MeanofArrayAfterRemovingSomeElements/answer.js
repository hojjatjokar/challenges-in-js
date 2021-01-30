/**
 * @param {number[]} arr
 * @return {number}
 */
function trimMean(arr) {
  const take = arr.length / 20;

  arr.sort((a, b) => a - b);

  for(var i = 0; i < take; i++){
      arr.pop();
      arr.shift();
  }
  const sum = 0;
  
  for(var x of arr){
      sum += x
  }

  return sum / arr.length
}