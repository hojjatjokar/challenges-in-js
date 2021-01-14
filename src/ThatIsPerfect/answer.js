function isPerfect(num) {
  const sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) sum += i;
  }

  return num == sum ? 'YES' : 'NO';
}

function thatIsPerfection(str) {
  const [numberOfArgs, ...nums] = str.split('\n');
  const result = [];

  for (const num of nums) {
    isPerfect(num);
  }

  return result.join('\n');
}
