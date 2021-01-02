/**
 * @param {number} n
 * @return {string}
 */
function generateTheString(n) {
  let result = '';
  const isEven = n % 2 === 0;
  for (let i = 0, end = isEven ? n - 1 : n; i < end; i++) {
    result += 'x';
  }
  if (isEven) {
    result += 'y';
  }

  return result;
}
