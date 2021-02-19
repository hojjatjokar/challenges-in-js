/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();

  for (const value of s) {
    if (sMap.has(value)) sMap.set(value, sMap.get(value) + 1);
    else sMap.set(value, 1);
  }

  for (const value of t) {
    if (!sMap.has(value) || !sMap.get(value)) return false;
    sMap.set(value, sMap.get(value) - 1);
  }

  return true;
}

export default isAnagram;