/**
 * @param {number[]} arr
 * @return {number}
 */

function minSetSize(arr) {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.has(arr[i]) ? hashMap.get(arr[i]) + 1 : 1);
  }

  const sorted = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));

  let result = 0;
  let count = 0;

  for (const [key, value] of sorted) {
    result += value;
    count++;
    if (result >= arr.length / 2) {
      return count;
    }
  }
}
