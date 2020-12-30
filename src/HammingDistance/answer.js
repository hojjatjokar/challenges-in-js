/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let count = 0;
  let diff = x ^ y;

  while (diff > 0) {
    count += diff % 2;
    diff = Math.floor(diff / 2);
  }
  return count;
}
