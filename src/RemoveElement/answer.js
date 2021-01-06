/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let count = 0;

  while (count < nums.length) {
    if (nums[count] == val) nums.splice(count, 1);
    else count++;
  }

  return nums.lenght;
}
