function maxDepthAfterSplit(seq) {
  let memberA = false;
  const chars = seq.split('');

  return chars.map((item, index, arr) => {
    if (item === arr[index - 1]) {
      memberA = !memberA;
    }
    return Number(memberA);
  });
}
