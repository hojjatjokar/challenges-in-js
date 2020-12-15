function selfDividingNumbers(left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    const nums = i.toString();
    let counter = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i % nums[j] === 0) {
        counter++;
      }
    }

    if (counter === nums.length) {
      result.push(i);
    }
  }

  return result;
}
