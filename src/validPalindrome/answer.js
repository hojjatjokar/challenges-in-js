/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  const regx = /[a-z]|[A-Z]|[0-9]/;

  while (i < j) {
    if (!regx.test(s[i])) {
      i++;
      continue;
    }

    if (!regx.test(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }

  return true;
}
