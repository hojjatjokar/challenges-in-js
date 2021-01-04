/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let result = 0;
  const dictionary = {};

  for (const char of chars) {
    if (char in dictionary) dictionary[char] = dictionary[char] + 1;
    else dictionary[char] = 1;
  }

  words.forEach((item) => {
    const word = {};

    for (const char of item) {
      if (char in word) word[char] = word[char] + 1;
      else word[char] = 1;
    }

    const keys = Object.keys(word);
    let count = 0;

    for (const key of keys) {
      if (key in dictionary && dictionary[key] >= word[key]) count += word[key];
    }

    if (count == item.length) result += item.length;
  });

  return result;
}
