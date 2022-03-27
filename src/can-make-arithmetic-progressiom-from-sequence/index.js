/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  arr.sort((a, b) => b - a);
  const difference = arr[0] - arr[1];

  return arr.every(
    (item, index) =>
      item - arr[index + 1] === difference || index === arr.length - 1
  );
}
