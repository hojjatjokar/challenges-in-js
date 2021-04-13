/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let result = '';
  const strNum = String(num);
  let state = false;

  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] == 9) {
      result += 9;
    }

    if (strNum[i] == 6 && state) {
      result += 6;
    }

    if (strNum[i] == 6 && !state) {
      result += 9;
      state = true;
    }
  }

  return result;
}
