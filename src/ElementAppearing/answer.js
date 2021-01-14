// sliding window
function findSpecialInteger(arr) {
  const n = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - n; i++) {
    if (arr[i] === arr[i + n]) return arr[i];
  }
}

// hash map
function findSpecialIntegerWithHashMap(arr) {
  const map = new Map();

  for (const value of arr) {
    if (map.has(value)) map.set(value, map.get(value) + 1);
    else map.set(value, 1);
  }

  let maxValue = 0;
  let maxKey = 0;

  for (const [key, value] of map) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}
