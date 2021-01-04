/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  const dictionary = new Map();

  for (const cpdomain of cpdomains) {
    const [visitedCount, domain] = cpdomain.split(' ');
    const domainParts = domain.split('.');
    const n = domainParts.length;

    for (let i = 0; i < n; i++) {
      const key = domainParts.join('.');
      const count = dictionary.has(key)
        ? dictionary.get(key) + Number(visitedCount)
        : Number(visitedCount);

      dictionary.set(key, count);
      domainParts.shift();
    }
  }

  const temp = dictionary.entries();
  const result = [...temp].map(([key, value]) => {
    return `${value} ${key}`;
  });

  return result;
}
