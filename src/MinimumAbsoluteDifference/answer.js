function minimumAbsDifference(arr) {
  let minDiff = Infinity;
  const result = [];
  arr.sort((a,b) => a-b);
  
  for(let i=0; i<arr.length-1; i++) {
      const diff = arr[i+1] - arr[i];
      minDiff = Math.min(minDiff, diff);
  }
  
  for(let i=0; i<arr.length-1; i++) {
      const diff = arr[i+1] - arr[i];
      if(diff === minDiff) {
          result.push([arr[i], arr[i+1]]);
      }
  }    
  
  return result;
}