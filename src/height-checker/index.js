/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  const sortedHeights = [...heights].sort((a, b) => a - b);

  let counter = 0;

  sortedHeights.forEach((item, index) => {
    if (heights[index] !== item) {
      counter++;
    }
  });

  return counter;
}
