function buildArray(target, n) {
  let output = [];
  let pointer = 0;

  for (let i = 1; i <= n; i++) {
    output.push('Push');

    if (target[pointer] !== i) {
      output.push('Pop');
    } else {
      pointer++;
    }

    if (pointer == target.length) break;
  }

  return output;
}
