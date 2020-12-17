function removeDuplicates(nums) {
  if (nums.length == 0) return 0;

  let counter = 1;

  while (counter < nums.length) {
    if (nums[counter] === nums[counter - 1]) {
      nums.splice(counter, 1);
    } else {
      counter++;
    }
  }

  return nums.length;
}
