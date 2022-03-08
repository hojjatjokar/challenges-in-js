/**
 * @param {string} s
 * @return {string}
 */
function freqAlphabets(s) {
  let result = [];
  let map = [
    0,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let i = s.length - 1;

  while (i >= 0) {
    if (s[i] === '#') {
      const num = Number(s[i - 2]) * 10 + Number(s[i - 1]);
      result.unshift(map[num]);
      i -= 3;
    } else {
      result.unshift(map[s[i]]);
      i--;
    }
  }

  return result.join('');
}
