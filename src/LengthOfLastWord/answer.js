/**
 * @param {string} s
 * @return {number}
 */

// first solution
var lengthOfLastWord = function (s) {
  let hasLastWord = false;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && s[i + 1] && s[i + 1] !== ' ') {
      hasLastWord = true;
      result = 0;
    }

    if (s[i] !== ' ') {
      result++;
    }
  }

  return result;
};

// second solution
function lengthOfLastWord(s) {
  const words = s.split(' ');
  return words.length ? words[words.length - 1].length : 0;
}
