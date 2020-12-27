/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

function countConsistentStrings(allowed, words) {
  const allowedLetters = new Set([...allowed]);

  let result = 0;

  for (const word of words) {
    let count = 0;

    for (const letter of word) {
      if (allowedLetters.has(letter)) {
        count++;
      }
    }

    if (count >= word.length) {
      result++;
    }
  }

  return result;
}
