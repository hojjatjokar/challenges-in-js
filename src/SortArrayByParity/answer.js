function sortArrayByParity(arr) {
  const evens = [];
  const odds = [];

  arr.forEach((item) => {
    if (item % 2 === 0) {
      evens.push(item);
    } else {
      odds.push(item);
    }
  });

  return [...evens, ...odds];
}

function sortArrayByParity2(arr) {
  return arr.sort((a, b) => {
    // if (a is odd) AND (b is even)

    return a % 2 !== 0 && b % 2 === 0;
  });
}
