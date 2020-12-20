/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  return arr.map((index) => {
    if (index === arr.length - 1) return -1;
    return Math.max(...arr.slice(index + 1));
  });
}
