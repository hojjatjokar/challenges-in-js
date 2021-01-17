process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = '';

process.stdin.on('data', function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on('end', function () {
  main(stdin_input);
});

function main(input) {
  const [numberOfCases, ...cases] = input.split('\n');
  let result = 0;

  for (let i = 0; i < numberOfCases; i++) {
    const a = cases[i];
    const b = cases[i + 1];
    const hashMapA = new Map();
    const hashMapB = new Map();

    for (const value of a) {
      if (hashMapA.has(value)) hasMapA.set(value, hashMapA.get(value) + 1);
      else hashMapA.set(value, 1);
    }
    for (const value of b) {
      if (hashMapB.has(value)) hashMapB.set(value, hashMapB.get(value) + 1);
      else hashMapB.set(value, 1);
    }

    for (const value of b) {
      if (hashMapA.has(value) && hashMapA.get(value) > 0)
        hashMapA.set(value, hashMapA.get(value) - 1);
      else result++;
    }
    for (const value of a) {
      if (hashMapB.has(value) && hashMapB.get(value) > 0)
        hashMapB.set(value, hashMapB.get(value) - 1);
      else result++;
    }
  }
  process.stdout.write(result.toString());
}
