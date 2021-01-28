/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  let words = s.split(' ');
  words = words.map((word) => {
    let temp = '';
    for (let i = word.length - 1; i >= 0; i--) {
      temp += word[i];
    }
    return temp;
  });

  return words.join(' ');
}
