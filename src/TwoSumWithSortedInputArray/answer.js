/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const temp = numbers[right] + numbers[left];
    if (temp === target) {
      return [++left, ++right];
    } else if (temp > target) {
      right--;
    } else {
      left++;
    }
  }
}

const numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));
//Output: [1,2]
