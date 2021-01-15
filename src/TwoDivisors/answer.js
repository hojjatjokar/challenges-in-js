function divisorOfTwo(num) {
  let divisors = 1;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) divisors++;
  }
  console.log(num, divisors);

  return divisors;
}

function isPowerOfTwo(num) {
  return Number.isInteger(Math.log(num) / Math.log(2));
}

function twoDivisors(input) {
  const [numberOfQueries, numberList] = input.split('\n');
  const numbers = numberList.split(' ');
  const result = [];

  for (const value of numbers) {
    const count = divisorOfTwo(Number(value));
    if (isPowerOfTwo(count)) result.push(value);
  }

  return result.join(' ');
}

console.log(
  twoDivisors(`3
1 2 3`)
);

console.log(
  twoDivisors(`3
1 2 9 10 11 12`)
);
