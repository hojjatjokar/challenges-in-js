/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    } else {
      hashMap.set(arr[i], 1);
    }
  }
  let occurrences = new Set();
  for (const [key, value] of hashMap) {
    occurrences.add(value);
  }

  return occurrences.size === hashMap.size;
}
