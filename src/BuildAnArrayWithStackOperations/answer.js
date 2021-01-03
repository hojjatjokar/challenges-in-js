function buildArray(target, n) {
  let p = 0;
  let output = [];

  for (let i = 1; i <= n; i++) {
    output.push('Push');
    if (i !== target[p]) {
      output.push('Pop');
    } else {
      p++;
    }
    if (p == target.length) break;
  }
  return output;
}
