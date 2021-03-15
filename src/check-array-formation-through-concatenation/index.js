/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
function canFormArray(arr, pieces) {
  const piecesMap = new Map();

  for (let i = 0; i < pieces.length; i++) {
    piecesMap.set(pieces[i][0], i);
  }

  for (let i = 0; i < arr.length; i++) {
    let check = [];

    if (!piecesMap.has(arr[i])) return false;
    else check = [...pieces[piecesMap.get(arr[i])]];

    for (let k = 1; k < check.length; k++) {
      i++;
      if (arr[i] !== check[k]) return false;
    }
  }

  return true;
}
