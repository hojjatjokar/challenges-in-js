/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < n; i++) {
    for (let j = i ** 2; j < n; j += i) {
      primes[j] = false;
    }
  }

  return primes.filter((item) => item == true).length;
}
