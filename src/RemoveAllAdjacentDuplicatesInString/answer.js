/**
 * @param {string} S
 * @return {string}
 */
function removeDuplicates(S) {
  const result = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] == result[result.length - 1]) {
      result.pop();
    } else {
      result.push(S[i]);
    }
  }

  return result.join('');
}
