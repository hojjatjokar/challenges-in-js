/**
 * @param {string} number
 * @return {string}
 */
function reformatNumber(input) {
  const temp = input.replace(/ /g, '');
  const num = temp.replace(/-/g, '');
  let result = '';
  let counter = 0;

  while (counter < num.length) {
    const remaining = num.length - counter;
    if (remaining == 4) {
      result += num.substr(counter, 2);
      result += '-';
      counter += 2;
      result += num.substr(counter, 2);
      counter += 2;
    } else {
      result += num.substr(counter, 3);
      counter += 3;
      if (counter < num.length) result += '-';
    }
  }
  return result;
}
