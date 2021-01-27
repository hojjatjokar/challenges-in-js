function relativeSortArray(arr1, arr2) {
  const hashMap = new Map();
  const result = [];

  for (const value of arr1) {
    hashMap.set(value, hashMap.has(value) ? hashMap.get(value) + 1 : 1);
  }

  for (const value of arr2) {
    let accurance = hashMap.get(value);

    while (accurance) {
      hashMap.set(value, accurance - 1);
      accurance -= 1;
      result.push(value);
    }
  }

  let rest = [];
  for (let [key, value] of hashMap) {
    while (value) {
      rest.push(key);
      value -= 1;
    }
  }
  rest.sort((a, b) => a - b);

  return [...result, ...rest];
}
