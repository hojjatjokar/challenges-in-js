/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const result = [];

  let counts = A.map((value) => {
    const count = {};

    for (let i = 0; i < value.length; i++) {
      const letter = value[i];

      count[letter] = count[letter] ? count[letter] + 1 : 1;
    }

    return count;
  });

  const firstWordCount = counts[0];
  const firstWordKeys = Object.keys(firstWordCount);

  for (let i = 0; i < A[0].length; i++) {
    const letter = A[0][i];
    let letterCount = 1;

    for (let j = 1; j < counts.length; j++) {
      if (counts[j][letter] > 0) {
        letterCount++;
        counts[j][letter]--;
      }
    }

    if (letterCount === A.length) {
      result.push(letter);
    }
  }

  return result;
};
