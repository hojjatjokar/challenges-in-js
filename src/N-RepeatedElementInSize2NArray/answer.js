function repeatedNTimes(arr) {
  const uniqueElements = new Set();

  for (item of arr) {
    if (uniqueElements.has(item)) return item;
    uniqueElements.add(item);
  }
}

console.log(repeatedNTimes([1, 2, 3, 3]));
