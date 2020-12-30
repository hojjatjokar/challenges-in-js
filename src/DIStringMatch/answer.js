/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let A = [];
  let inc = 0;
  let dec = S.length;
  let i = 0;

  while (num.length !== S.length + 1) {
    num[i] = S[i] === 'D' ? dec-- : inc++;
    i++;
  }
  return num;
};
